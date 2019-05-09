import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/cars';

import reducer, {
  makeSelectUsername,
  CHANGE_USERNAME,
} from './cars';

//import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch({ type: CHANGE_USERNAME, name: evt.target.value }),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
  }
});

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
//const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withConnect)(HomePage);
export { mapDispatchToProps };
