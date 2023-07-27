import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Tasks from "./pages/Tasks";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Panel">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/tasks" element={<Tasks/>} />
          </Routes>  
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;