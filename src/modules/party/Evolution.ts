import EvolutionType from "../enums/EvolutionType";
import { PokemonNameType } from "../pokemons/PokemonNameType"

// Temp fix to get it into modules. Only partially representative of type.
export interface Evolution {
    type: EvolutionType[],
    basePokemon: PokemonNameType,
}
