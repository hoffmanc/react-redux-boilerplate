import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import saga from './saga';
import Documents from './Documents';

const mapDispatchToProps = (dispatch) => ({
  onChangeDocumentSet: (evt) => dispatch({ type: CHANGE_DOC_SET, name: evt.target.value }),
});

const mapStateToProps = createStructuredSelector({
  documents: makeSelectDocuments(),
  document_sets: makeSelectDocumentSets(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
//const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withConnect)(Documents);
export { mapDispatchToProps };
