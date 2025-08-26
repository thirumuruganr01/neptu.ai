import { Route, Routes } from 'react-router-dom';
import './App.css'
import "./index.css";
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* You can add more routes here */}
    </Routes>
  );
}

export default App
