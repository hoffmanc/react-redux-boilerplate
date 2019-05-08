import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from 'containers/App/cars';
import { reposLoaded, repoLoadingError } from 'containers/App/cars';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/cars';

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put({ type: LOAD_REPOS_SUCCESS, repos, username })
  } catch (error) {
    yield put({ type: LOAD_REPOS_ERROR, error })
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
}
