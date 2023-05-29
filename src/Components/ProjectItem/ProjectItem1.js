import React, { useState } from "react";
import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <div>
      <div className="my-story">
        {" "}
        <div style={{ lineHeight: 1, paddingBottom: 10, fontSize: 23 }}>
          {" "}
          In the past four months, I have embarked on my journey in the car
          sales profession, working at an official dealership. It has been a
          valuable learning experience, especially in dealing with tenders and
          understanding their specific requirements. I vividly remember my first
          encounter with an irate customer who returned a car, but
          interestingly, he continues to visit our service center to maintain
          his new ID4. It's been quite a funny story.
        </div>{" "}
        <div style={{ lineHeight: 1, paddingBottom: 10, fontSize: 23 }}>
          {" "}
          During this time, I have also gained confidence in delivering
          presentations, making several of them with ease. Although I have made
          numerous cold calls, they remain cold for the most part, but I have
          learned to warm up potential leads effectively. One memorable
          experience was selling a car to Zaza, a genuinely kind man.
        </div>
        <div style={{ lineHeight: 1, paddingBottom: 10, fontSize: 23 }}>
          {" "}
          Furthermore, I am proud to have been involved with the Ivane
          Javakhishvili University, successfully selling them their first van.
          These experiences have only strengthened my love for working in this
          environment, surrounded by supportive individuals who are always ready
          to assist.
        </div>{" "}
        <div style={{ lineHeight: 1, paddingBottom: 10, fontSize: 23 }}>
          I want to express my gratitude for the opportunities thus far and
          express my desire to continue this journey. While I may not sell every
          car in our inventory, my passion and determination to enhance
          communication between major companies, plan meetings, and ultimately
          increase sales remain strong.
        </div>{" "}
        <div style={{ lineHeight: 1, paddingBottom: 10, fontSize: 23 }}>
          I look forward to contributing further to our collective success and
          building upon the stories I have already created within this company.
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
