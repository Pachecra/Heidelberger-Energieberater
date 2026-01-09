import React, { useState } from 'react';
import { Target, Users } from 'lucide-react';

const TeamMember = ({ name, role, img }: { name: string, role: string, img: string }) => {
    const [imgSrc, setImgSrc] = useState(img);

    const handleError = () => {
        // Fallback, falls das Bild nicht geladen werden kann (z.B. wegen Hotlink-Schutz)
        // Erzeugt ein Bild mit den Initialen auf grünem Hintergrund
        setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=059669&color=fff&size=512`);
    };

    return (
        <div className="flex flex-col items-center group">
            <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 relative bg-gray-100">
                <img 
                    src={imgSrc} 
                    alt={name} 
                    onError={handleError}
                    className="w-full h-full object-cover" 
                />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
            <span className="text-emerald-600 font-medium tracking-wide uppercase text-xs">{role}</span>
        </div>
    );
};

const About: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Über Uns</h1>
            <p className="text-2xl text-gray-600 font-light leading-relaxed">
                Kompetenz, Erfahrung und Leidenschaft für Energieeffizienz in der Metropolregion Rhein-Neckar.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
                {/* Modern building facade representing the goal */}
                <div className="relative">
                     <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-500 rounded-2xl z-0 transform translate-x-2 translate-y-2"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Unsere Mission - Nachhaltige Gebäude" 
                        className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-cover aspect-[4/3]" 
                    />
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-emerald-100 rounded-xl mr-4 text-emerald-600">
                        <Target size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Unsere Mission</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
                    <p>
                        Wir verstehen uns als Wegbegleiter für die Energiewende im Gebäudesektor. Unser Ziel ist es, den Energieverbrauch unserer Kunden nachhaltig zu senken, CO₂-Emissionen zu reduzieren und gleichzeitig den Wohn- und Arbeitskomfort zu steigern.
                    </p>
                    <p>
                        Durch unsere Zertifizierung und ständige Weiterbildung garantieren wir Ihnen eine Beratung auf dem neuesten Stand der Technik und der aktuellen Förderrichtlinien. Wir arbeiten unabhängig und transparent.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 py-24 rounded-3xl">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
                     <Users className="text-emerald-600 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Das Experten-Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 md:px-12 max-w-6xl mx-auto">
                <TeamMember 
                    name="Johannes Büttner" 
                    role="Geschäftsführer Technik & Energieberater" 
                    img="https://heidelberger-energieberater.de/wp-content/uploads/2022/10/Johannes-Buettner-Energieberater-Heidelberg.jpg" 
                />
                <TeamMember 
                    name="Uwe Uhrig" 
                    role="Kaufmännischer Geschäftsführer" 
                    img="https://heidelberger-energieberater.de/wp-content/uploads/2022/10/Uwe-Uhrig-Kaufmaennischer-Geschaeftsfuehrer-Heidelberg.jpg" 
                />
                <TeamMember 
                    name="Jürgen Dworschak" 
                    role="Administration & Büroleitung" 
                    img="https://heidelberger-energieberater.de/wp-content/uploads/2023/11/Juergen-Dworschak-Energieberater-Heidelberg.jpg" 
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;