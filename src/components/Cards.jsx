import imgData from './imgData';

function Cards() {
  return (
    <div className="cards-container">
      {imgData.map((img) => (
        <div key={img.id} className="card">
          <img src={img.src} alt={img.name} className="img" />
        </div>
      ))}
    </div>
  );
}

export default Cards;
