import React from 'react';

import {
  Text,
  View,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Switch,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskRow from './TaskRow/Component';
import eventsApi from './api/EventsApi';
import { loadEvents } from './actions/eventActions';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#FEE064',
    flex: 1,
    justifyContent: 'flex-start',

  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  toggleText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 3,
  },
});

class TaskList extends React.Component {
  constructor(props, context) {
    console.log('tasklist contr fn');
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.events),
    };
  }
  componentDidMount() {
    console.log('task list props');
    console.log(this.props);
    this.props.dispatch(loadEvents());
  //  this.props.dispatch(loadEvents());
  }

  componentWillReceiveProps(nextProps) {
    console.log('eventsList will get props');
    console.log(nextProps.events);
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.events);
    this.setState({ dataSource: dataSource });
  }

  renderRow(event) {
    return (
      // <Text>{todo.task}</Text>
      <TaskRow event={event} />
    );
  }


  render() {
    console.log('eventslist render fn');
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.events}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

TaskList.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  dispatch: React.PropTypes.func.isRequired,

};
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    //actions: bindActionCreators(loadEvents, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(TaskList);
