import './App.css';
import { cards } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main cards={cards} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
