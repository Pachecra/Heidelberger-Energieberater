import React from 'react';
import { Link } from 'react-router-dom';
import SavingsChart from '../components/SavingsChart';
import { Check, ArrowRight } from 'lucide-react';

const Residential: React.FC = () => {
  return (
    <div className="pt-8 pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Wohngebäude Sanierung</h1>
          <p className="text-xl text-gray-600 font-light">
            Senken Sie Ihre Energiekosten und steigern Sie den Wohnkomfort. Wir begleiten Sie von der Analyse bis zur Förderung.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Construction Worker / Inspection Image */}
                <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Bauinspektion und Analyse" 
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                    <p className="text-white font-medium">Detaillierte Analyse vor Ort</p>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Unsere Leistungen für Eigenheime & MFH</h2>
            <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed text-lg font-light text-gray-600 mb-6">
                    Eine professionelle Energieberatung ist der erste Schritt zu einem zukunftssicheren Zuhause. Wir analysieren den energetischen Ist-Zustand Ihres Gebäudes und zeigen Ihnen wirtschaftliche Sanierungswege auf.
                </p>
                <ul className="space-y-4">
                    {[
                        'Detaillierte Bestandsaufnahme (Gebäudehülle & Technik)',
                        'Individueller Sanierungsfahrplan (iSFP) mit Bonus',
                        'Planung von Einzelmaßnahmen (Fenster, Dach, Heizung)',
                        'Konzept zum Effizienzhaus (Komplettsanierung)',
                        'Komplettes Fördermittelmanagement (BAFA & KfW)'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start">
                            <div className="bg-emerald-100 p-1.5 rounded-full mr-4 text-emerald-600 mt-0.5">
                                <Check size={16} />
                            </div>
                            <span className="font-medium text-slate-800">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-10 bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Der iSFP-Bonus</h3>
                <p className="text-gray-600">
                    Mit einem individuellen Sanierungsfahrplan (iSFP) erhalten Sie bei der Umsetzung von Maßnahmen an der Gebäudehülle (z.B. Fenster, Dämmung) <strong>5% zusätzliche Förderung</strong>.
                </p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <SavingsChart />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Lohnt sich das?</h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Die Kombination aus hohen Energiepreisen und staatlichen Zuschüssen macht energetische Sanierung so attraktiv wie nie zuvor.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        In unserem Beispiel amortisiert sich der Heizungstausch dank Förderung und Brennstoffeinsparung bereits nach wenigen Jahren. Zudem steigern Sie den Wert Ihrer Immobilie massiv.
                    </p>
                </div>
            </div>
        </div>

        <div className="text-center bg-slate-900 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Starten Sie jetzt Ihre Sanierung</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Nutzen Sie unser kostenloses Erstgespräch, um Ihre Möglichkeiten zu prüfen.
                </p>
                <Link to="/kontakt" className="inline-flex items-center bg-emerald-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/25">
                    Förderung prüfen <ArrowRight className="ml-2" />
                </Link>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Residential;