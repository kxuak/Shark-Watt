import "./index.css"

function Mapa() {
  return (
    <div className="map-container">
      <iframe
        title="Mapa"
        src="https://www.google.com/maps?q=-3.7707792207612405, -38.48140535580418&z=15&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Mapa;