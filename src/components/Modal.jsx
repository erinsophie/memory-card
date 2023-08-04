import '../styles/Modal.css';
import cardData from './cardData';

// if scores matches the data length then all cards have been clicked
// decide modal text based on this condition

function Modal({ resetGame, showModal, score }) {
  return (
    <div className={`modal ${showModal ? 'active' : ''}`}>
      {score === cardData.length ? (
        <div>
          <p>You won!</p>
          <p>You have clearly mastered the art of memorization!</p>
        </div>
      ) : (
        <div>
          <p>You lost!</p>
          <p>But dont give up, keep practicing</p>
        </div>
      )}

      <button onClick={resetGame} className="play-again-btn">
        Play again
      </button>
    </div>
  );
}

export default Modal;
