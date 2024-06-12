import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
