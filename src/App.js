import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        
          <Route path="/Home" Component={Home} />
        
      </Router>
           
           <Home/>
    </div>
  );
}

export default App;
