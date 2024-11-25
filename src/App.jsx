import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';

import AdminMediaPanel from './components/AdminMediaPanel';
import { useState } from 'react';

export default function App() {
  return (
    <Router>
      <AppContext />
    </Router>
  );
}

function AppContext() {
  const [query, setQuery] = useState('');
  const location = useLocation(); // Get the current path
  const isAdminPage = location.pathname === '/admin'; // Check if on the admin page

  return (
    <div className="container mx-auto px-8 min-h-screen">
      {!isAdminPage && <Header query={query} setQuery={setQuery} />}
      <Routes>
        <Route path="/" element={<NewsList query={query} />} />
        <Route path="/admin" element={<AdminMediaPanel />} />
      </Routes>
    </div>
  );
}
