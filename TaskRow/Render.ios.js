import React from 'react';

import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import Swipeout from 'react-native-swipeout';

const localStyle = StyleSheet.create({
  row: {
    marginBottom:0,
    marginLeft: 0,
    marginRight:0,
  },
  container: {
    marginBottom:20,
  },
});

export default function render (baseStyle){
  alert(baseStyle);
  console.log(baseStyle);
  const buttons =[
    {
      text: 'Done',
      backgroundColor: '#5A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed.bind(this),
    },
  ];
  return (
    <View style={localStyle.container}>
      <Swipeout backgroundColor="#fff" right={buttons}>
        <View style={[baseStyle.container, localStyle.row]}>
          <Text style={baseStyle.label}>{this.props.todo.task}</Text>

        </View>
      </Swipeout>
    </View>
  );
}
