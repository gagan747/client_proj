import Boxes from "./Components/Boxes";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import Navbar from './Components/Navbar'
import Searchbar from "./Components/Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  const state = useSelector((state) => state.Header);
  console.log('app.js',state)
  return (
    <>
      <BrowserRouter>
        {state.Navbar ? <Navbar /> : <Searchbar />}
        <Routes> 
          <Route path="/" element={<><Boxes /></>} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/collection" element={<><Products /></>} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/login" element={<><Login /></>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
