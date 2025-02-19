import "../css/hero.css";
import heroImage from "../assets/images/woods.jpg";
import logo from "../assets/images/logo.jpg";

const HeroSection = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h3>Rhenden Rada</h3>
        <h1>Portfolio</h1>
        <p>An aspiring developer.</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
