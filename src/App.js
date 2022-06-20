
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeerSelection from './pages/BeerSelection';
import Home from '../src/pages/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beers' element={<BeerSelection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
