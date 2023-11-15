import { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import Moon from "../images/icon-moon.svg";

export default function Header() {
  const [textType, setTextType] = useState("inter");

  useEffect(() => {
    const app = document.getElementById("App");
    app.className = "";
    app.classList.add(`font-${textType}`);
  }, [textType]);

  const handleTextChange = event => {
    setTextType(event);
  };

  return (
    <header>
      <img src={Logo} alt="book logo icon" />
      <div className="header-control">
        <div className="font-change-container">
          <select
            name="font-change"
            className="font-change"
            onChange={event => handleTextChange(event.target.value)}
            value={textType}>
            <option value="inter">Sans Serif</option>
            <option value="lora">Serif</option>
            <option value="inconsolata">Mono</option>
          </select>
        </div>
        <label className="toggle">
          <input type="checkbox" />
          <span className="slider"></span>
          <img className="moon-icon" src={Moon} alt="moon icon" />
        </label>
      </div>
    </header>
  );
}
