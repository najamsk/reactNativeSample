import React from 'react';

import {
  Text,
  View,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Switch,
} from 'react-native';

import TaskRow from './TaskRow/Component';
import eventsApi from './api/EventsApi';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
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
  }
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({ dataSource: dataSource });
  }

  renderRow(todo) {

    //
    return (
      // <Text>{todo.task}</Text>
      <TaskRow todo= {todo} onDone={this.props.onDone} />
    );
  }

  render() {
    console.log('doing jsp fetch http://api.jumpstartpakistan.com/api/v1/events/');
    fetch('http://api.jumpstartpakistan.com/api/v1/events/')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
      })
    .catch((error) => {
        console.error(error);
      });


      //eventsApi.getAllEvents();

    return (
      <View style={styles.container}>
        <View style={styles.toggleRow}>
          <Switch value={this.props.filter !== 'pending'} style={styles.switch} onValueChange={this.props.onToggle}/>
          <Text style={styles.toggleText}>Showing {this.props.todos.length} {this.props.filter}</Text>
        </View>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderRow.bind(this)} />

        <TouchableHighlight style={styles.button}
          onPress= {this.props.onAddStarted}>
          <Text style={styles.buttonText}>
            Add one
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

TaskList.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onAddStarted: React.PropTypes.func.isRequired,
  filter: React.PropTypes.string.isRequired,
};

export default TaskList;
