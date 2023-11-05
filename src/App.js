import logo from './statics/logo.svg';
import './App.css';
import {Col} from "antd";
import Searcher from "./components/Searcher";
import PokemonList from './components/PokemonList';
import { useEffect } from "react";
import { getPokemonDetails, getPokemons } from "./api";
import { setPokemons } from "./actions";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //const [pokemons, setPokemons] =useState([]);
  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const list = await getPokemons();

      const pokemonDetailed = await Promise.all(
        list.map((pokemon) => getPokemonDetails(pokemon))
      );

      dispatch(setPokemons(pokemonDetailed));
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col
        span={4}
        offset={10}
      >
        <img
          src={logo}
          alt="Pokedux"
        ></img>
      </Col>
      <Col
        span="8"
        offset="8"
      >
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
