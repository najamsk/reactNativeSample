
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from './todoStore';


class PluralTodo extends React.Component {
  constructor(props, context){
      super(props, context);
      this.state = store.getState();

      //once store is changed we need update state so subscribe to store
      store.subscribe(()=>{
        this.setState(store.getState());
      });
  }

  onAddStarted(){
    console.log('on add started');
    //alert('on add started');

    this.nav.push({
      name: 'taskform'
    });
  }

  onCancel(){
    this.nav.pop();
  }

  onAdd(task){
    // this.state.todos.push({
    //     task: task
    // });
    // this.setState({todos: this.state.todos});

    store.dispatch({
      type: 'ADD_TODO',
      task: task,
    })

    this.nav.pop();
  }

  onDone(todo){
    //todo.task
    // const filteredTodos =
    // this.state.todos.filter((filterTodo) => {
    //   return filterTodo !== todo
    // });

    // this.setState({todos: filteredTodos});

    store.dispatch({
      type: 'DONE_TODO',
      todo: todo,
    });

  }

  onToggle(){
    store.dispatch({type: 'TOGGLE_STATE'});
  }

  renderScene (route, nav){
    switch (route.name){
      case 'taskform':
        return (<TaskForm
          onCancel={this.onCancel.bind(this)}
          onAdd={this.onAdd.bind(this)}/>);
      default:
        return (<TaskList todos={this.state.filteredTodos}
          onDone={this.onDone.bind(this)}
          filter={this.state.filter}
          onToggle= {this.onToggle.bind(this)}
          onAddStarted= {this.onAddStarted.bind(this)}/>);
    }
  }

configureScene(){
  return Navigator.SceneConfigs.FloatFromBottom;
}
  render() {
    return (
      <Navigator
        configureScene= {this.configureScene}
        initialRoute= {{name: 'tasklist', index: 0}}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene= {this.renderScene.bind(this)}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
});

export default PluralTodo;

// Exponent.registerRootComponent(PluralTodo);
