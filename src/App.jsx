import { useState } from 'react';
import './styles/App.css';
import Modal from './components/Modal';
import Cards from './components/Cards';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [reshuffle, setReshuffle] = useState(false);

  function resetGame() {
    setScore(0);
    setClickedCards([]);
    setShowModal(false);
    setHasWon(false);
    setReshuffle(true);
  }

  // always render the modal but conditionally apply the active class
  return (
    <div className="container">
      <MusicPlayer />
      <Modal resetGame={resetGame} showModal={showModal} hasWon={hasWon} />
      <div className={`overlay ${showModal ? 'active' : ''}`}></div>

      <header className="header">
        <h1 className="title">Link&apos;s Kitchen</h1>
        <p className="sub-text">
          How good is your memory? Try to click on every card only once!
        </p>
        <div className="scores">
          <p>Score: {score}</p>
          <p>Highest score: {highScore}</p>
        </div>
      </header>

      <Cards
        setScore={setScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        showModal={showModal}
        setShowModal={setShowModal}
        setHasWon={setHasWon}
        highScore={highScore}
        setHighScore={setHighScore}
        reshuffle={reshuffle}
        setReshuffle={setReshuffle}
      />
      <Footer />
    </div>
  );
}

export default App;
