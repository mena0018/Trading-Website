import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./index.scss";
import About from "./pages/About/About";
import Developer from "./pages/Developer/Developer";


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Developer />
    </>
  );
}

export default App;
