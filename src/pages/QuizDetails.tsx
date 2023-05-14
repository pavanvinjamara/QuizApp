import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';

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
    <div>
      <h1>Quiz Title</h1>
      <p>Quiz Description</p>
      <p>Number of Questions: X</p>
      <button className={displayPopUp ? 'none' : 'block'} onClick={handlePopUp}>
        Take Quiz
      </button>
      <div className={displayPopUp ? 'block' : 'none'} onClick={handlePopUp}>
        <h1>Quiz Rules</h1>
        <Link to="/quiz">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizDetail;
