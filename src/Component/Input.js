import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// import colors from '@constants/colors'
// import { fonts } from '@constants/fonts';

export default props => (
  <TextInput
    {...props}
    underlineColorAndroid="transparent"
    placeholderTextColor={'grey'}
    style={{
      ...props.style,
      ...Styles.container,
      ...props.overwrittenStyle,
    }}
  />
);

const Styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 14,
    color: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
    padding: 5,
    marginBottom: 10,
  },
});
