/* eslint-disable class-methods-use-this */
import { observableArray, ObservableArray } from "knockout";
import { PartyPokemon } from "../../party/PartyPokemon";
import { PokemonNameType } from "../../pokemons/PokemonNameType";
import { DisplayOption } from "./Filter";
import SaveableFilter from "./SaveableFilter";

export default class ShinyFilter extends SaveableFilter<number> {
    public getDisplayOptions(): ObservableArray<DisplayOption> {
        return observableArray([{ text: 'All', value: -1 }, { text: 'Shiny', value: 0 }, { text: 'Not Shiny', value: 1 }]);
    }

    public include(pokemon: PartyPokemon | PokemonNameType) {
        if (typeof pokemon === 'string') {
            return App.game.party.getPokemonByName(pokemon).shiny;
        }

        return pokemon.category() === this.selectedValue();
    }
}
