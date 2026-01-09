import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  privacy: boolean;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Inputs>();
  const [success, setSuccess] = React.useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setSuccess(true);
    reset();
  };

  return (
    <div className="pt-8 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Kontakt aufnehmen</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl h-fit">
                <h2 className="text-2xl font-bold mb-8 text-emerald-400">Heidelberger Energieberater GbR</h2>
                
                <div className="space-y-8">
                    <div className="flex items-start">
                        <MapPin className="text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <div className="font-bold text-lg">Anschrift</div>
                            <address className="not-italic text-gray-300">
                                Schwetzinger Straße 51<br/>
                                69124 Heidelberg-Kirchheim
                            </address>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Phone className="text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <div className="font-bold text-lg">Telefon</div>
                            <a href="tel:06221782020" className="text-gray-300 hover:text-white transition-colors block">06221 782020</a>
                            <div className="text-sm text-gray-500 mt-1">Kostenlose Erstberatung</div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <div className="font-bold text-lg">E-Mail</div>
                            <a href="mailto:info@heidelberger-energieberater.de" className="text-gray-300 hover:text-white transition-colors block break-all">info@heidelberger-energieberater.de</a>
                        </div>
                    </div>

                     <div className="flex items-start">
                        <Clock className="text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <div className="font-bold text-lg">Öffnungszeiten</div>
                            <div className="text-gray-300">Mo - Fr: 08:00 - 18:00 Uhr</div>
                            <div className="text-sm text-gray-500 mt-1">Zeitzone: Europe/Berlin</div>
                        </div>
                    </div>
                </div>

                {/* Real Google Maps Embed */}
                <div className="mt-8 h-64 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
                    <iframe 
                        title="Standort Heidelberger Energieberater"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=Schwetzinger+Stra%C3%9Fe+51%2C+69124+Heidelberg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Nachricht senden</h2>
                {success ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-xl text-center animate-fadeIn">
                        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Vielen Dank!</h3>
                        <p className="mb-6">Ihre Nachricht wurde erfolgreich versendet. Wir melden uns werktags innerhalb von 24 Stunden bei Ihnen.</p>
                        <button onClick={() => setSuccess(false)} className="text-emerald-700 font-semibold underline hover:text-emerald-900">Neue Nachricht senden</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="name">Name *</label>
                            <input 
                                id="name"
                                {...register("name", { required: "Bitte geben Sie Ihren Namen ein." })} 
                                className={`w-full p-3 border rounded-lg outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-emerald-500'}`}
                                placeholder="Ihr vollständiger Name"
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name && <span className="flex items-center text-red-600 text-xs mt-1"><AlertCircle size={12} className="mr-1"/> {errors.name.message}</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="email">E-Mail *</label>
                                <input 
                                    id="email"
                                    {...register("email", { 
                                        required: "E-Mail ist erforderlich.", 
                                        pattern: { value: /^\S+@\S+$/i, message: "Ungültiges E-Mail-Format." } 
                                    })} 
                                    className={`w-full p-3 border rounded-lg outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-emerald-500'}`}
                                    placeholder="ihre@email.de"
                                    type="email"
                                />
                                {errors.email && <span className="flex items-center text-red-600 text-xs mt-1"><AlertCircle size={12} className="mr-1"/> {errors.email.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="phone">Telefon</label>
                                <input 
                                    id="phone"
                                    {...register("phone")} 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                                    placeholder="Für Rückrufe"
                                    type="tel"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="topic">Thema</label>
                            <select 
                                id="topic"
                                {...register("topic")} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white cursor-pointer"
                            >
                                <option value="Erstberatung">Kostenlose Erstberatung</option>
                                <option value="Wohngebäude">Energieberatung Wohngebäude</option>
                                <option value="Nichtwohngebäude">Energieberatung Nichtwohngebäude</option>
                                <option value="Energieausweis">Energieausweis</option>
                                <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="message">Nachricht *</label>
                            <textarea 
                                id="message"
                                {...register("message", { required: "Bitte beschreiben Sie Ihr Anliegen." })} 
                                rows={4}
                                className={`w-full p-3 border rounded-lg outline-none transition-all ${errors.message ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-emerald-500'}`}
                                placeholder="Wie können wir Ihnen helfen?"
                            ></textarea>
                            {errors.message && <span className="flex items-center text-red-600 text-xs mt-1"><AlertCircle size={12} className="mr-1"/> {errors.message.message}</span>}
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div className="flex items-start">
                                <input 
                                    id="privacy"
                                    type="checkbox" 
                                    {...register("privacy", { required: "Zustimmung erforderlich." })} 
                                    className="mt-1 h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 cursor-pointer"
                                />
                                <label htmlFor="privacy" className="ml-3 text-sm text-gray-600 cursor-pointer">
                                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. Diese Einwilligung können Sie jederzeit widerrufen. *
                                </label>
                            </div>
                            {errors.privacy && <span className="flex items-center text-red-600 text-xs mt-2 ml-7"><AlertCircle size={12} className="mr-1"/> {errors.privacy.message}</span>}
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                        >
                            {isSubmitting ? 'Wird gesendet...' : 'Nachricht absenden'}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;