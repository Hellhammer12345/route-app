import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
