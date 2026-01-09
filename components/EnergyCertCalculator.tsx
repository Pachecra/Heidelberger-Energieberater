import React, { useState, useRef, useEffect } from 'react';
import { FileCheck, Building, Calendar, Users, ArrowRight, RotateCcw } from 'lucide-react';

type CertType = 'BEDARF' | 'VERBRAUCH' | 'BOTH' | 'NONE' | 'DIN18599';

const EnergyCertCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [buildingType, setBuildingType] = useState<'WOHN' | 'NICHTWOHN' | null>(null);
  const [year, setYear] = useState<number>(1990);
  const [units, setUnits] = useState<number>(1);
  const [result, setResult] = useState<CertType>('NONE');
  
  const topRef = useRef<HTMLDivElement>(null);

  // Focus management for accessibility
  useEffect(() => {
    if (topRef.current) {
        topRef.current.focus();
    }
  }, [step]);

  const handleNext = () => {
    if (buildingType === 'NICHTWOHN') {
      // Direct jump for Non-Residential: Always Bedarfsausweis DIN 18599
      setResult('DIN18599');
      setStep(4);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleCalculateWohn = () => {
    // Wohngebäude Logic
    // Bauantrag vor 1.11.1977 (< 1978 approx) AND less than 5 units -> Bedarf (usually)
    if (year < 1978 && units < 5) {
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
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 flex flex-col h-full" ref={topRef} tabIndex={-1}>
      <div className="bg-slate-900 p-6 text-white">
        <h3 className="text-xl font-bold flex items-center">
          <FileCheck className="mr-2 text-emerald-400" />
          Welchen Ausweis benötige ich?
        </h3>
        <p className="text-gray-400 text-sm mt-1">Interaktiver Berater in wenigen Schritten</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-700 h-1.5 mt-4 rounded-full overflow-hidden">
            <div 
                className="bg-emerald-500 h-full transition-all duration-300" 
                style={{ width: buildingType === 'NICHTWOHN' ? (step === 1 ? '33%' : '100%') : `${step * 25}%` }}
            ></div>
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col justify-center">
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h4 className="text-lg font-semibold text-slate-800">Schritt 1: Gebäudeart</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => { setBuildingType('WOHN'); setStep(2); }}
                className="p-6 border-2 border-gray-100 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Building className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 mb-3" />
                <div className="font-bold text-slate-900">Wohngebäude</div>
                <div className="text-sm text-gray-500">Ein- & Mehrfamilienhäuser</div>
              </button>
              <button
                onClick={() => { 
                    setBuildingType('NICHTWOHN'); 
                    // Directly calculate/show result for Non-Residential to avoid unnecessary steps
                    setResult('DIN18599');
                    setStep(4); 
                }}
                className="p-6 border-2 border-gray-100 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Building className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 mb-3" />
                <div className="font-bold text-slate-900">Nichtwohngebäude</div>
                <div className="text-sm text-gray-500">Büros, Gewerbe, öffentliche Bauten</div>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h4 className="text-lg font-semibold text-slate-800">Schritt 2: Baujahr</h4>
            <label htmlFor="year-slider" className="sr-only">Baujahr auswählen</label>
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <Calendar className="text-slate-500" />
              <input
                id="year-slider"
                type="range"
                min="1900"
                max="2023"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <span className="font-bold text-xl text-emerald-700 min-w-[60px]">{year}</span>
            </div>
            <div className="flex justify-between mt-8">
                <button onClick={() => setStep(1)} className="text-gray-500 hover:text-slate-800 underline text-sm">Zurück</button>
                <button 
                    onClick={handleNext} 
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    Weiter
                </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h4 className="text-lg font-semibold text-slate-800">Schritt 3: Anzahl Wohneinheiten</h4>
            <label htmlFor="units-input" className="sr-only">Anzahl Wohneinheiten</label>
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <Users className="text-slate-500" />
              <input
                id="units-input"
                type="number"
                min="1"
                max="100"
                value={units}
                onChange={(e) => setUnits(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              />
            </div>
             <div className="flex justify-between items-center mt-8">
                <button onClick={() => setStep(2)} className="text-gray-500 hover:text-slate-800 underline text-sm">Zurück</button>
                <button 
                    onClick={handleCalculateWohn} 
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    Ergebnis anzeigen
                </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center animate-fadeIn">
            <h4 className="text-lg font-semibold text-slate-600 mb-4">Empfehlung für Ihre Immobilie:</h4>
            
            {result === 'DIN18599' && (
                <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg mb-6 shadow-sm text-left">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Bedarfsausweis (DIN 18599)</h2>
                    <p className="text-slate-700 mb-4">
                        Für Nichtwohngebäude ist grundsätzlich ein Bedarfsausweis nach <strong>DIN V 18599</strong> erforderlich.
                    </p>
                    <div className="text-sm bg-white p-3 rounded border border-gray-200">
                        <strong className="text-emerald-600 block mb-1">Fördermittel-Tipp:</strong> 
                        Die Erstellung wird für KMU und Kommunen bis zu 80% durch das BAFA gefördert (Energieberatung DIN 18599).
                    </div>
                </div>
            )}

            {result === 'BEDARF' && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6 shadow-sm text-left">
                    <h2 className="text-2xl font-bold text-orange-800 mb-2">Bedarfsausweis</h2>
                    <p className="text-orange-900 mb-4">
                        Für Ihr Gebäude ist gesetzlich ein Bedarfsausweis vorgeschrieben (Baujahr vor 1978, &lt; 5 Einheiten).
                    </p>
                    <div className="text-sm text-orange-800 bg-white/50 p-2 rounded">
                        Analysiert die Bausubstanz unabhängig vom Nutzerverhalten.
                    </div>
                </div>
            )}

            {result === 'BOTH' && (
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-6 shadow-sm text-left">
                     <h2 className="text-2xl font-bold text-emerald-800 mb-2">Wahlfreiheit</h2>
                     <p className="text-emerald-900 mb-4">
                        Sie dürfen zwischen <strong>Verbrauchsausweis</strong> und <strong>Bedarfsausweis</strong> wählen.
                     </p>
                     <p className="text-sm mb-2">
                        <strong>Unsere Empfehlung:</strong> Der Bedarfsausweis ist aussagekräftiger für Käufer und zeigt Sanierungspotenziale auf.
                     </p>
                </div>
            )}

            <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg group">
                Jetzt Energieausweis beauftragen <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button onClick={reset} className="flex items-center justify-center mx-auto text-slate-500 hover:text-emerald-600 mt-6 text-sm transition-colors">
                <RotateCcw size={14} className="mr-1" /> Neue Berechnung
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper for Link to avoid circular dependency in standard imports if not careful, 
// strictly strictly speaking Link comes from react-router-dom
import { Link } from 'react-router-dom';

export default EnergyCertCalculator;