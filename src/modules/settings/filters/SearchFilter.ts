/* eslint-disable class-methods-use-this */

import { ObservableArray } from "knockout";
import { PartyPokemon } from "../../party/PartyPokemon";
import { PokemonNameType } from "../../pokemons/PokemonNameType";
import Filter, { DisplayOption } from "./Filter";

export default class SearchFilter extends Filter<RegExp> {
    // N/A for searches
    public getDisplayOptions(): ObservableArray<DisplayOption> {
        return ko.observableArray();
    }

    public include(pokemon: PartyPokemon | PokemonNameType): boolean {
        if (typeof pokemon === 'string') {
            return this.selectedValue().test(pokemon);
        }

        return this.selectedValue().test(pokemon.name);
    }
}
