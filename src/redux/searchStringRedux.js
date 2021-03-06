


// selectors
export const getSearchString = ({searchString})=> searchString; //state => state.searchString; //
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards,searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
  

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`; // app/searchString/SEARCH_STRING;
// actions types
export const CHANGE_STRING = createActionName('CHANGE_STRING');
// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE_STRING});
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_STRING:
      return statePart, action.payload;
    default:
      return statePart ;
  }
}



