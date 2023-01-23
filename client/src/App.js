import Box from "./Components/Box";
import { useSelector } from "react-redux"
import Navbar from './Components/Navbar'
import Searchbar from "./Components/Searchbar";

function App() {
  const state = useSelector((state) => state.Header);
  return (
    <>
      {state.Navbar ? <Navbar /> : <Searchbar />}
      <Box bgUrl='https://kaleere.in/wp-content/uploads/2022/09/Screenshot_2.png' btnMsg='DISCOVER NEW ARRIVALS' />
      <Box bgUrl='https://kaleere.in/wp-content/uploads/2022/09/1920X800_-_WEBSITE_x800.webp' btnMsg='Discover The Collection' distanceFromBottom={50} />
      <Box bgUrl='	https://kaleere.in/wp-content/uploads/2022/09/360_F_273316816_N9164vXl3NTl1W50Z3o2ocQmtjBAAPOO.jpg' btnMsg='Discover The Collection' />
    </>
  );
}

export default App;
