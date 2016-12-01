
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
  constructor(props, context) {
      super(props, context);
      this.state = store.getState();
      //once store is changed we need update state so subscribe to store
      store.subscribe(()=>{
        this.setState(store.getState());
      });
  }

  renderScene (route, nav) {
    switch (route.name){
      default:
        return (<TaskList events={this.state.events} />);
    }
  }

configureScene(){
  return Navigator.SceneConfigs.FloatFromBottom;
}
  render() {
    console.log('todoapp render fn');
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
    backgroundColor: '#FEE',
  },
});

export default PluralTodo;

// Exponent.registerRootComponent(PluralTodo);
