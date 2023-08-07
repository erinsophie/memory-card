import { useState, useEffect } from 'react';
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
  reshuffle,
  setReshuffle,
}) {
  const [cards, setCards] = useState(cardData);

  // Fisher-Yates shuffle algorithm
  function shuffleCards(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  // reshuffle when reset function is called
  useEffect(() => {
    setCards(shuffleCards([...cardData]));
    setReshuffle(false);
  }, [reshuffle]);


  function endGame() {
    setShowModal(true);
  }

  function handleValidCardClick(cardId) {
    const newScore = score + 1;

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
