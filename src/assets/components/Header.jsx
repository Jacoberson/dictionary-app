import Logo from "../images/logo.svg";
import DownArrow from "../images/icon-arrow-down.svg";
import Moon from "../images/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <img src={Logo} />
      <div className="header-control">
        <p>Sans Serif</p>
        <img src={DownArrow} />
        <input type="checkbox" />
        <img src={Moon} />
      </div>
    </header>
  );
}
