import { useState } from 'react';
import './styles/App.css';
import Cards from './components/Cards';
import Modal from './components/Modal';

function App() {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Link&apos;s Kitchen</h1>
        <p className="sub-text">
          How good is your memory? Try to click on every card only once!
        </p>
        <div className="scores">
          <p>Highest score:</p>
          <p>Score: {score}</p>
        </div>
      </header>

      <Cards
        score={score}
        setScore={setScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
    </div>
  );
}

export default App;
