import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

import reducer, {
  CHANGE_DOC_SET ,
  makeSelectDocuments,
  makeSelectDocumentSets,
  makeSelectSelectedDocumentSet,
} from './cars'
import saga from './saga'
import Documents from './Documents'

const mapDispatchToProps = (dispatch) => ({
  onChangeDocumentSet: (docSet) => { (evt) => { dispatch({ type: CHANGE_DOC_SET, docSet }) }},
})

const mapStateToProps = createStructuredSelector({
  documents: makeSelectDocuments(),
  docSets: makeSelectDocumentSets(),
  selectedDocumentSet: makeSelectSelectedDocumentSet(),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'doc', reducer })
const withSaga = injectSaga({ key: 'doc', saga })

export default compose(withReducer, withConnect)(Documents)
export { mapDispatchToProps }
