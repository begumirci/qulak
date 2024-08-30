import { createContext } from 'react';
import { useState, useEffect, useRef } from 'react';

export const ContextData = createContext();

export default function Provider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const [isOpenCanvas, setIsOpenCanvas] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const updateCanvasWidth = () => {
      if (canvasRef.current) {
        setCanvasWidth(canvasRef.current.offsetWidth);
      }
    };
    updateCanvasWidth();

    window.addEventListener('resize', updateCanvasWidth);
    return () => {
      window.removeEventListener('resize', updateCanvasWidth);
    };
  }, [isOpenCanvas]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function changeTheme() {
    if (theme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  function toggleCanvas() {
    setIsOpenCanvas(!isOpenCanvas);
  }

  return (
    <ContextData.Provider
      value={{
        isOpenCanvas,
        setIsOpenCanvas,
        theme,
        setTheme,
        changeTheme,
        canvasWidth,
        canvasRef,
        toggleCanvas,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
