import './App.css';
import {useState} from 'react';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import Coding from './components/Coding';

function App() {

  const [currentPage, setCurrentPage] = useState('home')
  return (
    <div className="App flex">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main ml-36 bg-teal-600 flex flex-1 min-h-screen">
        {currentPage === 'home' && <Home />}
        {currentPage === 'coding' && <Coding />}
      </div>
    </div>
  );
}

export default App;
