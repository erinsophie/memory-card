import { useState } from 'react';
import cardData from './cardData';
import '../styles/Cards.css';
import Modal from './Modal';

function Cards({ score, setScore, clickedCards, setClickedCards }) {
  // use card data for inital render
  const [cards, setCards] = useState(cardData);
  const [showModal, setShowModal] = useState(false);

  // simple reset
  function resetGame() {
    setScore(0);
    setClickedCards([]);
    setShowModal(false);
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
      setShowModal(true);
    } else {
      // else, add id to array, increment score, shuffle cards
      if (!showModal) {
        setClickedCards([...clickedCards, cardId]);
        setScore(score + 1);
        setCards(shuffleCards([...cards]));
      }
    }
  }

  // always render modal but use showModal state to conditionally apply the active class
  // when the play again button is clicked, reset the game
  // conditionally render overlay active class
  return (
    <div className="cards-container">
      <Modal resetGame={resetGame} showModal={showModal} />
      <div className={`overlay ${showModal ? 'active' : ''}`}></div>
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
