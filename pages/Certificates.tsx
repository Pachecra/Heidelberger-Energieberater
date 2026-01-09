import React from 'react';
import EnergyCertCalculator from '../components/EnergyCertCalculator';
import { AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Energieausweise</h1>
          <p className="text-xl text-gray-600">
            Rechtssicher für Verkauf, Vermietung und Verpachtung. Wir erstellen Verbrauchs- und Bedarfsausweise schnell und unkompliziert.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Info */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                        <AlertTriangle className="text-orange-500 mr-2" />
                        Pflicht seit 2009
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Wer eine Immobilie verkauft oder neu vermietet, muss dem Interessenten einen gültigen Energieausweis vorlegen. Bei Nichtvorlage drohen Bußgelder bis zu <strong>15.000 €</strong>.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <div className="flex-1 bg-gray-50 p-4 rounded border border-gray-100">
                            <h3 className="font-bold text-slate-800 mb-1">Verbrauchsausweis</h3>
                            <p className="text-xs text-gray-600">Basiert auf gemessenem Verbrauch der letzten 3 Jahre. Günstiger, aber nutzerabhängig.</p>
                        </div>
                        <div className="flex-1 bg-gray-50 p-4 rounded border border-gray-100">
                            <h3 className="font-bold text-slate-800 mb-1">Bedarfsausweis</h3>
                            <p className="text-xs text-gray-600">Technische Analyse der Bausubstanz. Objektiv und nutzerunabhängig.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                        <FileText className="text-emerald-600 mr-2" />
                        Benötigte Unterlagen
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                        <li className="flex items-center"><CheckCircle2 size={14} className="text-emerald-500 mr-2"/> Baupläne / Grundrisse</li>
                        <li className="flex items-center"><CheckCircle2 size={14} className="text-emerald-500 mr-2"/> Heizkostenabrechnungen (3 Jahre)</li>
                        <li className="flex items-center"><CheckCircle2 size={14} className="text-emerald-500 mr-2"/> Daten zur Heizungsanlage</li>
                        <li className="flex items-center"><CheckCircle2 size={14} className="text-emerald-500 mr-2"/> Angaben zu Dämmung/Fenstern</li>
                        <li className="flex items-center"><CheckCircle2 size={14} className="text-emerald-500 mr-2"/> Schornsteinfegerprotokoll</li>
                    </ul>
                </div>
            </div>

            {/* Right: Calculator */}
            <div>
                <EnergyCertCalculator />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;