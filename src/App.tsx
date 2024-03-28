import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { SIDE_MENU_ITEMS } from './consts';
import Marketplaces from './pages/Marketplaces';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen container '>
        <Navbar />
        <div className='flex flex-1'>
          <div className='h-screen fixed '>
            <Sidebar items={SIDE_MENU_ITEMS} />
          </div>
          <div className='flex-1 ml-48 mr-10'>
            <Routes>
              <Route path='/' element={<Marketplaces />} />
              <Route path='/marketplaces' element={<Marketplaces />} />
            </Routes>
          </div>
        </div>
        <div className='flex items-center justify-center h-20 ml-36'>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
