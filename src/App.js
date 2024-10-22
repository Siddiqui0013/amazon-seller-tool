import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<SignIn/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

