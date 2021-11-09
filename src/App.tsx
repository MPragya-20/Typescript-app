import React from 'react';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/Header';
import Main from './Components/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
