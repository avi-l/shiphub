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
      <div className='flex flex-col min-h-screen '>
        <Navbar />
        <div className='flex flex-row flex-1'>
          <Sidebar items={SIDE_MENU_ITEMS} />
          <div className='p-6 flex-1'>
            <Routes>
              <Route path='/' element={<Marketplaces />} />
              <Route path='/marketplaces' element={<Marketplaces />} />
            </Routes>
          </div>
        </div>
        <div className='flex items-center justify-center h-20'>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
