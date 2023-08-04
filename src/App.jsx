import { useState } from 'react';
import './styles/App.css';
import Modal from './components/Modal';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function resetGame() {
    setScore(0);
    setClickedCards([]);
    setShowModal(false);
  }

  console.log('clicked cards');
  console.log(clickedCards);

  // always render the modal but conditionally apply the active class
  return (
    <div className="container">
      <Modal resetGame={resetGame} showModal={showModal} />
      <div className={`overlay ${showModal ? 'active' : ''}`}></div>

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
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <Footer />
    </div>
  );
}

export default App;
