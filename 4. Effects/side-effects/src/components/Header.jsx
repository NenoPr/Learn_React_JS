import "../stylesheets/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="Trollface.png" alt="troll face" className="header-img" />
        <span className="header-text">Meme Generator</span>
      </div>
    </header>
  );
}
