import { useRef, useEffect } from "react";

function ParticleBackground() {
    const canvasRef = useRef(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);
      
      // Create particles and animation logic
      // ...
  
      // Animation loop with clean cancellation
      let animationFrameId;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        // ...
        
        animationFrameId = requestAnimationFrame(animate);
      }
      
      animate();
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', setCanvasSize);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
    
    return (
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"
      />
    );
  }

  export default ParticleBackground;