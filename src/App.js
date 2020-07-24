import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='content'>
      <Navbar />

      <div className='container my-3'>
        {Routes}
      </div>
    </div>
  );
}

export default App;
