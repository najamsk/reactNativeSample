
import React from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';
import {Provider} from 'react-redux';

import TaskList from './TaskList';
// import store from './todoStore';
import configureStore from './store/configureStore';
// import {loadAuthors} from './actions/authorActions';
const store = configureStore();
class PluralTodo extends React.Component {
  constructor(props, context) {
    super(props, context);


    // store.dispatch(loadEvents());
    this.state = store.getState();

    // once store is changed we need update state so subscribe to store
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  renderScene (route, nav) {
    switch (route.name) {
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
      <Provider store={store}>
        <Navigator
          configureScene= {this.configureScene}
          initialRoute= {{name: 'tasklist', index: 0}}
          ref={((nav) => {
            this.nav = nav;
          })}
          renderScene= {this.renderScene.bind(this)}
          />
      </Provider>
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
