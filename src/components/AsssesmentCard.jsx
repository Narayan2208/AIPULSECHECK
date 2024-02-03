import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Slider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const marks = [
  { value: 0, label: "Strongly Disagree" },
  { value: 25, label: "Disagree" },
  { value: 50, label: "Neutral" },
  { value: 75, label: "Agree" },
  { value: 100, label: "Strongly Agree" },
];

const AssessmentCard = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const navigate = useNavigate();

  const [questionArr, setQuestionArr] = useState([
    {
      question:
        "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
      selected_answer: null,
      answers: [0, 25, 50, 75, 100],
      section: "section 1",
    },
    {
      question:
        "Our leadership team knows of the potential risks and rewards of leveraging AI.",
      selected_answer: null,
      answers: [0, 25, 50, 75, 100],
      section: "section 2",
    },
    {
      question:
        "Our leadership team understands the value of tapping experts to educate our staff about AI.",
      selected_answer: null,
      answers: [0, 25, 50, 75, 100],
      section: "section 3",
    },
    {
      question:
        "Our church should have an AI policy that guides staff on tools, training, attribution, ethical boundaries, etc.",
      selected_answer: null,
      answers: [0, 25, 50, 75, 100],
      section: "section 4",
    },
  ]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    const questionArrTemp = [...questionArr];
    questionArrTemp[questionIndex].selected_answer = newValue;
    setQuestionArr(questionArrTemp);
    incrementCounter();
  };

  useEffect(() => {
    console.log("questionArr", questionArr);
  }, [questionArr]);

  const incrementCounter = () => {
    if (questionArr.length - 1 > questionIndex) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const decrementCounter = () => {
    if (0 < questionIndex) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  useEffect(() => {
    console.log("questionIndex", questionIndex);
  }, [questionIndex]);

  useEffect(() => {
    const nextQuestionIndex = Math.round(
      (sliderValue / 100) * (questionArr.length - 1)
    );

    console.log("sliderValue", sliderValue);
  }, [sliderValue, questionArr]);

  const valueLabelFormat = (value) => {
    const index = Math.round((value / 100) * (marks.length - 1));
    return marks[index].label;
  };

  return (
    <>
      <Box className="quizee-card">
        <p style={{ color: "rgb(110, 12, 249)", fontWeight: "600" }}>
          {Math.round(((questionIndex + 1) / questionArr.length) * 100)}%
        </p>

        <div style={{ marginBottom: "4em" }}>
          <LinearProgress
            variant="determinate"
            value={(questionIndex / (questionArr.length - 1)) * 100}
            sx={{
              "& .MuiLinearProgress-bar1Determinate": {
                backgroundColor: "rgb(110, 12, 249)",
              },
            }}
          />
          <p style={{ marginTop: "1em" }}>STRATEGY</p>
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
            value={
              !questionArr[questionIndex].selected_answer
                ? sliderValue
                : questionArr[questionIndex].selected_answer
            }
            onChange={handleChange}
            step={100 / questionArr.length}
            valueLabelDisplay="auto"
            marks={marks}
            valueLabelFormat={valueLabelFormat}
            sx={{
              "& .MuiSlider-thumb": {
                color: "rgb(110, 12, 249)",
              },
              "& .MuiSlider-track": {
                color: "rgb(110, 12, 249)",
              },
              "& .MuiSlider-rail": {
                color: "#acc4e4",
              },

              "& .MuiSlider-mark": {
                width: 16, // Adjust the width to make the marks bigger
                height: 16, // Adjust the height to make the marks bigger
                borderRadius: "50%", // Make the marks circular
                backgroundColor: "rgb(110, 12, 249)", // Adjust the color of the marks
              },
              "& .MuiSlider-markLabel[data-index]:not(.MuiSlider-markActive)": {
                fontSize: "18px", // Background color when not active
                
              },
             
            }}
          />
        </div>
        <div className="prev-next-container">
          <button
            className="prev"
            onClick={() => {
              if (questionIndex == 0) {
                navigate("/");
              }
              decrementCounter();
            }}
          >
            <span>
              <img src="https://assessment.churchtechtoday.com/static/media/prev-arrow.d12e35c0e7f8d818848be25a9871270f.svg" />
            </span>{" "}
            PREV
          </button>
          {!questionArr[questionIndex].selected_answer ||
          questionIndex == questionArr.length - 1 ? (
            <></>
          ) : (
            <button
              className="next"
              onClick={() => {
                incrementCounter();
              }}
            >
              <span>
                <img src="https://assessment.churchtechtoday.com/static/media/next-arrow.e50b3639052d696241e06821879f4a40.svg" />
              </span>{" "}
              Next
            </button>
          )}
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
