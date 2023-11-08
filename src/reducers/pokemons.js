import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({ pokemons: [], loading: false });

export const pokemonsReudcers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      //return { ...state, pokemons: action.payload };
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);
    // return { ...state, loading: action.payload };
    case SET_FAVORITE:
      //const newList = [...state.pokemons];
      const currentPokemonIndex = state
        .get("pokemons")
        .findIndex((p) => p.get("id") === action.payload.pokemonId);

      if (currentPokemonIndex < 0) return state;

      const isFavorite = state
        .get("pokemons")
        .get(currentPokemonIndex)
        .get("favorite");

      const isFAvorite2 = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);
      console.log(
        "🚀 ~ file: pokemons.js:32 ~ pokemonsReudcers ~ isFAvorite2:",
        isFAvorite2
      );

      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFAvorite2
      );

    default:
      return state;
  }
};
