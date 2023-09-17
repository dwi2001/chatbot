import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {DotIndicator} from 'react-native-indicators';

const ChatItem = ({
  containerStyle,
  cardStyle,
  children,
  loading = false,
  logo,
  isUser,
}) => {
  const windowDimensions = useWindowDimensions();
  const [widthDimension, setWidthDimension] = useState(windowDimensions.width);

  const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setWidthDimension(width);
  };

  const styled = {
    itemMessage: [
      styles.cardMessage,
      cardStyle,
      isUser ? styles.cardMessageUser : {},
    ],
    iconuserBg: [
      styles.user,
      isUser
        ? {
            backgroundColor: 'grey',
          }
        : {
            backgroundColor: 'black',
          },
    ],
  };

  return (
    <View style={[styles.card, containerStyle]}>
      <View
        style={[
          isUser
            ? {
                flexDirection: 'row-reverse',
                marginVertical: 10,
              }
            : {
                flexDirection: 'row',
                marginVertical: 10,
              },
        ]}>
        <View style={styled.iconuserBg}>
          <Text style={styles.iconUser}>{logo}</Text>
        </View>
        <View
          style={[
            isUser
              ? {
                  flexDirection: 'row-reverse',
                  maxWidth: '76%',
                }
              : {
                  flexDirection: 'row',
                  maxWidth: '76%',
                },
          ]}>
          <View onLayout={onLayout} style={styled.itemMessage}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    marginVertical: 5,
  },
  cardMessage: {
    backgroundColor: '#ed7d31',
    padding: 10,
    borderRadius: 20,
    minWidth: '20%',
    borderTopLeftRadius: 0,
  },
  cardMessageUser: {
    backgroundColor: '#4473c5',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
  },
  user: {
    marginHorizontal: 15,
    backgroundColor: 'red',
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotLoading: {
    height: 15,
    width: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default ChatItem;
