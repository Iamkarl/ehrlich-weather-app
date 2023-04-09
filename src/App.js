import React from 'react';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LoginPage/> */}
      <HomePage />
    </div>
  );
}

export default App;
