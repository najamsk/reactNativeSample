import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Render from './Render';  // eslint-disable-line import/no-unresolved

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#E7E7E7',
    // padding: 20,
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    paddingBottom: 13,
    paddingTop: 13,
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // marginBottom: 20,
    marginLeft: 3,
    marginRight: 3,
    // marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: '#1F3646',
  },
  lblTitle: {
    fontWeight: '300',
    // paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'stretch',
    // flex: 1,
    // flexDirection: 'row',
  },
  lblDate: {
    fontSize: 15,
    fontWeight: '300',
    // paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'stretch',
    // flex: 1,
    // flexDirection: 'column',
  },
  lblLocation: {
    fontSize: 15,
    fontWeight: '300',
    // color: '#1F3646',
    // paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'stretch',
    // flex: 1,
    // flexDirection: 'column',
  },
  lblFeatured: {
    fontSize: 15,
    fontWeight: '300',
    // paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'stretch',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
});

class TaskRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {};
  }

  render() {
    return Render.bind(this)(styles);
  }

}

TaskRow.propTypes = {
  event: React.PropTypes.shape({
    Title: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;
