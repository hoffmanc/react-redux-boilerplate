const documentSetsURL = 'http://testing.lvh.me:3000/api/v2/document_sets'
const documentsURL = ({docSet}) => `http://testing.lvh.me:3000/api/v2/document_sets/${docSet.id}/documents`

import { call, put, select, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCHED_DOCUMENT_SETS,
  CHANGE_DOC_SET,
  FETCHED_DOCUMENTS,
  makeSelectSelectedDocumentSet,
} from './cars'

function* fetchDocumentSets() {
  const response = yield call(() => axios.get(documentSetsURL))

  yield put({ type: FETCHED_DOCUMENT_SETS, docSets: response.data })
}

function* fetchDocuments() {
  const docSet = yield select(makeSelectSelectedDocumentSet())
  const response = yield call(() => axios.get(documentsURL({docSet})))

  yield put({ type: FETCHED_DOCUMENTS, docs: response.data })
}

export default function* saga() {
  yield call(fetchDocumentSets)
  yield takeLatest(CHANGE_DOC_SET, fetchDocuments)
}
