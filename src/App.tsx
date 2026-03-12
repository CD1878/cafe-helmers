import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-black selection:text-white pb-20">
      {/* Marquee */}
      <div className="marquee-container border-b-2 border-black">
        <div className="marquee-content">
          CAFE HELMERS | JOUW BUURTCAFÉ | ELKE DAG GEZELLIG | DONDERDAG & VRIJDAG DJ | WEEKEND BRUISEND UITGAAN | HOLLANDSE AVOND | DISCO | HOUSE | VINYL NIGHT | CAFE HELMERS | JOUW BUURTCAFÉ | ELKE DAG GEZELLIG | DONDERDAG & VRIJDAG DJ | WEEKEND BRUISEND UITGAAN | HOLLANDSE AVOND | DISCO | HOUSE | VINYL NIGHT |
        </div>
      </div>

      {/* Top Right Button */}
      <div className="absolute top-12 right-8 z-50">
        <a href="#book" className="bg-black text-white font-bold px-6 py-4 uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-colors text-xl border-2 border-transparent hover:border-black">
          BOOK A TABLE
        </a>
      </div>

      {/* Background Yellow Splashes (mimicking the menu) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-96 bg-brand-yellow opacity-80 mix-blend-multiply" style={{ clipPath: 'polygon(10% 0, 100% 20%, 90% 100%, 0 80%)' }}></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-yellow opacity-60 mix-blend-multiply" style={{ clipPath: 'polygon(20% 10%, 100% 0, 80% 90%, 0 100%)' }}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-brand-yellow opacity-70 mix-blend-multiply" style={{ clipPath: 'polygon(0 20%, 80% 0, 100% 80%, 20% 100%)' }}></div>
        
        {/* Decorative text in background */}
        <div className="absolute top-40 -left-20 font-display text-[15rem] text-black opacity-5 transform -rotate-90">HELMERS</div>
        <div className="absolute bottom-40 -right-20 font-display text-[15rem] text-black opacity-5 transform rotate-45">HELMERS</div>
      </div>

      <main className="max-w-6xl mx-auto px-4 pt-32 relative z-10">
        
        {/* Huge Title Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center md:justify-end md:mr-20 mb-12 w-full"
        >
          {!logoError ? (
            <img 
              src="/logo cafe helmers.png" 
              alt="Cafe Helmers Logo" 
              className="w-full max-w-[20rem] md:max-w-[45rem] transform -rotate-2 object-contain mix-blend-multiply"
              onError={() => setLogoError(true)}
            />
          ) : (
            <h1 className="font-display text-[7rem] md:text-[14rem] leading-none text-center md:text-right transform -rotate-2">
              HELMERS
            </h1>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          
          {/* Left Content */}
          <div className="md:col-span-5 space-y-12 pl-4 md:pl-12 md:-mt-[18rem] relative z-20">
            
            {/* Nav Links */}
            <nav className="flex flex-col space-y-4 uppercase text-xl md:text-2xl w-fit font-bold">
              <a href="#menu" className="highlight-yellow hover:bg-black hover:text-white transition-colors w-fit">&gt;&gt; MENU</a>
              <a href="#contact" className="highlight-yellow hover:bg-black hover:text-white transition-colors w-fit">&gt;&gt; CONTACT</a>
              <a href="#agenda" className="highlight-yellow hover:bg-black hover:text-white transition-colors w-fit">&gt;&gt; AGENDA</a>
              <a href="#sfeer" className="highlight-yellow hover:bg-black hover:text-white transition-colors w-fit">&gt;&gt; SFEER</a>
            </nav>

            {/* Intro Text */}
            <div className="text-sm md:text-base leading-relaxed max-w-sm">
              <span className="highlight-yellow">We zijn een buurt café</span> waar je op iedere dag van de week heel knus en gezellig een drankje kan doen. Een ruim bier assortiment maar ook cocktails. Van donderdag t/m vrijdag hebben we een <span className="highlight-black">DJ in de avond</span>.
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-6">OPENINGSTIJDEN</h2>
              <div className="text-sm md:text-base uppercase tracking-widest space-y-4">
                <div>
                  <span className="highlight-yellow mb-1 inline-block">MA - WO</span>
                  <div className="highlight-black inline-block">15:00 TILL LATE</div>
                </div>
                <div>
                  <span className="highlight-yellow mb-1 inline-block">DO - VR</span>
                  <div className="highlight-black inline-block">15:00 TILL LATE</div>
                </div>
                <div>
                  <span className="highlight-yellow mb-1 inline-block">ZA - ZO</span>
                  <div className="highlight-black inline-block">12:00 TILL LATE</div>
                </div>
              </div>
            </div>

          </div>

          {/* Center Image */}
          <div className="md:col-span-4 relative flex justify-center items-start mt-12 md:mt-0">
            <div className="relative z-20 transform rotate-3">
              <img 
                src="/afbeeldingen/jouw-dj-foto.jpg" 
                alt="DJ's in Cafe Helmers" 
                className="w-80 md:w-96 h-[28rem] md:h-[34rem] object-cover border-4 border-black"
                style={{ filter: 'drop-shadow(12px 12px 0px #fcee0a)' }}
              />
            </div>
          </div>

          {/* Right Decor */}
          <div className="md:col-span-3 relative hidden md:block">
            <div className="absolute top-10 right-0 w-48 h-64 border-4 border-black transform -rotate-6 z-0 flex flex-col justify-between p-4 bg-white">
               <div className="font-display text-3xl text-black">DRINKS</div>
               <div className="text-xs font-bold">
                 <span className="highlight-yellow">BEER</span><br/>
                 <span className="highlight-black">COCKTAILS</span><br/>
                 <span className="highlight-yellow">WINE</span>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-32">
          
          {/* Bottom Left Collage */}
          <div className="md:col-span-4 relative h-96 overflow-hidden border-4 border-black transform -rotate-2 bg-white">
            <div className="absolute inset-0 p-6 flex flex-col justify-between font-display text-5xl opacity-20 leading-none break-all">
              <span>HELMERS</span>
              <span className="text-right">HELMERS</span>
              <span className="text-center transform rotate-12">HELMERS</span>
              <span>HELMERS</span>
            </div>
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop" alt="Bar" className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover grayscale contrast-150 mix-blend-multiply" />
          </div>

          {/* Bottom Right Content */}
          <div className="md:col-span-8 md:pl-12 space-y-8 flex flex-col justify-center relative z-10">
            
            <div className="text-xs uppercase font-bold max-w-lg">
              <span className="highlight-yellow">VRIJDAG & ZATERDAG:</span><br/>
              <span className="highlight-black">VAN KNUS NAAR BRUISEND UITGAAN</span>
            </div>

            <div className="text-sm md:text-base leading-relaxed max-w-lg">
              Vooral op vrijdag/zaterdag verandert het gezellige buurtcafé naar een bruisende uitgaansplek. Ook zijn er maandelijks evenementen met een thema avond zoals <span className="highlight-yellow">‘’Hollandse Avond’’</span> waarbij de meters bier door de lucht vliegen. Of een avond samen georganiseerd met resident DJs in een bepaald genre. <br/><br/>
              <span className="highlight-black">(Disco, House, vinyl night)</span>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="#menu" className="highlight-yellow hover:bg-black hover:text-white transition-colors text-xl font-display uppercase py-2 px-4 border-2 border-black transform -rotate-2">MENU</a>
              <a href="#drinks" className="highlight-black hover:bg-brand-yellow hover:text-black transition-colors text-xl font-display uppercase py-2 px-4 border-2 border-black transform rotate-2">DRINKS</a>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
