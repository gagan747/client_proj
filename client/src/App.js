import Boxes from "./Components/Boxes";
import { useSelector } from "react-redux"
import Navbar from './Components/Navbar'
import Searchbar from "./Components/Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";

function App() {
  const state = useSelector((state) => state.Header);
  console.log('app.js',state)
  return (
    <>
      {state.Navbar ? <Navbar /> : <Searchbar /> }
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<><Boxes /></>}>
          </Route>
          <Route path="/collection" element={<><Products /></>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
