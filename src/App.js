import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Gallery from './Gallery';
import Layout from './Layout';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Route>
      </Routes>
  );
}

export default App;
