import { SET_POKEMONS } from "../actions/types";

const initialState ={pokemons : []};

export const pokemonsReudcers = (state = initialState, action) => {

    switch (action.type) {
        case SET_POKEMONS: 
            return {...state, pokemons: action.payload}
            break;
        default:
            return state;
    }
};