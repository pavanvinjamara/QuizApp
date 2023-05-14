import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const QuizResult = (): JSX.Element => {
  const location = useLocation();
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scoreValue = queryParams.get('score');
    setScore(scoreValue ? parseInt(scoreValue) : null);
  }, [location]);

  return (
    <div>
      <h2>Your Quiz Score: {score}</h2>
    </div>
  );
};

export default QuizResult;
