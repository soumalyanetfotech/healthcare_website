import "../accounts/Assesment1.css";
// import { Assesment1 } from '../accounts/Assesment1';
import flower1 from "../accounts/assets1/flower1.png";
// import flower2 from "../accounts/assets1/flower2.png";
import flower3 from "../accounts/assets1/flower3.png";
import brain from "../accounts/assets1/brain.png";
import pink from "../accounts/assets1/rectanglepink.png";
import ProgressBar from "react-bootstrap/ProgressBar"; // import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Assesment1 = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(7).fill(null));
  const [answersSubmitted, setAnswersSubmitted] = useState(false);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const allQuestionsAnswered = selectedOptions.every(
    (option) => option !== null
  );

  const calculateTotalScore = () => {
    return selectedOptions.reduce((total, option) => total + option, 0);
  };

  const interpretAnxietySeverity = (totalScore) => {
    if (totalScore >= 0 && totalScore <= 4) {
      return "Minimal anxiety";
    } else if (totalScore >= 5 && totalScore <= 9) {
      return "Mild anxiety";
    } else if (totalScore >= 10 && totalScore <= 14) {
      return "Moderate anxiety";
    } else {
      return "Severe anxiety";
    }
  };

  const handleSaveClick = () => {
    const newTotalScore = calculateTotalScore();
    const newAnxietySeverity = interpretAnxietySeverity(newTotalScore);

    setAnswersSubmitted(true);

    // Display modal with score and severity information, along with the new question about seeing a doctor
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");

    modal.style.display = "block";
    modalContent.innerHTML = `
        <h2>Total Score: ${newTotalScore}/24</h2>
        <h2>Anxiety Severity: ${newAnxietySeverity}</h2>
        <h2>Would you like to see a doctor?</h2>
        <button>Yes</button>
        <button><Link to="/doctor">No</Link></button>

    `;
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const questions = [
    {
      question: "Feeling nervous, anxious, or on edge",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Not being able to stop or control worrying",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Worrying too much about different things",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Trouble relaxing",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Being so restless that it is hard to sit still",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Becoming easily annoyed or irritable",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Feeling afraid, as if something awful might happen",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
  ];

  return (
    <>
      <div class="banner0">
        <img class="img01" src={pink} alt="banner image 1" />

        <div class="hero-text0">
          <h2>Anxiety Assessment</h2>
          <img class="brain0" src={brain} alt="banner image 1" />
          {/* <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> */}
          <div class="container-fluid0">
            <div className="progress0">
              <ProgressBar striped variant="success" now={50} />
            </div>
          </div>
        </div>
        {/* <div class="wave0">
          <img class="img0" src={flower1} alt="girl icon" />
          <img class="img00" src={flower2} alt="girl icon" />
        </div> */}
        <div className="text0">
          {questions.map((questionObj, questionIndex) => (
            <div key={questionIndex}>
              <p className="abcd1234">{`Q${questionIndex + 1}: ${
                questionObj.question
              }`}</p>
              {questionObj.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <p className="abcd123">
                    <input
                                type="radio"
                                name={`question${questionIndex}`}
                                value={optionIndex}
                                checked={selectedOptions[questionIndex] === optionIndex}
                                onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                            />
                    {` ${option}`}
                  </p>
                </label>
              ))}
            </div>
          ))}

          <button
            onClick={handleSaveClick}
            disabled={!allQuestionsAnswered}
            className="button_space2"
          >
            Save
          </button>

          <div id="myModal" className="modal">
            <div className="modal-content" id="modalContent">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
