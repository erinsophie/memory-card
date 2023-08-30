import { useState, useEffect } from 'react';
import cardData from './cardData';
import '../styles/Cards.css';

function Cards({
  setScore,
  clickedCards,
  setClickedCards,
  showModal,
  setShowModal,
  setHasWon,
  highScore,
  setHighScore,
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

  // when resetGame sets reshuffle to true, reshuffle cards
  useEffect(() => {
    if (reshuffle) {
      // use original array for shuffling upon reset
      setCards(shuffleCards([...cardData]));
      setReshuffle(false);
    }
  }, [reshuffle]);

  function endGame() {
    setShowModal(true);
  }

  function handleValidCardClick(cardId) {
    // calculate what new score would be
    // use it to update the scores and check for win
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      updateHighScore(newScore);
      checkForWin(newScore);
      // then set new state
      return newScore;
    });

    // add id to the clicked cards array
    setClickedCards((prevCards) => [...prevCards, cardId]);
    // then reshuffle cards
    setCards((prevCards) => shuffleCards([...prevCards]));
  }

  function updateHighScore(newScore) {
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  }

  // if the score matches the amount of cards, then player has won
  function checkForWin(newScore) {
    if (newScore === cardData.length) {
      setHasWon(true);
      setShowModal(true);
    }
  }

  // either end game if player has lost or handle valid card click
  // dont allow player to click on cards when modal is shown
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
