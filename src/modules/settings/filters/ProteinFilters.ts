import Filter from './Filter';
import SearchFilter from './SearchFilter';
import TypeFilter from './TypeFilter';
import RegionFilter from './RegionFilter';

const ProteinFilters: Record<string, Filter<RegExp | number>> = {
    search: new SearchFilter(
        'Search',
        ko.observable(new RegExp('', 'i')),
    ),
    type: new TypeFilter(
        'Type',
        ko.observable(-2).extend({ numeric: 0 }),
        'proteinTypeFilter',
    ),
    region: new RegionFilter(
        'Region',
        ko.observable(-2).extend({ numeric: 0 }),
        'proteinRegionFilter',
    ),
};

export default ProteinFilters;
