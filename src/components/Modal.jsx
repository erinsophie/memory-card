import '../styles/Modal.css';

function Modal({ resetGame, showModal }) {
  return (
    <div className={`modal ${showModal ? 'active' : ''}`}>
      <p>You lost!</p>
      <button onClick={resetGame} className="play-again-btn">
        Play again
      </button>
    </div>
  );
}

export default Modal;
