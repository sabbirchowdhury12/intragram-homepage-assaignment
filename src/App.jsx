import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import { useSelector } from "react-redux";
import HomePage from "./pages/Home";
import AddPost from "./pages/AddPost";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
