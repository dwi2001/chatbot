import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Component/Button';
import Input from '../Component/Input';
import {useNavigation} from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.mainContainer,
        }}>
        <Text style={styles.loginText}>Login</Text>
        <Input
          placeholder={'silahkan masukan nik anda'}
          overwrittenStyle={{paddingHorizontal: 20}}
          value={userName}
          onChangeText={value => setUserName(value)}
        />
        <Button
          title={'Login'}
          onPress={() => navigation.navigate('ChatBot')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontSize: 16,
    marginVertical: 10,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default LoginPage;
