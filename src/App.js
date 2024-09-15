import Login from "./Login/Login";
import Home from "./Home/Home";
import {Routes, Route} from "react-router-dom";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData} />} />
        <Route path="/home" element={<Home userData={userData} />} />
      </Routes>
    </div>
  );
}

export default App;
