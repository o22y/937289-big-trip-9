import {getMenuElement} from './components/site-menu.js';
import {getFiltersElement} from './components/filters.js';
import {getSortElement} from './components/sort.js';
import {getFormElement} from './components/form.js';
import {getCardElement} from './components/card.js';

const renderElement = (name, position, child) => {
  document.querySelector(name).insertAdjacentHTML(position, child);
};

renderElement(`.trip-main__trip-controls`, `afterbegin`, getMenuElement());
renderElement(`.trip-main__trip-controls`, `beforeend`, getFiltersElement());
renderElement(`.trip-events`, `afterbegin`, getSortElement());
renderElement(`.trip-events`, `beforeend`, getFormElement());
renderElement(`.trip-events`, `beforeend`, getCardElement());
