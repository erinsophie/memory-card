import '../styles/Modal.css';

function Modal({ resetGame, showModal, hasWon }) {
  return (
    <div className={`modal ${showModal ? 'active' : ''}`}>
      {hasWon ? (
        <div>
          <p>You won!</p>
          <p>You&apos;re clearly a memory master!</p>
        </div>
      ) : (
        <div>
          <p>You lost!</p>
          <p>But don&apos;t give up, keep practicing</p>
        </div>
      )}

      <button onClick={resetGame} className="play-again-btn">
        Play again
      </button>
    </div>
  );
}

export default Modal;
