import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

const App = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUsername={setUsername} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main username={username} />} />
      </Routes>
    </Router>
  );
};

export default App;
