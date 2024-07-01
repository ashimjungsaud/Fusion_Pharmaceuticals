import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OurService } from './pages/OurService';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<OurService />} />
      </Routes>
    </div>
  );
}

export default App;