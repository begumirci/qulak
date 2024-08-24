import BrianFordHeader from '../components/BrianFordHeader';
import CardChart from '../components/CardChart';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Materials from '../components/Materials';
import SectionHeader from '../components/SectionHeader';
import Team from '../components/Team';
import Transactions from '../components/Transactions';
import MobilNav from '../components/MobilNav';
import { useContext } from 'react';
import { ContextData } from '../store/Provider';

export default function Screen() {
  const { canvasWidth } = useContext(ContextData);
  const screenWidth = `calc(100% - ${canvasWidth}px)`;
  return (
    <div className='screen_side flex-grow-1 ' style={{ width: screenWidth }}>
      <Header />
      <div className='main_page d-flex flex-column '>
        <MobilNav />
        <SectionHeader />
        <Cards />
        <CardChart />
        <BrianFordHeader />
        <div className='row g-3 g-xxl-4 mt-0'>
          <div className='col-12 col-md-6  col-xxl-4 '>
            <Team />
          </div>
          <div className='col-12 col-md-6 col-xxl-4 '>
            <Materials />
          </div>
          <div className='col-12 col-md-6 col-xxl-4 '>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}
