import { createContext, useState } from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
