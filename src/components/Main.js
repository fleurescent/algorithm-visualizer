import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import Pathfinding from '../pages/Pathfinding';
import Sorting from '../pages/Sorting';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Pathfinding/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/pathfinding' element={<Pathfinding/>}></Route>
      <Route exact path='/sorting' element={<Sorting/>}></Route>
    </Routes>
  );
}

export default Main;