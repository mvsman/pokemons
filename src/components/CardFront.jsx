import colors from '../other/colors';

const CardFront = ({ items }) => {
  return (
    <>
      <div className="card__top">
        <img
          className="card__top-img"
          src={items.sprites.other.dream_world.front_default}
          alt={items.name}
          width="160"
          height="160"
        />
      </div>
      <div className="card__bottom">
        <div className="card__bottom-id">
          {items.id < 10
            ? `00${items.id}`
            : items.id >= 10 && items.id < 100
            ? `0${items.id}`
            : items.id}
        </div>
        <div className="card__bottom-name">{items.name.toUpperCase()}</div>
        <div className="card__bottom-types">
          {items.types.map((type, i) => (
            <div
              className="card__bottom-type"
              key={i}
              style={{ backgroundColor: colors[type.type.name] }}>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardFront;
