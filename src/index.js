import './index.html';
import './index.css';

import { search } from './algolia/instantSearch';

import { Hits, SearchBox, RefinementList, Pagination, ClearRefinements, Configure } from './widgets';

search.addWidgets([
    SearchBox,
    Hits,
    ClearRefinements,
    RefinementList('category', 'category'),
    RefinementList('author', 'author'),
    Pagination,
    Configure({
        hitsPerPage: 10,
    })
]);

search.start();