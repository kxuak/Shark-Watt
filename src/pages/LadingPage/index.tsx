import "./lading.css";
import Button from "../../components/Button";
import Card from "../../components/Card";
import tubarao from "../../../public/tubarao.png";

export default function Home() {
  return (
    <div className="container">

      <nav className="navbar">
        <span className="logo">Shark Watt</span>
        <Button variant="outline" size="normal">My Device</Button>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1 className="title-text">Fierce Style<br />Real Power</h1>

          <p className="main-text">
            The Shark Watt is a power bank for those who refuse limits: with a shark-shaped design, it combines style and high performance for any situation. Waterproof, it lets you charge your phone even underwater — perfect for the beach, pool, or rain — but should not be recharged while wet or submerged. It also features a built-in tracker for added security. Compact, durable, and powerful, it keeps you connected anywhere.
          </p>
          <h3 className="info">
            5200 mAh | 12 W
          </h3>

          <div className="buttons-outline">
            <Button 
            variant="primary" size="small">Buy</Button>
            <Button variant="outline" size="small" to="#features">Explore</Button>
          </div>
        </div>

        <div className="hero-right">
          <img src={tubarao} />
        </div>
      </section>


      
      <section id="features" className="features">
        <h1 className="title-feature">Features</h1>

        <div className="features-grid">
            <Card title="Waterproof"
            description="It withstand submersion in water."/>
            <Card title="Battery Capacity"
            description="5200 mAh — long battery life."/>

            <Card title="Smart Design"
            description="Built-in GPS tracking."/>

            <Card title="Loading speed"
            description="12W speed."/>
            
            <Card title="Temperature Alert"
            description="Warns on abnormal heat."/>

            <Card title="Double Short-Circuit Protection"
            description="Extra safety for your devices"/>
        </div>
      </section>

      <footer className="footer">
      <div className="footer-left">
        <h3>Shark Watt</h3>
        <p>Fierce style. Real power.</p>
      </div>

      <div className="footer-center">
        <a href="https://unifor.br/">Unifor</a>
        <a href="#features">Features</a>
        <a href="#">Buy</a>
      </div>

      <div className="footer-right">
        <p>© 2026 Shark Watt</p>
      </div>
    </footer>

    </div>
  );
}