import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateQ from "./Components/CreateQ";
import HomePage from "./Components/HomePage";
import Qlibrary from "./Components/Qlibrary";
import Header from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createq" element={<CreateQ />} />
            <Route path="/qlibrary" element={<Qlibrary />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
