import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import HomePage from './pages/HomePage';
import Results from './pages/Results';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/who-wants-to-be-millionaire/'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
