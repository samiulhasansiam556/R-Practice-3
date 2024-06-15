import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Class1 from './Classes/Class4/Class4p1';
import Class2 from './Classes/Class5,6/Class5,6p1';
import Class7p1 from './Classes//Class7,8,9,10,11/Class7p1';
import Class7p2 from './Classes//Class7,8,9,10,11/Class7p2';
import Class21p1 from './Classes/Class21/Class21p1';
import './index.css';
import Class22p1 from './Classes/Class22/Class22p1';

function App(props) {
  return (
    <div>
      <Class1/>
      <Class2/>
      <Class7p1/>
      <Class7p2/>
      <Class21p1/>
      <Class22p1/>
    </div>
  );
}

export default App;