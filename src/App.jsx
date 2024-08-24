import { useContext } from 'react';
import MainScreen from './pages/MainScreen';
import { ContextData } from './store/Provider';
import { Outlet } from 'react-router-dom';

function App() {
  const { theme } = useContext(ContextData);

  return (
    <div className={theme == 'light' ? 'main' : 'main darkmode '}>
      <MainScreen />
    </div>
  );
}

export default App;
