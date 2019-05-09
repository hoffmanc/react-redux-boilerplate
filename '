export const CHANGE_DOC_SET = 'boilerplate/Documents/CHANGE_DOC_SET'
export const FETCHED_DOCUMENT_SETS = 'boilerplate/Documents/FETCHED_DOCUMENT_SETS'
export const FETCHED_DOCUMENTS = 'boilerplate/Documents/FETCHED_DOCUMENTS'

import { fromJS } from 'immutable'
import { createSelector } from 'reselect'

export const selectDoc = (state) => state.get('doc')

export const makeSelectDocuments = () => createSelector(selectDoc, (docState) => docState.get('documents'))
export const makeSelectDocumentSets = () => createSelector(selectDoc, (docState) => docState.get('documentSets'))
export const makeSelectSelectedDocumentSet = () => createSelector(selectDoc, (docState) => docState.get('selectedDocumentSet'))

export default function docReducer(state = fromJS({}), {type, docSet, docSets, docs}) {
  switch (type) {
    case CHANGE_DOC_SET:
      return state.set('selectedDocSet', docSet)
    case FETCHED_DOCUMENTS:
      return state.set('documents', docs)
    case FETCHED_DOCUMENT_SETS:
      return state.set('documentSets', docSets)
    default:
      return state
  }
}

