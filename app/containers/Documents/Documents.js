import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const Documents = ({
  loading,
  error,
  docSets,
  selectedDocumentSet,
  documents,
  onChangeDocumentSet,
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
          { docSets && docSets.map((docSet) => (
            <ListItem
              button
              selected={selectedDocumentSets[docSet]}
              onClick={onChangeDocumentSet(docSet)}
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
)

Documents.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  docSets: PropTypes.array,
  selectedDocumentSets: PropTypes.object,
  documents: PropTypes.array,
  onChangeDocumentSet: PropTypes.func,
}

export default withStyles(styles)(Documents)
