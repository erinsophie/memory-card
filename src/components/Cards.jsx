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
    if (clickedCards.includes(cardId)) {
      // if card has already been clicked, end game
      setShowModal(true);
    } else {
      // if card hasnt been clicked before && the modal isnt active
      if (!showModal) {
        // add id to cards array
        setClickedCards([...clickedCards, cardId]);
        // increment score
        setScore(score + 1);

        // check if new score matches the amount of cards,
        // if so, end game and show modal
        if (score + 1 === cardData.length) {
          setHasWon(true);
          setShowModal(true);
        }

        setCards(shuffleCards([...cards]));
        setHasWon(false);
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
