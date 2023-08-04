import { useState, useRef } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleMusic() {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="audio-player">
      <p className="music-text">Music Player - Hateno Ancient Tech Lab</p>
      <audio ref={audioRef} loop>
        <source src="../public/hateno-tech-lab.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleMusic}>
        <i
          className={
            isPlaying ? 'fa-solid fa-volume-low' : 'fa-solid fa-volume-xmark'
          }
        ></i>
      </button>
    </div>
  );
}

export default MusicPlayer;
