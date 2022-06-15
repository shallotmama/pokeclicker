import { PokemonNameType } from "./PokemonNameType";
import { Region, MaxIDPerRegion } from '../GameConstants';

export default class PokemonHelper {
    public static calcNativeRegion(pokemonName: PokemonNameType) {
        const pokemon = pokemonMap[pokemonName];
        if (pokemon.nativeRegion !== undefined) {
            return pokemon.nativeRegion;
        }
        const { id } = pokemon;
        const region = MaxIDPerRegion.findIndex((maxRegionID) => maxRegionID >= Math.floor(id));
        return region >= 0 ? region : Region.none;
    }
}
