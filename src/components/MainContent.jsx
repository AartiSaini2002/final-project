function MainContent() {
  return (
    <main>
      <section className="hero">
        <div className="overlay">
          <h2>The Art of Bridal Perfection</h2>
          <p>Dresses That Turn Moments into Memories — Elegant, Affordable, Yours</p>
          <a href="#collection" className="btn-cta">Find Your Dream Outfit</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Gahunia Wedding Collection</h2>
        <p>
          Discover how easy renting can be at Gahunia Wedding Collection, with premium collections of bridal wear,
          party outfits, and elegant jewellery for every celebration.
        </p>
      </section>

      <section id="collection" className="collection">
        <h2>Popular Dresses</h2>
        <div className="cards">
          <article className="card">
            <img src="/images/Gown.webp" alt="Gowns" loading="lazy" />
            <div className="card-content">
              <h3>Gowns</h3>
              <p>Elegant & Classy Gowns for Every Formal Occasion</p>
              <a href="gowns.html" className="btn-cta">Learn More</a>
            </div>
          </article>

          <article className="card">
            <img src="/images/Jewellery.jpg" alt="Jewellery" loading="lazy" />
            <div className="card-content">
              <h3>Jewellery</h3>
              <p>Sparkle at Every Event with Our Jewellery Collection</p>
              <a href="jewellery.html" className="btn-cta">Learn More</a>
            </div>
          </article>

          <article className="card">
            <img src="/images/Lehenga.webp" alt="Bridal Lehenga" loading="lazy" />
            <div className="card-content">
              <h3>Bridal Lehenga</h3>
              <p>Shine on Your Special Day</p>
              <a href="lehenga.html" className="btn-cta">Learn More</a>
            </div>
          </article>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>✔ Easy Booking</h3>
            <p>Reserve your dress and accessories online in minutes.</p>
          </div>
          <div className="feature">
            <h3>✔ Premium Quality</h3>
            <p>All dresses are carefully inspected and maintained.</p>
          </div>
          <div className="feature">
            <h3>✔ 24/7 Support</h3>
            <p>We are always ready to assist you.</p>
          </div>
        </div>
      </section>

      <div className="cta-group">
        <section className="cta">
          <h2>Ready to embrace your perfect bridal look?</h2>
          <p>Let us help you choose the perfect outfit effortlessly.</p>
          <a href="catalog.html" className="btn-cta">See All Dresses and Accessories</a>
        </section>
      </div>
    </main>
  )
}

export default MainContent
