import { useState } from "react";
import "../stylesheets/Main.css";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(event) {
    const {value, name} = event.currentTarget
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <div className="meme-input">
          <div className="label-contanier">
            <label htmlFor="topText">Top text:</label>
            <input type="text" onChange={handleChange} name="topText" placeholder="One does not simply"/>
          </div>
          <div className="label-contanier">
            <label htmlFor="bottomText">Bottom Text</label>
            <input type="text" onChange={handleChange} name="bottomText" placeholder="Walk into mordor"/>
          </div>
        </div>
        <button>Get new meme image </button>
      </div>
      <section>
        <div className="image-container">
          <p className="top">{meme.topText.toUpperCase()}</p>
          <img src={meme.imageUrl} alt="" />
          <p className="bottom">{meme.bottomText.toUpperCase()}</p>
        </div>
      </section>
    </main>
  );
}
