import { combineReducers } from "redux-immutable";
import { pokemonsReudcers } from "./pokemons";
import { uiReudcers } from "./ui";

const rootReducer = combineReducers({
  data: pokemonsReudcers,
  ui: uiReudcers,
});

export default rootReducer;
