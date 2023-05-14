import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizDetails from './pages/QuizDetails';
import QuizAttempt from './pages/QuizAttempt';
import QuizResult from './pages/QuizResult';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={ <QuizDetails/>} />
            <Route path="/quiz" element={<QuizAttempt/>} />
            <Route path="/result" element={ <QuizResult/> } />          
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;