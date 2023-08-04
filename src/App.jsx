import { useState } from 'react';
import './styles/App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';

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
          <p>Score: {score}</p>
          <p>Highest score:</p>
        </div>
      </header>

      <Cards
        score={score}
        setScore={setScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />

      <Footer />
    </div>
  );
}

export default App;
