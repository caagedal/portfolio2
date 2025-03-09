import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    
    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    // Add event listeners for links and interactive elements
    const links = document.querySelectorAll('a, button, [role="button"], input, .cursor-pointer');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);
  
  // Only show custom cursor on desktop devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }
  
  return (
    <>
      <div 
        className={`fixed rounded-full pointer-events-none z-50 transition-transform duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-90' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '40px' : '20px',
          height: linkHovered ? '40px' : '20px',
          backgroundColor: 'transparent',
          border: '2px solid #26968F',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      />
      <div 
        className={`fixed rounded-full bg-teal pointer-events-none z-50 transition-transform duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-150' : linkHovered ? 'scale-50' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '4px',
          height: '4px',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default Cursor;