import React from 'react';

import {
  Text,
  View,
  ListView,
  StyleSheet,
  Image,
  Animated,
  TouchableHighlight,
} from 'react-native';



export default function render (baseStyle){
  const doneAnimation = new Animated.ValueXY();

  const localStyle = StyleSheet.create({
    doneButton: {
    borderRadius:5,
    padding:5
    },

    row: {
      transform: doneAnimation.getTranslateTransform(),

    }

  });

  function animtedPress(){
    Animated.spring(doneAnimation, {
      tension: 2,
      friction: 3,
      toValue: {
        x: -500,
        y: 0
      }
    }).start(()=>{
      this.onDonePressed();
    });

    // setTimeout(() => {
    //   this.onDonePressed();
    // }, 1000);

  }

  return (
    <Animated.View style={[baseStyle.container, localStyle.row]}>
      <Text style={baseStyle.label}>and: {this.props.todo.task}</Text>
      <TouchableHighlight style={localStyle.doneButton}
        underlayColor="#ddd"
        onPress={animtedPress.bind(this)}>
        <Image source={require('../images/done.png')} />
      </TouchableHighlight>
    </Animated.View>
  );
}
