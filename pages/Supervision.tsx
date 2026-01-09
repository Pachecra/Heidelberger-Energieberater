import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Search, PiggyBank } from 'lucide-react';

const Supervision: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Baubegleitung & Fördermittel</h1>
                <p className="text-xl text-gray-600">
                    Wir sichern Ihre Qualität und Ihre Zuschüsse. Von der Antragstellung bis zur Schlussrechnung.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow">
                    <PiggyBank className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Maximale Fördermittel</h3>
                    <p className="text-gray-600">
                        Der Dschungel aus BAFA, KfW und kommunalen Programmen ist komplex. Wir identifizieren die optimalen Kombinationen für Sie und übernehmen die bürokratische Antragstellung.
                    </p>
                </div>
                <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow">
                    <HardHat className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Qualitätssicherung</h3>
                    <p className="text-gray-600">
                        Wir prüfen die fachgerechte Umsetzung der energetischen Maßnahmen auf der Baustelle. Vermeiden Sie Bauschäden durch Wärmebrücken oder Luftundichtigkeiten.
                    </p>
                </div>
                <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow">
                    <Search className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Verwendungsnachweis</h3>
                    <p className="text-gray-600">
                        Damit das Fördergeld fließt, müssen nach Abschluss alle Dokumente korrekt eingereicht werden (Technische Projektbeschreibung, Rechnungsprüfung). Wir erledigen das.
                    </p>
                </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">50% Förderung für Baubegleitung</h2>
                    <p className="text-gray-300">
                        Wussten Sie, dass die Kosten für den Energieeffizienz-Experten (unsere Leistung) ebenfalls mit 50% durch die BAFA gefördert werden?
                    </p>
                </div>
                <Link to="/kontakt" className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                    Angebot anfordern
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Supervision;