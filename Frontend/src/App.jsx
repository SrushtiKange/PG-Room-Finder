import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PGListing from "./pages/PGListing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pg"
          element={
            <>
              <Navbar />
              <PGListing />
              <Footer />  
              <Signin/>
              <Signup />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
