import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {iconSend} from '../assets/images';

export default function InputSend({onSend, ...props}) {
  return (
    <View>
      <View style={styles.contentFooter}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your message here"
          placeholderTextColor={'grey'}
          {...props}
        />
        <TouchableOpacity onPress={onSend} activeOpacity={0.9}>
          <View style={styles.containerIconSend}>
            <Image style={styles.iconSend} source={iconSend} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#B9B9B9',
  },
  textInput: {
    flex: 1,
    height: 55,
    paddingHorizontal: 15,
  },
  containerIconSend: {
    backgroundColor: '#2c8aaa',
    width: 70,
    alignItems: 'center',
  },
  iconSend: {
    height: 55,
    width: 55,
  },
});
