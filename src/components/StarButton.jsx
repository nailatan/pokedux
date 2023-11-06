import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const StarButton = ({ isFavorite, onClick }) => {
  const icon = isFavorite ? (
    <StarFilled></StarFilled>
  ) : (
    <StarOutlined></StarOutlined>
  );
  return (
    <Button
      icon={icon}
      onClick={onClick}
    ></Button>
  );
};

export default StarButton;
