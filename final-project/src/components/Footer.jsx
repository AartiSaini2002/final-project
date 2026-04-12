import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:gahuniaoutfit@gmail.com">gahuniaoutfit@gmail.com</a></p>
          <p>Phone: <a href="tel:+91983452471">+91 98 345 2471</a></p>
          <p>Address 1: Gulmohar Colony, Ludhiana, Punjab, India</p>
          <p>Address 2: Market 22, Chandigarh, India</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>

            <li><Link to="/form">Order</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social">
            <li><a href="#"><i className="fab fa-instagram" /> Instagram</a></li>
            <li><a href="#"><i className="fab fa-facebook-f" /> Facebook</a></li>
            <li><a href="#"><i className="fab fa-whatsapp" /> WhatsApp</a></li>
          </ul>
        </div>

      </div>

      <p className="legal">Gahunia Wedding Collection © 2025</p>
    </footer>
  );
}

export default Footer;
