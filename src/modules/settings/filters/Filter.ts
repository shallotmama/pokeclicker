import { Observable, ObservableArray } from 'knockout';
import { PartyPokemon } from '../../party/PartyPokemon';
import { PokemonNameType } from '../../pokemons/PokemonNameType';

export type DisplayOption = {
    [key: string]: any,
    text: string | Observable<string>,
    value: number,
};

export default abstract class Filter<T = any> {
    constructor(public label: string, public selectedValue: Observable<T>) {}

    public static isFilter(u: unknown): u is Filter {
        const uAsFilter = u as Filter;
        return uAsFilter.label && uAsFilter.selectedValue !== undefined && uAsFilter.getDisplayOptions !== undefined;
    }

    protected static enumToDisplayOptions(e: any): DisplayOption[] {
        return Object.keys(e).filter((k) => !Number.isNaN(Number(k)) && e[k] !== 'None').map((k) => ({ text: e[k][0].toUpperCase() + e[k].slice(1).toLowerCase, value: +k }));
    }

    public exclude(pokemon: PartyPokemon | PokemonNameType): boolean {
        return !this.include(pokemon);
    }

    public updateSelectedValue(v: T) {
        this.selectedValue(v);
    }
    public abstract include(pokemon: PartyPokemon | PokemonNameType): boolean;

    public abstract getDisplayOptions(): ObservableArray<DisplayOption>;
}
