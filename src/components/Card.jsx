import { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';

const Card = ({ props }) => {
  const [show, setShow] = useState(false);

  const func = () => setShow(!show);

  return (
    <div className={!show ? 'card' : 'cardback'}>
      <div className="card__top-info" onClick={func}>
        i
      </div>
      {!show ? <CardFront items={props} /> : <CardBack items={props} />}
    </div>
  );
};

export default Card;
