import './index.html';
import './index.css';

import { search } from './algolia/instantSearch';

import { Hits, SearchBox, RefinementList, Pagination, ClearRefinements, Configure } from './widgets';
import { EMPTY_QUERY_MESSAGE, hitCardTemplate } from './widgets/constants';

search.addWidgets([
    SearchBox,
    Hits('hits', hitCardTemplate, EMPTY_QUERY_MESSAGE),
    ClearRefinements,
    RefinementList('category', 'category'),
    RefinementList('author', 'author'),
    Pagination,
    Configure({
        hitsPerPage: 10,
    })
]);

search.start();