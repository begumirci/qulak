import { useContext, useState } from 'react';
import Canvas from './Canvas';
import MainSidebar from './LeftSidebar';
import Screen from './Screen';
import { ContextData } from '../store/Provider';

export default function MainScreen() {
  const { canvasRef, toggleCanvas, isOpenCanvas } = useContext(ContextData);

  return (
    <div className='d-flex'>
      <MainSidebar toggleCanvas={toggleCanvas} isOpenCanvas={isOpenCanvas} />
      <div ref={canvasRef}>
        <Canvas isOpenCanvas={isOpenCanvas} toggleCanvas={toggleCanvas} />
      </div>
      <Screen />
    </div>
  );
}
