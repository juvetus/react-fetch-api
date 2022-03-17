import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./components/UseToken";
import Dashboad from "./components/Dashboad";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboad />} />
          <Route path="/dashboard" element={<Dashboad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
