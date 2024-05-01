import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" Component={Home} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
