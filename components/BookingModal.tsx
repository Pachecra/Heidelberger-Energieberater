import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  // Mock dates (next 3 days)
  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 3; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip weekends simple check
      if (d.getDay() !== 0 && d.getDay() !== 6) {
          dates.push(d);
      }
    }
    return dates;
  };

  const times = ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"];
  const dates = getDates();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' }));
    setSelectedTime(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setStep(3), 500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Calendar className="text-emerald-400" size={20} />
            <span className="font-bold">Kostenlose Erstberatung (20 Min)</span>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors" aria-label="Schließen">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm text-emerald-800">
                Wählen Sie einen passenden Termin für Ihr unverbindliches telefonisches Erstgespräch.
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 mb-3 block">1. Tag wählen</h3>
                <div className="grid grid-cols-3 gap-3">
                  {dates.map((date, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDateSelect(date)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedDate === date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' })
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                          : 'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50'
                      }`}
                    >
                      <div className="text-xs opacity-80 uppercase">{date.toLocaleDateString('de-DE', { weekday: 'short' })}</div>
                      <div className="font-bold text-lg">{date.getDate()}.{date.getMonth()+1}.</div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div className="animate-fadeIn">
                  <h3 className="font-bold text-slate-800 mb-3 block">2. Uhrzeit wählen (Europe/Berlin)</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                          selectedTime === time
                            ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                            : 'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50'
                        }`}
                      >
                        <Clock size={14} /> {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4"
              >
                Weiter zu den Kontaktdaten
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
               <h3 className="font-bold text-xl text-slate-800 mb-4">Ihre Daten</h3>
               <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm flex justify-between items-center mb-4">
                 <span>{selectedDate} um {selectedTime} Uhr</span>
                 <button type="button" onClick={() => setStep(1)} className="text-emerald-600 underline">Ändern</button>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                 <input 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" 
                  />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">E-Mail *</label>
                 <input 
                    required 
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" 
                  />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Telefon (für den Rückruf) *</label>
                 <input 
                    required 
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" 
                  />
               </div>

               <div className="pt-2">
                 <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg"
                 >
                   Termin verbindlich buchen
                 </button>
                 <button type="button" onClick={() => setStep(1)} className="w-full text-center text-slate-500 text-sm mt-3 hover:underline">Zurück</button>
               </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-emerald-600 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Termin bestätigt!</h3>
              <p className="text-gray-600 mb-6">
                Vielen Dank, {formData.name}.<br/>
                Wir haben Ihren Termin für den <strong>{selectedDate} um {selectedTime} Uhr</strong> reserviert.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Eine Bestätigung wurde an {formData.email} gesendet.
              </p>
              <button onClick={onClose} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                Zurück zur Website
              </button>
            </div>
          )}
        </div>
        <div className="bg-gray-50 p-3 text-center text-xs text-gray-400 border-t border-gray-100">
           Heidelberger Energieberater GbR - Datenschutzerklärung akzeptiert
        </div>
      </div>
    </div>
  );
};

export default BookingModal;