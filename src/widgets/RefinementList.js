import { refinementList } from 'instantsearch.js/es/widgets';

  const RefinementList = (containerName = '', attributeName = '') => {
    return refinementList({
      container: `#${containerName}`,
      attribute: `${attributeName}`,
      templates: {
          header: `${attributeName}`
      },
      searchable: true,
      searchablePlaceholder: `Search ${attributeName}`,
      sortBy: ['name:asc'],
      limit: 3,
      showMore: true,
    })
  }

export default RefinementList;