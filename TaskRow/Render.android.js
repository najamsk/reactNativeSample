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
    featuredRow: {
      // backgroundColor: '#5DD6DE',
      backgroundColor: '#EE5F5B',
      // color: '#FEE064',
    },
    featuredLabel: {
      // backgroundColor: '#5DD6DE',
      // backgroundColor: '#EE5F5B',
      color: '#FEE064',
    },

  });


  return (
    // console.log(this.props.event);
    <View style={[baseStyle.container, localStyle.row, (this.props.event.isFeatured) ? localStyle.featuredRow : '']}>
      <Text style={[baseStyle.label, baseStyle.lblTitle, (this.props.event.isFeatured) ? localStyle.featuredLabel : '']}>{this.props.event.Title}</Text>
      <Text style={[baseStyle.label, baseStyle.lblDate, (this.props.event.isFeatured) ? localStyle.featuredLabel : '']}>{this.props.event.Date}</Text>
      <Text style={[baseStyle.label, baseStyle.lblLocation, (this.props.event.isFeatured) ? localStyle.featuredLabel : '']}>{this.props.event.Location}</Text>
    </View>
  );
}
