import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {DotIndicator} from 'react-native-indicators';
import {bootLogo} from '../assets/images';

const ChatItem = ({
  containerStyle,
  children,
  loading = false,
  avatarText,
  avatarImg,
  isCustomer,
}) => {
  const styled = {
    containerStyle: [
      containerStyle,
      styles.cardContainer,
      isCustomer ? styles.cardContainerCustomer : {},
    ],
    avatarContainer: [
      styles.avatar,
      isCustomer ? styles.bgAvatarCustomer : styles.bgAvatarBoot,
    ],
    bodyContainer: [
      styles.bodyContainer,
      isCustomer ? styles.cardContainerCustomer : {},
    ],
    messageLayouts: [styles.messages, isCustomer ? styles.messageCustomer : {}],
  };

  return (
    <View style={styled.containerStyle}>
      <View style={styled.avatarContainer}>
        {isCustomer ? (
          <Text style={styles.avatarText}>{avatarText}</Text>
        ) : (
          <Image
            style={styles.avatarImg}
            source={avatarImg ? avatarImg : bootLogo}
          />
        )}
      </View>
      <View style={styled.bodyContainer}>
        <View style={styled.messageLayouts}>
          {loading ? (
            <View style={styles.dotLoading}>
              <DotIndicator color={'#FFF'} count={3} size={6} />
            </View>
          ) : (
            children
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  cardContainerCustomer: {
    flexDirection: 'row-reverse',
  },
  bgAvatarBoot: {
    backgroundColor: 'black',
  },
  bgAvatarCustomer: {
    backgroundColor: 'grey',
  },
  avatar: {
    marginHorizontal: 15,
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImg: {
    marginTop: 10,
    height: '100%',
    width: '100%',
  },
  avatarText: {
    color: '#FFF',
  },

  bodyContainer: {
    maxWidth: '76%',
    flexDirection: 'row',
  },

  messages: {
    backgroundColor: '#ed7d31',
    padding: 10,
    borderRadius: 20,
    minWidth: '20%',
    borderTopLeftRadius: 0,
    alignItems: 'center',
  },
  messageCustomer: {
    backgroundColor: '#4473c5',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
  },

  dotLoading: {
    height: 15,
    width: 15,
    paddingTop: 5,
  },
});

export default ChatItem;
