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

        <div className='d-flex flex-wrap gap-3 gap-xxl-4'>
          <div className=' flex-fill '>
            <Team />
          </div>
          <div className='flex-fill '>
            <Materials />
          </div>
          <div className='flex-fill '>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}
