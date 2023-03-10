import './index.html';
import './index.css';

import { search } from './algolia/instantSearch';

import { Hits, SearchBox, RefinementList } from './widgets';

search.addWidgets([
    SearchBox,
    Hits,
    RefinementList,
]);

search.start();