import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4918a384-5dee-4886-9a75-6f7371121df6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us the text <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to react out through contact form or find our contact
          information below. your feedback , questions and suggessions are
          important to us as we strive to provide exciptional service for our
          iniversity Community
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              prathameshlokhande378@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" />
              8329173454
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" />
              Khopoli,Maharastra 410203
            </li>
          </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
