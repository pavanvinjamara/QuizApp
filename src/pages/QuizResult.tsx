import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Welldone from '../assets/welldone.jpg'
import './QuizResult.css'

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
      <h2> {score}</h2>
      <h2>Karma Points earned</h2>
    </div>

  );
};

export default QuizResult;
