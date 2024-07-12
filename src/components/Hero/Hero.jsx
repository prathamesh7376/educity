import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure better education for a world</h1>
        <p>
          cou cutting-edge curruiculum is designed to empower students with the
          knowledge, skills, and experties needed to excell in the dunamic fiels
          of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default hero;
