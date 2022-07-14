import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="main ml-36 flex">
        <Home />
      </div>
    </div>
  );
}

export default App;
