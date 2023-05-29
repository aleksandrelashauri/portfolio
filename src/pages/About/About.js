import React from "react";
import "./About.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";

function About() {
  return (
    <div className="about" id="about">
      <Container className="about-cont" data-aos="fade-in">
        <div className="about-main-content">
          <div className="about-img" data-aos="fade-up">
            <img src={require("../../pictures/1.png")} />
          </div>
          <div className="about-text" data-aos="fade-up">
            <div className="about-title">
              <h2>
                Thank <tag>You</tag>
              </h2>
            </div>
            <div className="about-p">
              <p>
                Dear Boss, Firstly, I would like to express my sincere gratitude
                for the incredible opportunities you have provided me with.
                During my tenure here, I have gained extensive knowledge about
                the automotive industry, understanding its inner workings and
                what it takes to become an exceptional leader. I have witnessed
                firsthand your unwavering dedication, always available for your
                employees, and striving to create a work environment where
                everyone feels valued and inspired to give their best. Your
                leadership has cultivated a remarkable atmosphere, making this a
                place where people are proud to dedicate their professional
                lives. Thank you once again for the invaluable experience and
                the chance to grow.
              </p>
            </div>
            {/* <div className="about-list-skills">
              <div className="about-list">
                <div className="about-list-item">
                  <h5>Name</h5> <tag className="name-colon">:</tag>
                  <p>Levan iakobidze</p>
                </div>

                <div className="about-list-item">
                  <h5>Age </h5> <tag className="age-colon">:</tag>
                  <p>20</p>
                </div>

                <div className="about-list-item">
                  <h5>Adress</h5> <tag className="adress-colon">:</tag>{" "}
                  <p>Georgia, Tbilisi</p>
                </div>

                <div className="about-list-item">
                  <h5>Phone</h5> <tag className="phone-colon">:</tag>{" "}
                  <p>(+995) 598-13-23-16</p>
                </div>

                <div className="about-list-item">
                  <h5>Email</h5> <tag className="email-colon">:</tag>{" "}
                  <p>levaniakobidze25@gmail.com</p>
                </div>
              </div>
            </div> */}
            {/* <div className="about-btn">
              <a
                className="download-btn"
                href={require("../../pictures/Levan-Iakobidze-CV.pdf")}
                download
              >
                {" "}
                Download cv{" "}
              </a>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
