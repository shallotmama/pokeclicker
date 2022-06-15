/* eslint-disable class-methods-use-this */
import { ObservableArray } from "knockout";
import PokemonCategories from "../../party/Category";
import { PartyPokemon } from "../../party/PartyPokemon";
import { PokemonNameType } from "../../pokemons/PokemonNameType";
import { DisplayOption } from "./Filter";
import SaveableFilter from "./SaveableFilter";

export default class CategoryFilter extends SaveableFilter<number> {
    public getDisplayOptions(): ObservableArray<DisplayOption> {
        return ko.observableArray([{ text: 'All', value: -1}, ...PokemonCategories.categories().map((k, i) => ({ text: k.name(), value: i, color: k.color }))]);
    }

    public include(pokemon: PartyPokemon | PokemonNameType) {
        if (typeof pokemon === 'string') {
            return App.game.party.getPokemonByName(pokemon).category === this.selectedValue();
        }

        return pokemon.category() === this.selectedValue();
    }
}
