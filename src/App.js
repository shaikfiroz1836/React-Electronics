import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Smartphone from "./Components/Smartphone";
import Iphone15 from "./Components/Iphone15";
import Samsungs from "./Components/Samsungs";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Smartphone" Component={Smartphone} />
          <Route path="/Iphone" Component={Iphone15} />
          <Route path="/samsungs" Component={Samsungs} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
