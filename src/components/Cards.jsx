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

  function handleClick(cardId) {
    // Compute the new score first
    const newScore = score + 1;

    if (clickedCards.includes(cardId)) {
      // if card has already been clicked, end game
      setShowModal(true);
    } else {
      // if card hasn't been clicked before && the modal isn't active
      if (!showModal) {
        // add id to cards array
        setClickedCards([...clickedCards, cardId]);
        // Use newScore for checks

        if (newScore > highestScore.current) {
          highestScore.current = newScore;
        }

        if (newScore === cardData.length) {
          setHasWon(true);
          setShowModal(true);
        }

        // update the score state at the end
        setScore(newScore);
        setCards(shuffleCards([...cards]));
      }
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
