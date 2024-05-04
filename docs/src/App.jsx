import React from 'react';
import Backgrounds from './components/Backgrounds';
import Above from './components/Above';
import { useState } from 'react';

const App = () => {


  return (
    <div className='relative w-screen h-screen bg-zinc-800'>
    

      <Above  />
      <Backgrounds />
    </div>
  );
};

export default App;