function Cards({ cards, handleCardClick }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div
          className="card"
          key={card.id}
          onClick={() => handleCardClick(card.id)}
        >
          <img src={card.image} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Cards;