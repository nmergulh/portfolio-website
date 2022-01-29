import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function intro() {
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
            <h3>Trainee Full Stack Developer | Ex-Business Consultant</h3>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="profileDescription">
          <h4>
            Ex-Business Consultant who recently worked within HSBC Global
            Private Banking Business Architecture. After liaising with senior
            management in business design I realised a lot of target state
            solutions were technical enhancements to platforms or new digital
            features. As a result, I decided to join Northcoders on the Full
            Stack coding bootcamp to be part of digital transformation from the
            technical side.
          </h4>
        </div>
      </div>
      <a href="#portfolio">
        <KeyboardArrowDownIcon />
      </a>
    </div>
  );
}
