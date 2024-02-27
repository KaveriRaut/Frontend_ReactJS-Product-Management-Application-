import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/addProduct" element={<AddProduct/>}></Route>
      <Route path="/editProduct/:id" element={<EditProduct/>}></Route>
    </Routes>
    </>
  );
}

export default App;
