
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard'; // Ensure you have a Dashboard page or add more pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
