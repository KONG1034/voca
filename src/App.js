import Header from './components/Header';
import Word from './components/Word';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Header/>}></Route>
          <Route path='/:days' exact element={<Word/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
