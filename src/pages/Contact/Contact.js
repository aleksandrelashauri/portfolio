import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactForm from "./ContactForm/ContactForm";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div className="contact" id="contact">
      <Container className="contact-cont">
        <div className="contact-title">
          <h1>
            i'm Sure{" "}
            <tag className="contact-title-span">
              {" "}
              i Can give everything that the company needs
            </tag>
          </h1>
        </div>
        <div style={{ color: "white", fontSize: 23 }}>
          I am constantly contemplating and making decisions that will benefit
          the company, whether it involves analyzing specifications, engaging in
          tenders, or Transferring the car to another buyer in Bus motors.
          <div>
            {" "}
            I understand that there is still much for me to learn, as continuous
            learning is essential for anyone in their professional journey.
            Being a part of this team brings me a sense of fulfillment, but in
            order to continue my contributions, I believe it is necessary for my
            salary to increase by at least 1000 GEL, plus bonuses (totaling 1700
            GEL, plus bonuses ), as the current salary falls short before the
            end of each month. I am committed to carrying on with my existing
            responsibilities while also pursuing new opportunities with other
            companies, as my ultimate goal is to drive the company's success.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
