import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { sideMenuItems } from './consts';
import Marketplaces from './pages/Marketplaces';

const App: React.FC = () => {
  return (
    <Router>
      <div className=' min-h-screen '>
        <Navbar />
        <div className='flex flex-row'>
          <Sidebar items={sideMenuItems} />
          <div className='p-6'>
            <Routes>
              <Route path='/' element={''} />
              <Route path='/marketplaces' element={<Marketplaces />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
