import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Smartphone from "./Components/Smartphone";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Smartphone" Component={Smartphone} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
