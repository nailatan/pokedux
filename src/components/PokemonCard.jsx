import {Card} from "antd";
import Meta from 'antd/lib/card/Meta';
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokecmonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesStr = types.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      bordered="true"
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={
        <StarButton
          isFavorite={favorite}
          onClick={handleOnFavorite}
        />
      }
    >
      <Meta description={typesStr}></Meta>
    </Card>
  );
};

export default PokecmonCard;