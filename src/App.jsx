import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Album from "./pages/Album";
import About from "./pages/About";
import Job from "./pages/Job";
import MyGO_Searcher from "./pages/MyGO_Searcher";
import AstroWeather from "./pages/AstroWeather";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/job_applications_tracker" element={<Job />} />
        <Route path="/projects/MyGO" element={<MyGO_Searcher />} />
        <Route path="/projects/AstroWeather" element={<AstroWeather />} />
        <Route path="/projects/screenshot_search" element={<MyGO_Searcher />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/album" element={<Album />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
