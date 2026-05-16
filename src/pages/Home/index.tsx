import { useEffect, useState } from "react";
import "./index.css"
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Mapa from "../../components/Mapa";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="center-body">
        <div className="loader-shape-3"></div>
      </div>

    );
  }

  return (
    <div>
    <nav className="navbar">
        <span className="logo">Shark Watt</span>
        <Link to="/">
        <Button variant="outline" size="normal">Lading Page</Button>
        </Link>
      </nav>
    <div className="container-home">
      <div className="main-home">
        <div className="main-home-text">
          <h1 className="tracker-title">Find Device</h1>
          <p className="tracker-description">Track the location of your Shark Watt in real time. The integrated GPS allows you to track your power bank at any time, ensuring you never lose your device.</p>
        </div>
        <div className="main-home-widgets">
          <p className="online"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" /></svg> online</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-antenna-bars-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 18l0 -3" /><path d="M10 18l0 -6" /><path d="M14 18l0 -9" /><path d="M18 18l0 -12" /></svg></p>
        </div>
        <div className="main-home-gps"><Mapa /></div>
      </div>
    </div>
    </div>
  );
}

export default Home;