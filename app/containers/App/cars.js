import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const DEFAULT_LOCALE = 'en';

export const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

export const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

export const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

export const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

export const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
