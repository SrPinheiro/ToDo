import React from 'react';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

// Hooks
import { UsePostContext } from './Hooks/UsePostContext';



function App() {
  return (
    <div className="App">
      <UsePostContext>
        <Header />
        <Home />
        <Footer />
      </UsePostContext>
    </div>
  );
}

export default App;
