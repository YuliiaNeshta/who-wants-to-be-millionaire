import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import HomePage from './pages/HomePage';
import Results from './pages/Results';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
