import logo from './statics/logo.svg';
import './App.css';
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { useEffect } from "react";
import { getPokemonDetails, getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading, setPokemons } from "./actions";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //const [pokemons, setPokemons] =useState([]);
  const pokemons = useSelector((state) => state.get("pokemons")).toJS();
  const loading = useSelector((state) => state.get("loading"));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const list = await getPokemons();

      // const pokemonDetailed = await Promise.all(
      //   list.map((pokemon) => getPokemonDetails(pokemon))
      // );

      dispatch(getPokemonsWithDetails(list));
      dispatch(setLoading(false));
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
        span={8}
        offset={8}
      >
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={1}>
          <Spin
            spinning
            size="large"
          ></Spin>
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
