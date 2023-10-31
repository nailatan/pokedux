import {Card} from "antd";
import Meta from 'antd/lib/card/Meta';
import {StarOutlined} from '@ant-design/icons';

const PokecmonCard =({name})=> {
    return <Card  bordered="true" title={name} cover={<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" alt="Dito"/>} 
    extra={<StarOutlined/>}
    >    
    
    <Meta description="Fire, Magic"></Meta>       
    </Card>
}

export default PokecmonCard;