import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
// import {paperPlan} from '../assets/images';

export default function InputSend({onSend, loading = false, ...props}) {
  return (
    <View style={styles.contentFooter}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your message here"
        placeholderTextColor={'grey'}
        {...props}
      />
      <TouchableOpacity disabled={loading} onPress={onSend} activeOpacity={0.7}>
        <View style={styles.containerIconSend}>
          {loading ? (
            <ActivityIndicator size={25} color="#FFF" />
          ) : // <Image style={styles.iconSend} source={paperPlan} />
          null}
        </View>
      </TouchableOpacity>
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
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSend: {
    height: 35,
    width: 35,
  },
});
