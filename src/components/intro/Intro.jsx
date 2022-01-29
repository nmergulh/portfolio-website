import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Trainee Software Developer",
        "Northcoders Graduate",
        "Ex-Business Consultant",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="backgroundContainer"></div>
        <div className="topLeft">
          <div className="imgContainer">
            <img src="assets/profilepic.png" alt="Neil Mergulhao" />
          </div>
        </div>
        <div className="topRight">
          <div className="wrapper">
            <h2>Hi There 👋🏽, I'm</h2>
            <h1>Neil Mergulhao</h1>
            <div className="roleTitles">
              <span ref={textRef}>Trainee Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="profileDescription">
          <h4>
            Previously, I was consulting for 5 years within telecoms, government
            and banking. I undertook a variety of roles from PMO to Business
            Analyst. However, I wanted to become more involved in digital
            transformation from the technical side. As such, I joined
            Northcoders 13-week Full Stack Software Development course
          </h4>
        </div>
      </div>
      <a href="#portfolio">
        <KeyboardArrowDownIcon
          sx={{ fontSize: "50px", margin: "10px", color: "#15023a" }}
        />
      </a>
    </div>
  );
}
