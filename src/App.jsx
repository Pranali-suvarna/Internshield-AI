import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Result from "./pages/Result";
import Login from "./pages/Login";
import LearnMore from "./pages/LearnMore";
import Register from "./pages/Register";
import ReportScam from "./pages/ReportScam";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/result" element={<Result />} />
      <Route path="/login" element={<Login />} />
<Route path="/learnmore" element={<LearnMore />} />
<Route path="/register" element={<Register />} />
<Route path="/report" element={<ReportScam />} />
    </Routes>
  );
}

export default App;