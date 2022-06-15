import { Observable } from "knockout";
import { PokemonNameType } from "../pokemons/PokemonNameType"
import { Evolution } from "./Evolution";

// Temp fix to get it into modules. Only partially representative of type.
export interface PartyPokemon {
    id: number,
    name: PokemonNameType,
    level: Observable<number>,
    breeding: Observable<boolean>,
    shiny: Observable<boolean>,
    category: Observable<number>,
    evolutions: Evolution[],
    baseAttack: number,
    attackBonusPercent: Observable<number>,
    attackBonusAmount: Observable<number>,
    proteinsUsed: Observable<number>,
    exp: Observable<number>,
}
