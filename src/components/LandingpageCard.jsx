import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import icon from "../assets/download (2).png"
import { useNavigate, Link } from "react-router-dom";
const LandingpageCard = () => {
   const navigate = useNavigate();

   const handleGetStarted = () => {
     navigate("/assessment");
   };
  return (
    <>
      <Box className="card_parent">
        <div>
          <video width="50%" height="auto" controls>
            <source
              src="https://40parables-assets.s3.amazonaws.com/bleat-AI-PulseCheck-Intro.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <div className='videoplaypause'>WATCH VIDEO</div> */}
        </div>
        <div className="second-child">
          <div>
            <p>
              <span>
                Is your church embracing <br /> impact
              </span>{" "}
              or AI* hesitant?
            </p>
          </div>

          <div className="all-paragraphs">
            {" "}
            <p>1. Take this 3-minute assessment</p>
            <p>2. Invite your team to take it too after you do</p>
            <p>3. View everyone's results on 1 dashboard</p>
            <p>
              4. Aplign on the best next step for your church's approach to AI
            </p>
          </div>
          <div className="last-child-of-parrent">
            {" "}
            <Button className="btn" onClick={handleGetStarted}>
              get started
            </Button>
            <p className="timeWithIcon">
              <span>
                <img src={icon} alt="icon" width={"100%"} />
              </span>
              3 min
            </p>
          </div>
          <div className="last-div">
            <p>
              *Artificial Intelligence <br />
              <br />
              <br /> If you aren't a Senior/Lead/Executive Pastor, please ask
              one of them on your team to first take this test -
              ctt1.bleat.church. That test's result will generate a team link so
              you and other team members can then take this same test afterward
              as a team.
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default LandingpageCard;