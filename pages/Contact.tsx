import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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
                        <MapPin className="text-emerald-500 mr-4 mt-1" />
                        <div>
                            <div className="font-bold text-lg">Anschrift</div>
                            <address className="not-italic text-gray-300">
                                Schwetzinger Straße 51<br/>
                                69124 Heidelberg-Kirchheim
                            </address>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Phone className="text-emerald-500 mr-4 mt-1" />
                        <div>
                            <div className="font-bold text-lg">Telefon</div>
                            <a href="tel:06221782020" className="text-gray-300 hover:text-white transition-colors">06221 782020</a>
                            <div className="text-sm text-gray-500 mt-1">Kostenlose Erstberatung</div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="text-emerald-500 mr-4 mt-1" />
                        <div>
                            <div className="font-bold text-lg">E-Mail</div>
                            <a href="mailto:info@heidelberger-energieberater.de" className="text-gray-300 hover:text-white transition-colors">info@heidelberger-energieberater.de</a>
                        </div>
                    </div>

                     <div className="flex items-start">
                        <Clock className="text-emerald-500 mr-4 mt-1" />
                        <div>
                            <div className="font-bold text-lg">Öffnungszeiten</div>
                            <div className="text-gray-300">Mo - Fr: 08:00 - 18:00 Uhr</div>
                            <div className="text-sm text-gray-500 mt-1">Zeitzone: Europe/Berlin</div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder - In production use Google Maps Embed API */}
                <div className="mt-8 h-48 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                    <span className="text-gray-500 flex items-center"><MapPin className="mr-2"/> Google Maps Karte hier</span>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Nachricht senden</h2>
                {success ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center">
                        <h3 className="font-bold text-xl mb-2">Vielen Dank!</h3>
                        <p>Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.</p>
                        <button onClick={() => setSuccess(false)} className="mt-4 text-emerald-600 underline">Neue Nachricht</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                            <input 
                                {...register("name", { required: true })} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                                placeholder="Ihr vollständiger Name"
                            />
                            {errors.name && <span className="text-red-500 text-xs">Name ist erforderlich</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                                <input 
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                                    placeholder="ihre@email.de"
                                />
                                {errors.email && <span className="text-red-500 text-xs">Gültige E-Mail erforderlich</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                                <input 
                                    {...register("phone")} 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                                    placeholder="Für Rückrufe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Thema</label>
                            <select 
                                {...register("topic")} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                            >
                                <option value="Erstberatung">Kostenlose Erstberatung</option>
                                <option value="Wohngebäude">Energieberatung Wohngebäude</option>
                                <option value="Nichtwohngebäude">Energieberatung Nichtwohngebäude</option>
                                <option value="Energieausweis">Energieausweis</option>
                                <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                            <textarea 
                                {...register("message", { required: true })} 
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                                placeholder="Wie können wir Ihnen helfen?"
                            ></textarea>
                            {errors.message && <span className="text-red-500 text-xs">Nachricht ist erforderlich</span>}
                        </div>

                        <div className="flex items-start">
                            <input 
                                type="checkbox" 
                                {...register("privacy", { required: true })} 
                                className="mt-1 h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                            />
                            <label className="ml-2 text-sm text-gray-600">
                                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. *
                            </label>
                        </div>
                        {errors.privacy && <span className="text-red-500 text-xs block">Zustimmung erforderlich</span>}

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg disabled:opacity-50"
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