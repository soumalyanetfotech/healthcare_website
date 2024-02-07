import React, { useState } from 'react';
import './QuizPage.css'; // Import your CSS file for styling
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import pic13 from "../accounts/assets1/rectanglepink.png";


const questions = [
    {
        text: 'Select your favorite color:',
        type: 'radio',
        options: ['Red', 'Blue', 'Green'],
    },
    {
        text: 'Select your favorite fruits (multiple choices allowed):',
        type: 'checkbox',
        options: ['Apple', 'Banana', 'Orange'],
    },
    {
        text: 'Choose a programming language:',
        type: 'dropdown',
        options: ['JavaScript', 'Python', 'Java'],
    },
    {
        text: 'Rate your experience with React (1 to 5):',
        type: 'slider',
        options: [1, 2, 3, 4, 5],
    },
];

const SurveyPage = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    const handleAnswerChange = (selectedAnswer) => {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestion] = selectedAnswer;
            return newAnswers;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            // Switch to the next set of questions
            setCurrentSet((prevSet) => prevSet + 1);
            setCurrentQuestion(0);
        }
    };

    const handleSubmit = () => {
        // Handle submission logic with the answers
        console.log('Submitted Answers:', answers);
    };

    const isNextButtonDisabled = () => {
        // Disable the Next button if the user hasn't selected an option for the current question
        return !answers[currentQuestion];
    };

    return (
        <>
        <div>
            <img class="heroic14" src={pic13} alt="" />
        </div>


        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className='Quiz1'>


                <div className="quiz-container">
                    <div className="question-container">
                        <p className="question">{questions[currentQuestion].text}</p>

                        {/* Render answer options based on question type */}
                        {questions[currentQuestion].type === 'radio' && (
                            <div>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            value={option}
                                            checked={answers[currentQuestion] === option}
                                            onChange={() => handleAnswerChange(option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}

                        {questions[currentQuestion].type === 'checkbox' && (
                            <div>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <label key={index}>
                                        <input
                                            type="checkbox"
                                            value={option}
                                            checked={answers[currentQuestion].includes(option)}
                                            onChange={() => handleAnswerChange([...answers[currentQuestion], option])}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}

                        {questions[currentQuestion].type === 'dropdown' && (
                            <select
                                value={answers[currentQuestion]}
                                onChange={(e) => handleAnswerChange(e.target.value)}
                            >
                                <option value="">Select an option</option>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}

                        {questions[currentQuestion].type === 'slider' && (
                            <div>
                                <input
                                    type="range"
                                    min={1}
                                    max={5}
                                    value={answers[currentQuestion]}
                                    onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
                                />
                                <div className="slider-value">
                                    {answers[currentQuestion]}
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="navigation-container">
                        {/* Progress Bar */}
                        <div className="progress-bar" style={{ width: `${((currentQuestion + 1) + currentSet * questions.length) / (questions.length * 2) * 100}%` }} />

                        {/* Next Button */}
                        <button onClick={handleNextQuestion} disabled={isNextButtonDisabled()}>
                            {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
                        </button>
                    </div>
                </div>
            </div>        </Modal.Body>

        
      </Modal.Dialog>
    </div>





           
        </>
    );
};

export default SurveyPage;