import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Welldone from '../assets/welldone.jpg'
import './QuizResult.css'
import quizData from '../components/quizData.json';

const QuizResult = (): JSX.Element => {
  const location = useLocation();
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scoreValue = queryParams.get('score');
    setScore(scoreValue ? parseInt(scoreValue) : null);
  }, [location]);

 

  return (
    <div className='result'>
      <img src={Welldone} alt=''/>
      <h1 className='score-result'> {score}</h1>
      <h2>Karma Points earned</h2>
    </div>

  );
};

export default QuizResult;
