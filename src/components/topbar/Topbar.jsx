import "./topbar.scss";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Neil Mergulhao
          </a>
          <a
            className="itemContainer"
            href="https://linkedin.com/in/neilmergulhao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="icon" />
            <span>linkedin.com/in/neilmergulhao</span>
          </a>
          <a
            className="itemContainer"
            href="https://github.com/nmergulh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="icon" />
            <span>github.com/nmergulh</span>
          </a>
          <a
            className="itemContainer"
            href="mailto: nmergulh@live.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email className="icon" />
            <span>nmergulh@live.com</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
