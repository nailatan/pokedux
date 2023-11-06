import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = { pokemons: [], loading: false };

export const pokemonsReudcers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_FAVORITE:
      const newList = [...state.pokemons];
      const currentPokemonIndex = newList.findIndex(
        (p) => p.id === action.payload.pokemonId
      );
      if (currentPokemonIndex < 0) return state;
      newList[currentPokemonIndex].favorite =
        !newList[currentPokemonIndex].favorite;
      return { ...state, pokemons: newList };

    default:
      return state;
  }
};
