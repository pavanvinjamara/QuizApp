import React, { useState, useEffect } from 'react';
import quizData from '../components/quizData.json';

const QuizAttempt: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(quizData.totalQuestions).fill(null));
  const [remainingTime, setRemainingTime] = useState<number>(quizData.totalQuestions * 60); // set initial time based on number of questions
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const newTimer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        submitQuiz();
      }
    }, 1000);

    setTimer(newTimer);

    return () => clearInterval(newTimer);
  }, [remainingTime]);

  const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionIndex: number = parseInt(event.target.value);
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = optionIndex;
      return updatedAnswers;
    });
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSubmit = () => {
    submitQuiz();
  };

  const submitQuiz = () => {
    if (timer) clearInterval(timer);
  
    // calculate score and time taken
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData.questions[index].answer) {
        score += 5;
      }
    });
  
    // add score for last question
    const lastQuestionIndex = quizData.totalQuestions - 1;
    if (userAnswers[lastQuestionIndex] === quizData.questions[lastQuestionIndex].answer) {
      score += 5;
    }
  
    const firstQuestionIndex = 0;
    if (userAnswers[firstQuestionIndex] === quizData.questions[firstQuestionIndex].answer) {
      score += 5;
    }
    const timeTaken = quizData.totalQuestions * 60 - remainingTime; // calculate total time taken based on number of questions
  
    // navigate to Quiz Result Screen
    const url = `/result?score=${score}`;
    window.location.href = url;
  };
  
  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div>
      <p>Question {currentQuestionIndex + 1} of {quizData.totalQuestions}</p>
      <p>Time Remaining: {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}</p>
      <h2>{currentQuestion.question}</h2>
      <form>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index + 1}`}
              name="options"
              value={index}
              onChange={handleOptionSelect}
              checked={userAnswers[currentQuestionIndex] === index}
            />
            <label htmlFor={`option${index + 1}`}>{option}</label>
          </div>
        ))}
      </form>
      {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion}>Prev</button>}
      {currentQuestionIndex < quizData.totalQuestions - 1 ?
        <button onClick={handleNextQuestion}>Next</button> :
        <button onClick={handleSubmit}>Submit</button>
      }
    </div>
  );
};

export default QuizAttempt;