import React, { useState } from 'react';
import { FileCheck, AlertCircle, Building, Calendar, Users } from 'lucide-react';

type CertType = 'BEDARF' | 'VERBRAUCH' | 'BOTH' | 'NONE';

const EnergyCertCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [buildingType, setBuildingType] = useState<'WOHN' | 'NICHTWOHN' | null>(null);
  const [year, setYear] = useState<number>(1990);
  const [units, setUnits] = useState<number>(1);
  const [result, setResult] = useState<CertType>('NONE');

  const handleCalculate = () => {
    if (buildingType === 'NICHTWOHN') {
      setResult('BOTH'); // Usually choice exists for non-residential
      setStep(4);
      return;
    }

    // Wohngebäude Logic
    // Bauantrag vor 1.11.1977 (< 1978 approx) AND less than 5 units -> Bedarf (usually)
    // Simplified for UX:
    if (year < 1978 && units < 5) {
        // Did you sanitize/renovate to WSVO 77 level? Assuming "No" for strict check or forcing Bedarf to be safe
        setResult('BEDARF');
    } else {
        setResult('BOTH');
    }
    setStep(4);
  };

  const reset = () => {
    setStep(1);
    setBuildingType(null);
    setYear(1990);
    setUnits(1);
    setResult('NONE');
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-slate-900 p-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <FileCheck className="mr-2 text-emerald-400" />
          Welchen Ausweis benötige ich?
        </h3>
        <p className="text-gray-400 text-sm mt-1">Interaktiver Berater in 3 Schritten</p>
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-800">Schritt 1: Gebäudeart</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => { setBuildingType('WOHN'); setStep(2); }}
                className="p-6 border-2 border-gray-100 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group"
              >
                <Building className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 mb-3" />
                <div className="font-bold text-slate-900">Wohngebäude</div>
                <div className="text-sm text-gray-500">Ein- & Mehrfamilienhäuser</div>
              </button>
              <button
                onClick={() => { setBuildingType('NICHTWOHN'); setStep(2); }}
                className="p-6 border-2 border-gray-100 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group"
              >
                <Building className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 mb-3" />
                <div className="font-bold text-slate-900">Nichtwohngebäude</div>
                <div className="text-sm text-gray-500">Büros, Gewerbe, öffentliche Bauten</div>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-800">Schritt 2: Baujahr</h4>
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
              <Calendar className="text-slate-500" />
              <input
                type="range"
                min="1900"
                max="2023"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <span className="font-bold text-xl text-emerald-700 min-w-[60px]">{year}</span>
            </div>
            <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="text-gray-500 underline text-sm">Zurück</button>
                <button 
                    onClick={() => setStep(3)} 
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700"
                >
                    Weiter
                </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            {buildingType === 'WOHN' ? (
              <>
                <h4 className="text-lg font-semibold text-slate-800">Schritt 3: Anzahl Wohneinheiten</h4>
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <Users className="text-slate-500" />
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={units}
                    onChange={(e) => setUnits(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </>
            ) : (
                <div className="bg-blue-50 p-4 rounded text-blue-800">
                    Bei Nichtwohngebäuden ist die Anzahl der Einheiten für die Art des Ausweises weniger relevant. Klicken Sie auf "Ergebnis anzeigen".
                </div>
            )}
             <div className="flex justify-between items-center mt-4">
                <button onClick={() => setStep(2)} className="text-gray-500 underline text-sm">Zurück</button>
                <button 
                    onClick={handleCalculate} 
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 shadow-md"
                >
                    Ergebnis anzeigen
                </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center animate-fadeIn">
            <h4 className="text-lg font-semibold text-slate-600 mb-2">Empfehlung für Ihre Immobilie:</h4>
            
            {result === 'BEDARF' && (
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold text-orange-700 mb-2">Bedarfsausweis</h2>
                    <p className="text-orange-900 mb-4">
                        Für Ihr Gebäude ist gesetzlich ein Bedarfsausweis vorgeschrieben, da es weniger als 5 Wohneinheiten hat und der Bauantrag vor dem 1.11.1977 gestellt wurde (ohne wesentliche energetische Sanierung).
                    </p>
                    <div className="text-sm text-orange-800 bg-white/50 p-2 rounded">
                        Analysiert die Bausubstanz (Wände, Fenster, Dach, Heizung) unabhängig vom Nutzerverhalten.
                    </div>
                </div>
            )}

            {result === 'BOTH' && (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg mb-6">
                     <h2 className="text-2xl font-bold text-emerald-700 mb-2">Wahlfreiheit</h2>
                     <p className="text-emerald-900 mb-4">
                        Sie haben die Wahl zwischen einem <strong>Verbrauchsausweis</strong> und einem <strong>Bedarfsausweis</strong>.
                     </p>
                     <p className="text-sm mb-2 text-left">
                        <strong>Tipp:</strong> Der Verbrauchsausweis ist günstiger und basiert auf den Verbrauchsdaten der letzten 3 Jahre. Der Bedarfsausweis ist genauer und zeigt das theoretische Potenzial des Gebäudes.
                     </p>
                </div>
            )}

            <button onClick={reset} className="text-slate-500 underline text-sm mb-4 block mx-auto">Neue Berechnung</button>
            
            <a href="/#/kontakt" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Jetzt Ausweis beantragen
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnergyCertCalculator;