
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LogInPage } from './pages/LogIn/LogInPage';
import { NewsPage } from './pages/News/NewsPage';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/news" element={
        <RequireAuth>
          <NewsPage />
        </RequireAuth>
      } />
      <Route path="/" element={<Navigate to='/login' />} />
    </Routes>
  );
}

export default App;
