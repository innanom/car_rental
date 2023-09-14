
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import  Home from './pages/Home';
import  Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App;
