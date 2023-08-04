import { useState } from 'react';
import cardData from './cardData';
import '../styles/Cards.css';

function Cards({
  score,
  setScore,
  clickedCards,
  setClickedCards,
  showModal,
  setShowModal,
  setHasWon,
  highestScore,
}) {
  // use card data for inital render
  const [cards, setCards] = useState(cardData);

  // Fisher-Yates shuffle algorithm
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
    }

    return array;
  }

  function endGame() {
    setShowModal(true);
  }

  function handleValidCardClick(cardId) {
    // Compute the new score first
    const newScore = score + 1;

    // add id to array of clicked cards
    setClickedCards([...clickedCards, cardId]);
    updateHighScore(newScore);
    checkForWin(newScore);
    setScore(newScore);
    setCards(shuffleCards([...cards]));
  }

  function updateHighScore(newScore) {
    if (newScore > highestScore.current) {
      highestScore.current = newScore;
    }
  }

  function checkForWin(newScore) {
    if (newScore === cardData.length) {
      setHasWon(true);
      setShowModal(true);
    }
  }

  function handleClick(cardId) {
    if (clickedCards.includes(cardId)) {
      endGame();
    } else if (!showModal) {
      handleValidCardClick(cardId);
    }
  }

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleClick(card.id)}
        >
          <img src={card.src} alt={card.name} className="img" />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
