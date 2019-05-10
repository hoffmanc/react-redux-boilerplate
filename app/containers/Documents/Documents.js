import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import DocumentSetIcon from 'components/DocumentSetIcon/index'
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const Documents = ({
  loading,
  error,
  docSets,
  selectedDocumentSet,
  documents,
  onChangeDocumentSet,
  classes,
}) => (
  <article>
    <Helmet>
      <title>Document Sets / Documents</title>
      <meta name="description" content="Document set and document listing" />
    </Helmet>
    <div className="home-page">
      <section className="centered">
        <h2>Document Sets / Courses</h2>
        <p>
          A listing of document sets - select one to show its documents/cases.
        </p>
      </section>
      <section>
        <List component="nav">
          { docSets && docSets.map((docSet) => {
            const selected = docSet === selectedDocumentSet
            return (
              <Fragment>
                <ListItem
                  key={`doc-set-${docSet.id}`}
                  button
                  selected={selected}
                  onClick={onChangeDocumentSet(docSet)}
                >
                  <ListItemIcon>
                    <DocumentSetIcon docSet={docSet} />
                  </ListItemIcon>
                  <ListItemText primary={docSet.name} secondary={docSet.description} />
                  { selected ? <ExpandLess /> : <ExpandMore /> }
                </ListItem>
                { selected && documents && (
                  <Collapse in timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      { documents.map((doc) => (
                        <ListItem key={`doc-${doc.id}`} button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText inset primary={doc.title} secondary={doc.description} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            )
          })}
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
