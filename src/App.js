import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import reisiblogi from "./reisiblogi-logo.png";
import Gallery from "./pages/Gallery";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <br></br>
      <br></br>
      <br></br>
      <h1><img className="image" src={reisiblogi} alt='blogi'
      />Wandering Heidi  </h1>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <div className="footer">
        <h3>GET IN TOUCH <br></br>
          Feel free to <a href="/contact">contact me</a> if you have travel questions, comments, or suggestions!
          I'll try to get back to you!
        </h3>
        <div className="social-media">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>

          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}