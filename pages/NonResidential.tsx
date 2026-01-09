import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, Landmark, School, ArrowRight, CheckCircle2 } from 'lucide-react';

const NonResidential: React.FC = () => {
  return (
    <div className="pt-8 pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm bg-emerald-50 px-3 py-1 rounded-full">DIN V 18599</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-6 mb-6 tracking-tight">Nichtwohngebäude</h1>
          <p className="text-xl text-gray-600 font-light">
            Maßgeschneiderte Konzepte für Kommunen, KMU und Industrie. Effizienz steigern, Kosten senken.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-20 h-[400px]">
            {/* Civil Engineer on Site Image */}
             <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Ingenieur auf Baustelle" 
                className="w-full h-full object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white max-w-2xl">
                <h2 className="text-3xl font-bold mb-2">Professionelle Begleitung</h2>
                <p className="text-lg text-gray-200">Wir verstehen die komplexen Anforderungen von Gewerbeimmobilien.</p>
            </div>
        </div>

        {/* Target Groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <TargetGroupCard icon={<Factory />} title="Industrie" />
            <TargetGroupCard icon={<Building2 />} title="Gewerbe & KMU" />
            <TargetGroupCard icon={<Landmark />} title="Kommunen" />
            <TargetGroupCard icon={<School />} title="Soziale Träger" />
        </div>

        {/* Details Content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Analyse nach DIN V 18599</h2>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
                    Die Energieberatung für Nichtwohngebäude betrachtet nicht nur die Gebäudehülle und Heizung, sondern ganzheitlich auch Beleuchtung, Lüftung, Klimatisierung und Prozesswärme. Unser Ziel ist ein wirtschaftliches Sanierungskonzept, das Ihre Betriebskosten dauerhaft senkt und die ESG-Kriterien erfüllt.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Antragsberechtigte</h3>
                <div className="bg-gray-50 p-8 rounded-2xl mb-10 border border-gray-100">
                    <ul className="space-y-4">
                        {[
                            'Kleine und mittlere Unternehmen (KMU)',
                            'Kommunale Gebietskörperschaften',
                            'Gemeinnützige Organisationen & Kirchen',
                            'Nicht-KMU bis max. 500.000 kWh Jahresverbrauch'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                                <CheckCircle2 className="text-emerald-500 mr-3" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6">Unsere Leistungen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ServiceDetailBox title="Sanierungskonzept" desc="Detaillierte Roadmap für Neubau und Bestand (Effizienzgebäude)." />
                    <ServiceDetailBox title="Neubauplanung" desc="Nachweise für KfW-Effizienzgebäude Standards und QNG." />
                    <ServiceDetailBox title="Wirtschaftlichkeit" desc="Berechnung der Amortisationszeiten nach DIN 2067." />
                    <ServiceDetailBox title="Fördermittel" desc="BEG EM, BEG WG/NWG, Kommunalrichtlinie voll ausgeschöpft." />
                </div>
            </div>

            <div className="lg:w-1/3">
                <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl sticky top-24 border border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-emerald-400">Förderung nutzen</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Der Staat übernimmt bis zu <strong>80% der Beratungskosten</strong> für Energieberatungen im Mittelstand und bei Kommunen.
                    </p>
                    <Link to="/kontakt" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-xl font-bold transition-all shadow-lg">
                        Angebot anfordern
                    </Link>
                    <p className="text-xs text-center mt-4 text-gray-500">Unverbindlich & Kostenlos</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const TargetGroupCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 shadow-sm rounded-2xl text-center hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="text-emerald-600 mb-4 w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-full">
            {icon}
        </div>
        <span className="font-bold text-slate-800">{title}</span>
    </div>
);

const ServiceDetailBox = ({ title, desc }: { title: string, desc: string }) => (
    <div className="border border-gray-200 p-6 rounded-xl hover:border-emerald-500 hover:bg-emerald-50/30 transition-colors cursor-default">
        <div className="font-bold mb-2 text-slate-900">{title}</div>
        <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
    </div>
);

export default NonResidential;