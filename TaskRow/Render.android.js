import React from 'react';

import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';

export default function render(baseStyle) {

  const localStyle = StyleSheet.create({
    doneButton: {
      borderRadius: 5,
      padding: 5,
    },

  });


  return (
    // console.log(this.props.event);
    <View style={[baseStyle.container, localStyle.row]}>
      <Text style={baseStyle.label}>{this.props.event.Title}</Text>
    </View>
  );
}
