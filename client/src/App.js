import Boxes from "./Components/Boxes";
import { useSelector } from "react-redux"
import Navbar from './Components/Navbar'
import Searchbar from "./Components/Searchbar";

function App() {
  const state = useSelector((state) => state.Header);
  return (
    <div>
      {state.Navbar ? <Navbar /> : <Searchbar />}
      <Boxes />
      </div>
  );
}

export default App;
