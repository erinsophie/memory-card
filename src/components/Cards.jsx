import { useState } from 'react';
import cardData from './cardData';
import '../styles/Cards.css';

function Cards({ score, setScore, clickedCards, setClickedCards }) {
  const [cards, setCards] = useState(cardData);

  // simple reset
  function resetGame() {
    setScore(0);
    setClickedCards([]);
  }

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
      resetGame();
    } else {
      // else, add id to array and increment score
      setClickedCards([...clickedCards, cardId]);
      setScore(score + 1);
      setCards(shuffleCards([...cards]));
    }
  }

  console.log('cards:');
  console.log(cards);
  console.log('clicked cards:');
  console.log(clickedCards);

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleClick(card.id)}
        >
          <img src={card.src} alt={card.name} className="img" />
        </div>
      ))}
    </div>
  );
}

export default Cards;
