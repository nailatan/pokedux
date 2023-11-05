import {Card} from "antd";
import Meta from 'antd/lib/card/Meta';
import {StarOutlined} from '@ant-design/icons';

const PokecmonCard = ({ name, image }) => {
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
      extra={<StarOutlined />}
    >
      <Meta description="Fire, Magic"></Meta>
    </Card>
  );
};

export default PokecmonCard;