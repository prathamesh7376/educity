import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideforward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slidebackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions I`ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Emma Smith</h3>
                  <span>Educity UK</span>
                </div>
              </div>
              <p>
                The learning environment at Educity is incredibly nurturing. The
                professors are dedicated to their students` success and the
                resources available are top-notch. I couldn`t have asked for a
                better place to study.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Liam Johnson</h3>
                  <span>Educity Australia</span>
                </div>
              </div>
              <p>
                My time at Educity has been transformative. The curriculum is
                challenging yet rewarding, and the hands-on learning experiences
                have prepared me well for my future career. Highly recommend
                Educity to anyone!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ava Brown</h3>
                  <span>Educity Canada</span>
                </div>
              </div>
              <p>
                Studying at Educity has been an incredible journey. The campus
                is beautiful, the people are friendly, and the education I have
                received is unparalleled. I am so grateful for the opportunity
                to study here.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
