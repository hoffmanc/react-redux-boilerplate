export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const selectHome = (state) => state.get('home');

export const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

// The initial state of the App
const initialState = fromJS({
  username: ''
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;

