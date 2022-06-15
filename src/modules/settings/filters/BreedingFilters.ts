import CategoryFilter from './CategoryFilter';
import Filter from './Filter';
import RegionFilter from './RegionFilter';
import SearchFilter from './SearchFilter';
import ShinyFilter from './ShinyFilter';
import TypeFilter from './TypeFilter';

const BreedingFilters: Record<string, Filter<RegExp | number>> = {
    search: new SearchFilter(
        'Search',
        ko.observable(new RegExp('', 'i')),
    ),
    category: new CategoryFilter(
        'Category',
        ko.observable(-1).extend({ numeric: 0 }),
        'breedingCategoryFilter',
        [],
    ),
    shinyStatus: new ShinyFilter(
        'Shiny Status',
        ko.observable(-1).extend({ numeric: 0 }),
        'breedingShinyFilter',
    ),
    type1: new TypeFilter(
        'Type 1',
        ko.observable(-2).extend({ numeric: 0 }),
        'breedingTypeFilter1',
    ),
    type2: new TypeFilter(
        'Type 2',
        ko.observable(-2).extend({ numeric: 0 }),
        'breedingTypeFilter2',
    ),
    region: new RegionFilter(
        'Region',
        ko.observable(-2).extend({ numeric: 0 }),
        'breedingRegionFilter',
    ),
};

export default BreedingFilters;
