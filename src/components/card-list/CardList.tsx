import { Monster } from "../../App";
import Card from "../card/Card";
import "./CardList.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
