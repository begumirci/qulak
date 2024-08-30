import { useContext, useState } from 'react';
import Canvas from './Canvas';
import MainSidebar from './LeftSidebar';
import Screen from './Screen';
import { ContextData } from '../store/Provider';

export default function MainScreen() {
  const { canvasRef, toggleCanvas, isOpenCanvas } = useContext(ContextData);
  const [id, setId] = useState('3');

  return (
    <div className='d-flex'>
      <MainSidebar
        toggleCanvas={toggleCanvas}
        isOpenCanvas={isOpenCanvas}
        id={id}
        setId={setId}
      />
      <div ref={canvasRef}>
        <Canvas
          isOpenCanvas={isOpenCanvas}
          toggleCanvas={toggleCanvas}
          id={id}
          setId={setId}
        />
      </div>
      <Screen />
    </div>
  );
}
