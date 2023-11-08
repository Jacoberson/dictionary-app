import Logo from "../images/logo.svg";
import Moon from "../images/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="book logo icon" />
      <div className="header-control">
        <div className="font-change-container">
          <select name="font-change" className="font-change">
            <option value="Sans Serif">Sans Serif</option>
            <option value="Serif">Serif</option>
            <option value="Mono">Mono</option>
          </select>
        </div>
        <div className="toggle">
          <input type="checkbox" />
          <span className="slider"></span>
          <img className="moon-icon" src={Moon} alt="moon icon" />
        </div>
      </div>
    </header>
  );
}
