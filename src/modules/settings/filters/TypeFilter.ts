/* eslint-disable class-methods-use-this */
import { ObservableArray } from "knockout";
import PokemonType from "../../enums/PokemonType";
import { PartyPokemon } from "../../party/PartyPokemon";
import { PokemonNameType } from "../../pokemons/PokemonNameType";
import Filter, { DisplayOption } from "./Filter";
import SaveableFilter from "./SaveableFilter";

export default class TypeFilter extends SaveableFilter<number> {
    public getDisplayOptions(): ObservableArray<DisplayOption> {
        return ko.observableArray([{ text: 'All', value: -2 }, ...Filter.enumToDisplayOptions(PokemonType)]);
    }

    public include(pokemon: PartyPokemon | PokemonNameType) {
        if (typeof pokemon === 'string') {
            return pokemonMap[pokemon].type.includes(this.selectedValue());
        }

        return pokemonMap[pokemon.name].type.includes(this.selectedValue());
    }
}
