import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
        "Trainee Full Stack Developer",
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
            <a href="https://northcoders.com/"> Northcoders</a> 13-week Full
            Stack Software Development course
          </h4>
        </div>
        <div className="testimonials">
          <div className="container">
            <div className="card">
              <div className="top">
                <img src="assets/richHMCTS.jpeg" alt="Richard Cabral" />
                <LinkedInIcon sx={{ color: "#2867B2" }} className="linkedin" />
              </div>
              <div className="center">
                It’s been a pleasure working with Neil. From process improvement
                using JIRA and Confluence to updating milestones on the
                programme plan, Neil is able to take on a variety of tasks with
                ease.
              </div>
              <div className="bottom">
                <h3>Richard</h3>
                <h4>Senior Consultant at P2 Consulting</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#portfolio" className="down">
        <KeyboardArrowDownIcon
          sx={{ fontSize: "50px", margin: "10px", color: "#15023a" }}
        />
      </a>
    </div>
  );
}
