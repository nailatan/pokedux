import logo from './statics/logo.svg';
import './App.css';
import {Col} from "antd";
import Searcher from "./components/Searcher";
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import {getPokemons}  from './api';
import {connect} from "react-redux";
import {setPokemons as setPokemonsActions}  from "./actions";


function App({pokemons, setPokemons}) {
  console.log("🚀 ~ file: App.js:13 ~ App ~ pokemons:", pokemons)
  //const [pokemons, setPokemons] =useState([]);

  useEffect(()=>{
    const fetchPokemon = async () => {
      const list = await getPokemons();
      setPokemons(list);
    };

    const list = fetchPokemon()     
  }, []);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img  src={logo} alt ="Pokedux"></img>
      </Col>
      <Col span="8" offset="8">
      <Searcher/>
      </Col>
    <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps =(state) => ({
 pokemons: state.pokemons
});

const mapDispachToProps = (dispatch => ({
  setPokemons:  (value) => dispatch(setPokemonsActions(value)),
}));

export default connect(mapStateToProps, mapDispachToProps)(App);
