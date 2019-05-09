import { call, put, select, takeLatest } from 'redux-saga/effects'
import { reposLoaded, repoLoadingError } from 'containers/App/cars'

import request from 'utils/request'
import { makeSelectUsername } from 'containers/HomePage/cars'

function* fetchDocumentSets({ itemsURL}) {
  const docSets = yield new Promise((resolve, reject) => {
    axios.get(itemsURL).then((resp) => resp).catch(reject)
  })

  yield put({ type: FETCHED_DOCUMENT_SETS, docSets })
}

export default function* saga() {
  yield call(fetchDocumentSets)
}
