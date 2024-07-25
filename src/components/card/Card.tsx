import { Monster } from "../../App";
import "./Card.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { name, email, id } = monster;
  return (
    <div key={id} className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
