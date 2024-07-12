import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

// eslint-disable-next-line react/prop-types
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing tomorrow`s leaders Today</h2>
        <p>
          Embark on a transformative educational jurney with our university`s
          comprehensive education programs .our cutting-edge curruiculum is
          designed to empower students with the knowledge , skills and
          experience needed to excell inn the dynamic fieldn of education .
        </p>
        <p>
          with a focus on innovation , hands-on learning and personalized
          mentorship , our programs prepare aspireing education to make a
          meaningful impact in classrooms, schools, and communities
        </p>
        <p>
          wether you aspire to become a teacher , administratior , counslor or
          educational leader, our diverse range of programs offer the perfect
          pathway to acive your goals and unlock your full potential in shaping
          the future of education
        </p>
      </div>
    </div>
  );
};

export default About;
