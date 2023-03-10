import { refinementList } from 'instantsearch.js/es/widgets';

const RefinementList =  refinementList({
    container: '#category',
    attribute: 'category',
    templates: {
        header: 'Category'
    },
    searchable: true,
    searchablePlaceholder: 'Search category',
    sortBy: ['name:asc'],
  })

export default RefinementList;