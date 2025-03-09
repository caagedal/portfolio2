import { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

// Lazy-loaded components for better performance
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

export default function App() {
  // Smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-background text-white font-poppins min-h-screen relative">
      {/* Background gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(38,150,143,0.1),transparent_70%)] pointer-events-none"></div>
      
      {/* Lazy-loaded background components */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      
      {/* Decorative background elements */}
      <BackgroundElements />
      
      {/* Main content */}
      <Header />
      
      <main className="container mx-auto px-4 relative z-10">
        <Hero />
        <Projects />
        
        <div className="flex justify-center my-16">
          <div className="w-32 h-0.5 bg-border relative">
            <span className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-teal animate-pulse-slow"></span>
          </div>
        </div>
        
        <About />
      </main>
      
      <Footer />
    </div>
  );
}