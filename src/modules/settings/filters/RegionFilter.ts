/* eslint-disable class-methods-use-this */
import { Region } from "../../GameConstants";
import { PartyPokemon } from "../../party/PartyPokemon";
import SaveableFilter from "./SaveableFilter";
import PokemonHelper from "../../pokemons/PokemonHelper";
import { PokemonNameType } from "../../pokemons/PokemonNameType";
import Filter, { DisplayOption } from "./Filter";
import { ObservableArray } from "knockout";

export default class RegionFilter extends SaveableFilter<number> {
    public getDisplayOptions(): ObservableArray<DisplayOption> {
        return ko.observableArray([{ text: 'All', value: -2 }, ...Filter.enumToDisplayOptions(Region), { text: 'None', value: -1 }]);
    }

    public include(pokemon: PartyPokemon | PokemonNameType): boolean {
        if (typeof pokemon === 'string') {
            return PokemonHelper.calcNativeRegion(pokemon) === this.selectedValue();
        }

        return PokemonHelper.calcNativeRegion(pokemon.name) === this.selectedValue();
    }
}
