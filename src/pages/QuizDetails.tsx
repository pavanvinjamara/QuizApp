import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';
import Quizbg from '../assets/Quizbg.png';
import quizData from '../components/quizData.json';

const QuizDetail: React.FC = () => {
  const [displayPopUp, setDisplayPopUp] = useState<string>('');

  const handlePopUp = () => {
    if (displayPopUp === 'block') {
      setDisplayPopUp('none');
    } else {
      setDisplayPopUp('block');
    }
  };

  return (
    <div className='q-deatils-container'>
      <div className='sub-container'>
      <h1 className='details-header'>Daily Quiz MS Quiz</h1>
      <img src={Quizbg} alt=''/>
      </div>
      <h2>Quiz Description</h2>
      <p className='para-deatail'>This Microsoft Excel Proficiency Test is designed to evaluate an individual's knowledge and skills in using Microsoft Excel covers a wide range of topics, including data.</p>
      <button className={displayPopUp ? 'none' : 'block'} onClick={handlePopUp}>
        Take Quiz
      </button>
      <div className={displayPopUp ? '' : 'none'} onClick={handlePopUp}>
        <h3>Quiz Rules</h3>
        <p>Number of Questions: {quizData.totalQuestions}</p>
        <p>Time : {quizData.totalQuestions} mins</p>
        <Link to="/quiz">
          <button className='start-btn'>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizDetail;
