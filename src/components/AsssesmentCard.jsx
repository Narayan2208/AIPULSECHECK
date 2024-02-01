import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Slider } from "@mui/material";

const marks = [
  { value: 0, label: "Strongly Disagree" },
  { value: 20, label: "Disagree" },
  { value: 40, label: "Neutral" },
  { value: 60, label: "Agree" },
  { value: 80, label: "Strongly Agree" },
];

const AssessmentCard = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const questionArr = [
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our leadership team knows of the potential risks and rewards of leveraging AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    },
    // ... (add other questions as needed)
  ];

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    const nextQuestionIndex = Math.round(
      (sliderValue / 100) * (questionArr.length - 1)
    );
    setQuestionIndex(nextQuestionIndex);
  }, [sliderValue, questionArr]);

  const valueLabelFormat = (value) => {
    const index = Math.round((value / 100) * (marks.length - 1));
    return marks[index].label;
  };

  return (
    <>
      <Box className="quizee-card">
        <p>{Math.round(((questionIndex + 1) / questionArr.length) * 100)}%</p>

        <div style={{ marginBottom: "4em" }}>
          <LinearProgress
            variant="determinate"
            value={(questionIndex / (questionArr.length - 1)) * 100}
          />
        </div>
        <div className="question">
          <p>
            {questionIndex + 1}/{questionArr.length}
          </p>
          <p style={{ fontSize: "20px", fontFamily: "Lato, sans-serif" }}>
            {questionArr[questionIndex].question}
          </p>
        </div>
        <div>
          <Slider
            aria-label="Custom marks"
            value={sliderValue}
            onChange={handleChange}
            step={100 / (questionArr.length - 1)}
            valueLabelDisplay="auto"
            marks={marks}
            valueLabelFormat={valueLabelFormat}
          />
        </div>
      </Box>
    </>
  );
};

export default AssessmentCard;

// import React from 'react'
// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";
// import Slider from "@mui/material/Slider";

// const marks = [
//   {
//     value: 0,
//     label: "Strongly Disagree",
//   },
//   {
//     value: 20,
//     label: "Disagree",
//   },
//   {
//     value: 40,
//     label: "Neutral",
//   },
//   {
//     value: 60,
//     label: "Agree",
//   },
//   {
//     value: 80,
//     label: "Strongly Agree",
//   },
// ];
// function valuetext(value) {
//   return `${value}°C`;
// }
// const AsssesmentCard = () => {
//   return (
//     <>
//       <Box className="quizee-card">
//         <div style={{ marginBottom: "4em" }}>
//           <LinearProgress variant="determinate" />
//         </div>
//         <div className="question">
//           <p>1/17</p>
//           <p style={{ fontSize: "20px", fontFamily: "Lato, sans-serif" }}>
//             Our church's ministry strategy is firm but flexible to accommodate
//             unexpected game changers such as AI.
//           </p>
//         </div>
//         <div>

//           <Slider
//             aria-label="Custom marks"
//             defaultValue={0}
//             getAriaValueText={valuetext}
//             step={20}
//             valueLabelDisplay="auto"
//             marks={marks}
//           />
//         </div>
//       </Box>
//     </>
//   );
// }

// export default AsssesmentCard
