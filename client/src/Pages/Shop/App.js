import Headers from './components/petShop/Headers';
import Home from './components/petShop/Home';
import CartDetails from './components/petShop/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/petShop/Sucess';
import Cancel from './components/petShop/Cancel';


function App() {
  return (
    <>
   
     <Headers />
    
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/cart' element={<CartDetails/>}/>
      <Route  path='/sucess' element={<Sucess/>}/>
      <Route  path='/cancel' element={<Cancel/>}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
