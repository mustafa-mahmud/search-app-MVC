import search from './view.js';
import { fetchSearchData, processSearchDataArray } from './model.js';

const showClearBtn = () => {
  const value = search.processInputValue();

  if (!value) return search.hideClear();
  search.showClear();
};

const hideClearBtn = () => {
  search.emptyInputValue();
  search.hideClear();
  search.msgHide();
};

const submitValueSearch = async () => {
  const value = search.processInputValue();

  if (!value) return;
  const data = await fetchSearchData(value);
  if (data.hasOwnProperty('query')) {
    search.blankResultContainer();
    search.renderSearch(processSearchDataArray(data.query.pages));
    search.msgShow();
    search.renderMsg('20 results found...');
  }
  if (!data.hasOwnProperty('query')) {
    search.msgShow();
    search.renderMsg('No search found, please try another one.');
    search.blankResultContainer();
  }
};

const init = () => {
  search.clearEvent(showClearBtn);
  search.clickOnClearEvent(hideClearBtn);
  search.formSubmitEvent(submitValueSearch);
};

//////////////////
////////////////////
init();
