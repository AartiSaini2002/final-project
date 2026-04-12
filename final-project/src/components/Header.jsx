import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="logo-block">
          <h1 className="logo">Gahunia Wedding Collection</h1>
          <p className="full-form">
            Glitter & Art Harmonizing Unique Nest of Iconic Adornments
          </p>
          <p className="tagline">Complete Your Look, Effortlessly.</p>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/form">Form</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
