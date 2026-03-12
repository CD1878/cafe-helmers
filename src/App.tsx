import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, MapPin, Mail } from 'lucide-react';

export default function App() {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const rotatingImages = [
    '/afbeeldingen/bar-2.jpg',
    '/afbeeldingen/crowd.jpg',
    '/afbeeldingen/cocktails.jpg',
    '/afbeeldingen/terras.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Marquee */}
      <div className="marquee-container border-b-2 border-black">
        <div className="marquee-content">
          CAFE HELMERS | JOUW BUURTCAFÉ | ELKE DAG GEZELLIG | DONDERDAG & VRIJDAG DJ | WEEKEND BRUISEND UITGAAN | HOLLANDSE AVOND | DISCO | HOUSE | VINYL NIGHT | CAFE HELMERS | JOUW BUURTCAFÉ | ELKE DAG GEZELLIG | DONDERDAG & VRIJDAG DJ | WEEKEND BRUISEND UITGAAN | HOLLANDSE AVOND | DISCO | HOUSE | VINYL NIGHT |
        </div>
      </div>

      {/* Top Right Button */}
      <div className="absolute top-16 right-4 md:top-16 md:right-8 z-50">
        <a href="#book" className="bg-black text-white font-bold px-6 py-4 uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-colors text-xl border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] inline-block">
          BOOK A TABLE
        </a>
      </div>

      {/* Background Abstract Geometric Blocks (mimicking the menu art direction) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* Yellow Background Blocks */}
        <div className="absolute -top-[10rem] -left-[10rem] w-[50rem] h-[50rem] bg-brand-yellow opacity-40 mix-blend-multiply transform rotate-12"></div>
        <div className="absolute top-[20rem] -right-[20rem] w-[60rem] h-[80rem] bg-brand-yellow opacity-30 mix-blend-multiply transform -rotate-12"></div>
        <div className="absolute top-[80rem] -left-[5rem] w-[70rem] h-[60rem] bg-brand-yellow opacity-40 mix-blend-multiply transform rotate-6"></div>
        <div className="absolute bottom-[10rem] -right-[10rem] w-[50rem] h-[50rem] bg-brand-yellow opacity-30 mix-blend-multiply transform -rotate-6"></div>

        {/* Marker Text Layer 1 */}
        <div className="absolute top-10 -left-20 font-display text-[15rem] text-black opacity-20 transform -rotate-[70deg] mix-blend-multiply">HELMERS</div>
        <div className="absolute top-80 right-10 font-display text-[14rem] text-transparent opacity-80 transform rotate-12" style={{ WebkitTextStroke: '6px rgba(0,0,0,0.5)', textStroke: '6px rgba(0,0,0,0.5)' }}>HELMERS</div>

        {/* Black Transparent Overlays (creating the muddy overlaps) */}
        <div className="absolute -top-[5rem] left-[15rem] w-[40rem] h-[55rem] bg-black opacity-40 mix-blend-multiply transform -rotate-6"></div>
        <div className="absolute top-[45rem] -left-[15rem] w-[50rem] h-[60rem] bg-black opacity-30 mix-blend-multiply transform rotate-12"></div>
        <div className="absolute top-[100rem] right-[5rem] w-[45rem] h-[55rem] bg-black opacity-35 mix-blend-multiply transform -rotate-12"></div>

        {/* Marker Text Layer 2 */}
        <div className="absolute top-[40rem] -right-40 font-display text-[25rem] text-black opacity-15 mix-blend-multiply transform -rotate-12">HELMERS</div>
        <div className="absolute bottom-60 -left-20 font-display text-[12rem] text-brand-yellow opacity-80 mix-blend-multiply transform -rotate-45">HELMERS</div>
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
          <div className="md:col-span-5 space-y-12 pl-4 md:pl-12 md:-mt-[28rem] relative z-20">
            
            {/* Nav Links */}
            <nav className="flex flex-col space-y-4 uppercase text-xl md:text-2xl w-fit font-bold">
              <div className="flex flex-col space-y-2">
                <a href="#menu" onClick={(e) => { e.preventDefault(); setIsMenuOpen(!isMenuOpen); }} className="highlight-yellow hover:bg-black hover:text-white transition-all w-fit inline-block border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">&gt;&gt; MENU</a>
                {/* Submenu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col space-y-2 pl-8 text-lg md:text-xl overflow-hidden"
                    >
                      <div className="pt-2 flex flex-col space-y-2 pb-2">
                        <a href="/menus/beers.pdf" target="_blank" rel="noreferrer" className="highlight-black hover:bg-brand-yellow hover:text-black transition-colors w-fit">- BEERS</a>
                        <a href="/menus/drinks.pdf" target="_blank" rel="noreferrer" className="highlight-black hover:bg-brand-yellow hover:text-black transition-colors w-fit">- DRINKS</a>
                        <a href="/menus/cocktails.pdf" target="_blank" rel="noreferrer" className="highlight-black hover:bg-brand-yellow hover:text-black transition-colors w-fit">- COCKTAILS</a>
                        <a href="/menus/snacks.pdf" target="_blank" rel="noreferrer" className="highlight-black hover:bg-brand-yellow hover:text-black transition-colors w-fit">- SNACKS</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="#contact" className="highlight-yellow hover:bg-black hover:text-white transition-all w-fit inline-block border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">&gt;&gt; CONTACT</a>
              <a href="#agenda" className="highlight-yellow hover:bg-black hover:text-white transition-all w-fit inline-block border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">&gt;&gt; AGENDA</a>
              <a href="#sfeer" className="highlight-yellow hover:bg-black hover:text-white transition-all w-fit inline-block border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">&gt;&gt; SFEER</a>
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

          {/* Center Image (Rotating Gallery) */}
          <div className="md:col-span-4 relative flex justify-center items-start mt-12 md:mt-0">
            {/* Overlapping black tape edges */}
            <div className="absolute -top-10 -left-16 w-56 h-24 bg-gradient-to-br from-transparent via-black to-black opacity-30 mix-blend-multiply transform -rotate-12 z-40 pointer-events-none"></div>
            <div className="absolute -bottom-12 -right-16 w-72 h-32 bg-gradient-to-tl from-transparent via-black to-black opacity-20 mix-blend-multiply transform rotate-6 z-40 pointer-events-none" style={{ clipPath: 'polygon(0 10%, 100% 0, 95% 100%, 5% 90%)' }}></div>
            
            <div className="relative z-20 transform rotate-3 w-80 md:w-96 h-[28rem] md:h-[34rem] border-4 border-black overflow-hidden bg-black" style={{ filter: 'drop-shadow(12px 12px 0px #fcee0a)' }}>
              <AnimatePresence>
                <motion.img 
                  key={currentImageIndex}
                  src={rotatingImages[currentImageIndex]}
                  alt="Sfeer in Cafe Helmers" 
                  initial={{ opacity: 0, scale: 1.1, filter: 'grayscale(100%)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Decor (Interactive Menu Stack) */}
          <div className="md:col-span-3 relative hidden md:block z-30">
            <div className="absolute top-5 -right-2 w-56 flex flex-col">
               
               {/* Menu Card: Beers */}
               <motion.a 
                 href="/menus/beers.pdf" target="_blank" rel="noreferrer"
                 whileHover={{ scale: 1.05, rotate: 0, x: -15, zIndex: 50 }}
                 className="w-full border-4 border-black transform rotate-2 bg-[var(--color-paper)] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow relative z-10 block cursor-pointer"
               >
                 <span className="bg-black text-white px-2 py-1 uppercase tracking-widest text-[0.65rem] inline-block mb-2">DRAFT</span><br/>
                 <span className="highlight-yellow border-2 border-black inline-block text-xl font-display transform -rotate-2">BEERS</span>
                 <p className="text-xs font-bold mt-2 leading-tight">Craft & tap beers.</p>
               </motion.a>

               {/* Menu Card: Cocktails */}
               <motion.a 
                 href="/menus/cocktails.pdf" target="_blank" rel="noreferrer"
                 whileHover={{ scale: 1.05, rotate: 0, x: -15, zIndex: 50 }}
                 className="w-full border-4 border-black transform -rotate-3 bg-[var(--color-paper)] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow relative z-20 -mt-6 block cursor-pointer"
               >
                 <span className="bg-black text-white px-2 py-1 uppercase tracking-widest text-[0.65rem] inline-block mb-2">FRESH</span><br/>
                 <span className="highlight-yellow border-2 border-black inline-block text-xl font-display transform rotate-1">COCKTAILS</span>
                 <p className="text-xs font-bold mt-2 leading-tight">Signature mixes.</p>
               </motion.a>

               {/* Menu Card: Drinks */}
               <motion.a 
                 href="/menus/drinks.pdf" target="_blank" rel="noreferrer"
                 whileHover={{ scale: 1.05, rotate: 0, x: -15, zIndex: 50 }}
                 className="w-full border-4 border-black transform rotate-1 bg-[var(--color-paper)] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow relative z-30 -mt-6 block cursor-pointer"
               >
                 <span className="bg-black text-white px-2 py-1 uppercase tracking-widest text-[0.65rem] inline-block mb-2">COLD</span><br/>
                 <span className="highlight-yellow border-2 border-black inline-block text-xl font-display transform -rotate-1">DRINKS</span>
                 <p className="text-xs font-bold mt-2 leading-tight">Wines & sodas.</p>
               </motion.a>

               {/* Menu Card: Snacks */}
               <motion.a 
                 href="/menus/snacks.pdf" target="_blank" rel="noreferrer"
                 whileHover={{ scale: 1.05, rotate: 0, x: -15, zIndex: 50 }}
                 className="w-full border-4 border-black transform -rotate-2 bg-[var(--color-paper)] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow relative z-40 -mt-6 block cursor-pointer"
               >
                 <span className="bg-black text-white px-2 py-1 uppercase tracking-widest text-[0.65rem] inline-block mb-2">DELICIOUS</span><br/>
                 <span className="highlight-yellow border-2 border-black inline-block text-xl font-display transform rotate-2">SNACKS</span>
                 <p className="text-xs font-bold mt-2 leading-tight">Bites for the table.</p>
               </motion.a>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-32">
          
          {/* Bottom Left Collage */}
          <div className="md:col-span-4 relative h-96 overflow-hidden border-4 border-black transform -rotate-2 bg-white">
            <div className="absolute -top-8 -right-16 w-56 h-32 bg-gradient-to-bl from-transparent via-black to-black opacity-30 mix-blend-multiply transform rotate-12 z-20 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-12 w-48 h-24 bg-gradient-to-tr from-transparent via-black to-black opacity-20 mix-blend-multiply transform -rotate-6 z-20 pointer-events-none"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between font-display text-5xl opacity-20 leading-none break-all z-10">
              <span>HELMERS</span>
              <span className="text-right">HELMERS</span>
              <span className="text-center transform rotate-12">HELMERS</span>
              <span>HELMERS</span>
            </div>
            <img src="/afbeeldingen/dj-meiden.jpg" alt="DJ's in Cafe Helmers" className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover grayscale contrast-150 mix-blend-multiply" />
          </div>

          {/* Bottom Right Content */}
          <div className="md:col-span-8 md:pl-12 space-y-8 flex flex-col justify-center relative z-10">
            
            <div className="text-xl md:text-2xl uppercase font-bold max-w-xl leading-relaxed">
              <span className="highlight-yellow">VRIJDAG & ZATERDAG:</span><br/>
              <span className="highlight-black mt-2 inline-block">VAN KNUS NAAR BRUISEND UITGAAN</span>
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

      {/* Footer */}
      <footer className="mt-32 border-t-4 border-black bg-white relative z-20">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left: Logo/Afbeelding */}
          <div className="flex-shrink-0">
             {!logoError ? (
               <img src="/logo cafe helmers.png" alt="Cafe Helmers Footer Logo" className="w-32 md:w-48 mix-blend-multiply" onError={() => setLogoError(true)} />
             ) : (
               <h2 className="font-display text-4xl text-black">HELMERS</h2>
             )}
          </div>

          {/* Center: Contact & Adres */}
          <div className="text-center font-bold text-sm md:text-base md:border-x-2 md:border-black px-8">
             <p className="mb-2 uppercase tracking-widest"><MapPin className="inline w-5 h-5 mr-2 -mt-1" /> Eerste Helmersstraat 250</p>
             <p className="uppercase tracking-widest"><Mail className="inline w-5 h-5 mr-2 -mt-1" /> info@cafehelmers.nl</p>
          </div>

          {/* Right: Socials */}
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 border-2 border-black hover:bg-brand-yellow hover:-translate-y-1 hover:shadow-none transition-all bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 border-2 border-black hover:bg-brand-yellow hover:-translate-y-1 hover:shadow-none transition-all bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="bg-black text-white text-center py-6 text-xs font-bold uppercase tracking-widest border-t-2 border-white flex flex-col items-center justify-center space-y-2 opacity-90">
          <p>© {new Date().getFullYear()} Cafe Helmers. All rights reserved.</p>
          <p>Design by CEE Hospitality | Made by <a href="https://chefdigital.nl" target="_blank" rel="noreferrer" className="underline hover:text-brand-yellow transition-colors">Chef Digital</a></p>
        </div>
      </footer>
    </div>
  );
}
