import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./index.scss";
import About from "./pages/About/About";
import Developer from "./pages/Developer/Developer";
import Subscription from "./pages/Subscription/Subscription";
import Footer from './pages/Footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Developer />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
