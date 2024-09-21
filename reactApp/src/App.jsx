import React from 'react';
import Mainpage from './component/Mainpage/Mainpage'; 
import Detailpage from './component/Detailpage/Detailpage'; 
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/mainpage/:id' element={<Detailpage />} />
      </Routes>
    </div>
  );
};

export default App;
