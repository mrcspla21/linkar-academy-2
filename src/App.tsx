import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9 } from './components/Slides';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current?.requestFullscreen();
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-0 md:p-4">
      <div 
        ref={containerRef}
        className={`relative shadow-2xl overflow-hidden flex flex-col transition-colors duration-700 ${isFirstSlide ? 'bg-brand-blue' : 'bg-white'}`}
        style={{
          width: '100%',
          maxWidth: isFullscreen ? '100%' : '1920px',
          aspectRatio: isFullscreen ? 'auto' : '16/9',
          height: isFullscreen ? '100vh' : 'auto',
          maxHeight: isFullscreen ? '100vh' : 'calc(100vh - 2rem)',
        }}
      >
        {/* Safe Margin Container */}
        <div className="absolute inset-0 p-12 md:p-20 lg:p-24 flex flex-col">
          {/* Logo overlay */}
          <AnimatePresence>
            {!isFirstSlide && !isLastSlide && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-12 md:top-16 left-0 right-0 flex justify-center z-50 pointer-events-none"
              >
                <img
                  src="https://leydux.com.br/wp-content/uploads/2026/03/linkar-horizontal.svg"
                  alt="Linkar Academy"
                  className="h-8 md:h-10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1 w-full h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8 z-50 opacity-30 hover:opacity-100 transition-opacity duration-300">
          <div className={`font-sans text-sm font-medium ${isFirstSlide ? 'text-white/50' : 'text-brand-blue/50'}`}>
            {currentSlide + 1} / {slides.length}
          </div>
          
          <div className={`flex items-center space-x-4 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border transition-colors ${isFirstSlide ? 'bg-brand-blue/50 border-white/10' : 'bg-white/80 border-brand-blue/10'}`}>
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className={`p-2 disabled:opacity-30 transition-colors ${isFirstSlide ? 'text-white hover:text-brand-gold' : 'text-brand-blue hover:text-brand-gold'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
              className={`p-2 disabled:opacity-30 transition-colors ${isFirstSlide ? 'text-white hover:text-brand-gold' : 'text-brand-blue hover:text-brand-gold'}`}
            >
              <ChevronRight size={24} />
            </button>
            <div className={`w-px h-6 mx-2 ${isFirstSlide ? 'bg-white/20' : 'bg-brand-blue/20'}`}></div>
            <button 
              onClick={toggleFullscreen}
              className={`p-2 transition-colors ${isFirstSlide ? 'text-white hover:text-brand-gold' : 'text-brand-blue hover:text-brand-gold'}`}
              title="Tela Cheia (F)"
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
