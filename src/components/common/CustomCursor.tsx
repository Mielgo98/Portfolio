import React, { useState, useEffect } from 'react';
import type { MousePosition } from '../../types';

interface CustomCursorProps {
  mousePosition: MousePosition;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si es dispositivo táctil
    const checkTouchDevice = () => {
      const hasTouchScreen = 'ontouchstart' in window || 
                           navigator.maxTouchPoints > 0 || 
                           ('msMaxTouchPoints' in navigator && (navigator as Navigator & { msMaxTouchPoints: number }).msMaxTouchPoints > 0);
      
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsTouchDevice(hasTouchScreen || isMobile);
    };

    checkTouchDevice();
    
    // Verificar en resize por si cambia la orientación
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // No renderizar en dispositivos táctiles
  if (isTouchDevice) {
    return null;
  }

  return (
    <div 
      className="cursor"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
      }}
    />
  );
};

export default CustomCursor;