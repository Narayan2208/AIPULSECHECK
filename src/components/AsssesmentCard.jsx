import React from 'react'
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Slider from "@mui/material/Slider";


const marks = [
  {
    value: 0,
    label: "Strongly Disagree",
  },
  {
    value: 20,
    label: "Disagree",
  },
  {
    value: 40,
    label: "Neutral",
  },
  {
    value: 60,
    label: "Agree",
  },
  {
    value: 80,
    label: "Strongly Agree",
  },
];
function valuetext(value) {
  return `${value}°C`;
}
// hello
const AsssesmentCard = () => {
  return (
    <>
      <Box className="quizee-card">
        <div style={{ marginBottom: "4em" }}>
          <LinearProgress variant="determinate" />
        </div>
        <div className="question">
          <p>1/17</p>
          <p style={{ fontSize: "20px", fontFamily: "Lato, sans-serif" }}>
            Our church's ministry strategy is firm but flexible to accommodate
            unexpected game changers such as AI.
          </p>
        </div>
        <div>
          
          <Slider
            aria-label="Custom marks"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={20}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
      </Box>
    </>
  );
}

export default AsssesmentCard