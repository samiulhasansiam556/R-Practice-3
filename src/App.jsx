import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Class1 from './Classes/Class4/Class4p1';
import Class2 from './Classes/Class5,6/Class5,6p1';
import Class7p1 from './Class7,8,9,10,11/Class7p1';
import Class7p2 from './Class7,8,9,10,11/Class7p2';

function App(props) {
  return (
    <div>
      <Class1/>
      <Class2/>
      <Class7p1/>
      <Class7p2/>
    </div>
  );
}

export default App;