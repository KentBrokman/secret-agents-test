
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import { LogInPage } from './pages/LogIn/LogInPage';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LogInPage />} /> 
        <Route path="/" element={<Navigate to='/login' />} /> 
      </Routes>
  );
}

export default App;
