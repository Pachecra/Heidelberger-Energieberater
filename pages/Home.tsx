import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Home as HomeIcon, Building2, ClipboardList, CheckCircle, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image - Engineers Tablet */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-cd1096a7a558?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Ingenieure analysieren Daten" 
              className="w-full h-full object-cover" 
            />
        </div>
        {/* Modern Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="max-w-3xl animate-fadeIn">
            <div className="inline-block px-4 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 backdrop-blur-sm">
                <span className="text-emerald-400 font-medium text-sm tracking-wide uppercase">Offiziell BAFA-Zertifiziert</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
              Energie sparen. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Werte steigern.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
              Ihr Experte für Wohn- & Nichtwohngebäude in Heidelberg. Wir begleiten Sie von der Analyse bis zur maximalen Förderung.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/kontakt" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)]">
                Kostenlose Erstberatung
              </Link>
              <Link to="/wohngebaeude" className="group bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-center transition-all flex items-center justify-center">
                Fördermittel prüfen <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Modernized */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Unsere Expertise</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Maßgeschneiderte Energiekonzepte für private und gewerbliche Immobilien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<HomeIcon size={32} />} 
              title="Wohngebäude" 
              desc="Sanierungsfahrpläne (iSFP) und BAFA-Förderung für Ihr Eigenheim."
              link="/wohngebaeude"
            />
            <ServiceCard 
              icon={<Building2 size={32} />} 
              title="Nichtwohngebäude" 
              desc="DIN 18599 Analysen für KMU, Industrie und Kommunen."
              link="/nichtwohngebaeude"
            />
            <ServiceCard 
              icon={<ClipboardList size={32} />} 
              title="Energieausweise" 
              desc="Rechtssichere Verbrauchs- und Bedarfsausweise für Verkauf & Vermietung."
              link="/energieausweise"
            />
             <ServiceCard 
              icon={<TrendingUp size={32} />} 
              title="Fördermittel" 
              desc="Wir identifizieren und beantragen die maximalen Zuschüsse für Sie."
              link="/baubegleitung"
            />
            <ServiceCard 
              icon={<ShieldCheck size={32} />} 
              title="Baubegleitung" 
              desc="Qualitätssicherung und Abnahme Ihrer Sanierungsmaßnahmen."
              link="/baubegleitung"
            />
            <ServiceCard 
              icon={<CheckCircle size={32} />} 
              title="Sanierungsfahrplan" 
              desc="Sichern Sie sich 5% Extra-Förderung durch einen iSFP."
              link="/wohngebaeude"
            />
          </div>
        </div>
      </section>

      {/* Why Us - Modern Split Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
                    {/* Modern Building Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Modernes effizientes Gebäude" 
                      className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Warum Heidelberger Energieberater?</h2>
                    <div className="space-y-8">
                        {[
                            { title: 'Zertifizierte Expertise', text: 'Als BAFA-gelistete Energieeffizienz-Experten garantieren wir höchste Beratungsqualität.' },
                            { title: 'Unabhängigkeit', text: 'Wir beraten produktneutral und ausschließlich in Ihrem Interesse.' },
                            { title: 'Full-Service', text: 'Von der Analyse über den Antrag bis zur Baubegleitung – alles aus einer Hand.' },
                            { title: 'Regionale Nähe', text: 'Schnelle Vor-Ort-Termine in Heidelberg und der Metropolregion Rhein-Neckar.' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start group">
                                <div className="mt-1 mr-5 p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link to="/ueber-uns" className="text-emerald-700 font-bold hover:text-emerald-800 text-lg flex items-center group">
                            Unser Team kennenlernen <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Process Steps - Dark Modern */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm">Der Ablauf</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">Ihr Weg zum effizienten Gebäude</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                    { num: '01', title: 'Erstberatung', desc: 'Telefonische Klärung Ihrer Ziele.' },
                    { num: '02', title: 'Analyse', desc: 'Vor-Ort-Termin & Datenerfassung.' },
                    { num: '03', title: 'Konzept', desc: 'Individueller Sanierungsfahrplan.' },
                    { num: '04', title: 'Förderung', desc: 'Antragstellung bei BAFA/KfW.' },
                    { num: '05', title: 'Umsetzung', desc: 'Baubegleitung & Abschluss.' },
                ].map((step, idx) => (
                    <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-2 group">
                        <div className="text-4xl font-bold text-emerald-500/30 mb-4 group-hover:text-emerald-500 transition-colors">{step.num}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
             <div className="text-center mt-20">
                <Link to="/kontakt" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/20 transition-all">
                    Jetzt Projekt starten
                </Link>
             </div>
        </div>
      </section>
    </>
  );
};

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, link }) => (
    <Link to={link} className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all border border-gray-100 group flex flex-col h-full hover:-translate-y-1">
        <div className="text-emerald-600 mb-6 w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-light">{desc}</p>
        <div className="text-emerald-600 font-semibold flex items-center mt-auto">
            Details ansehen <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
    </Link>
);

export default Home;