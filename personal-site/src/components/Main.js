import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Test from '../pages/Test';
import Projects from '../pages/Projects';

const Main = () => {
  return (
    <Routes> 
      <Route exact path='/' element={<Test/>}></Route>
      <Route exact path='/projects' element={<Projects/>}></Route>
    </Routes>
  );
}

export default Main;