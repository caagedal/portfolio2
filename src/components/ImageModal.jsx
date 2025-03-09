import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ImageModal({ imageUrl, altText, onClose }) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Event handler for escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Add event listener
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Close when clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-background border-2 border-teal rounded-lg p-4 max-w-3xl w-full shadow-glow animate-[scale-in_300ms]">
        <button 
          onClick={onClose}
          className="float-right text-3xl text-teal hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full object-contain max-h-[70vh] mt-4" 
        />
      </div>
    </div>,
    document.body
  );
}