import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/About" Component={About} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
