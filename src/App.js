import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />

          <BookContextProvider>
            <BookList />
          </BookContextProvider>

          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
