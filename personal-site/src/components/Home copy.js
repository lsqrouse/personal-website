import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Test from '../pages/Test';
import Projects from '../pages/Projects';
import Nav from './Nav';
import Box from '@material-ui/core/Box';

const Main = () => {
  return (
    <div className="App">
      <Box my={5}>
          <Nav />
        </Box>
      <Routes> 
        <Route exact path='/' element={<Test/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
      </Routes>
  </div>

  );
}
{/*  */}
export default Main;