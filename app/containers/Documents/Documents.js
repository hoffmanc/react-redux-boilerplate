import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

const Documents = ({
  loading,
  error,
  document_sets,
  documents,
  onChagneDocumentSet,
}) => (
  <article>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="A React.js Boilerplate application homepage" />
    </Helmet>
    <div className="home-page">
      <section className="centered">
        <h2>Start your next react project in seconds</h2>
        <p>
          A minimal <i>React-Redux</i> boilerplate with all the best practices
        </p>
      </section>
      <section>
        <List component="nav">
          { document_sets.map((doc) => (
            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={event => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          ))}
        </List>
      </section>
    </div>
  </article>
    );
  }
}

Documents.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
