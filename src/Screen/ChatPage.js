/* eslint-disable dot-notation */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import InputSend from '../Component/InputSend';
import ChatItem from '../Component/ChatItem';
import datas from '../utils/datas';
import Func from '../utils/func';
const sample = [
  {
    chatType: 'text',
    name: 'Boot',
    message: `Hello, please type 'Help' to start the conversation`,
  },
];
const ChatPage = () => {
  const flatListRef = useRef(null);
  const [Input, setInput] = useState('');
  const [chats, setchats] = useState(sample);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleBootAnswer();
  }, [chats]);

  const handleBootAnswer = () => {
    //FUNCTION LOGIC WHEN chatboot RESPON CHAT user
    const lastObject = chats[chats.length - 1]; //Find last index/item from list chats

    //Check if that last message from user
    if (lastObject.name !== 'Boot') {
      //logic here and or call api
      let bootData = datas.chat_data.data;

      //SAMPEL STRUKTUR DATA
      // const data = [
      //   {
      //     subject: 'AGRONOMI',
      //     options: [
      //       {
      //         subject: 'BJR',
      //         options: [{subject: 'Kenapa ?'}],
      //       },
      //       {
      //         subject: 'JANJANG',
      //         options: [],
      //       },
      //       {
      //         subject: 'BRONDOLAN',
      //         options: [],
      //       },
      //     ],
      //   },
      // ];
      const foundDepart = bootData.find(item => {
        item.subject.toLowerCase() === lastObject.message.toLowerCase();
        return item;
      });

      // Object item from "list chats" will be display in to list ui
      let newBootRespon = {};

      if (lastObject.message.toLowerCase() === 'help') {
        newBootRespon = {
          name: 'Boot',
          message: 'hallo',
          chatType: 'array',
          options: ['AGRONOMI', 'FINANCE'],
        };
      } else if (!Func.isObjEmpty(foundDepart)) {
        newBootRespon = {
          name: 'Boot',
          message: 'hallo',
          chatType: 'array',
          options: foundDepart?.options,
        };
      } else {
        newBootRespon = {
          name: 'Boot',
          message: 'hallo',
          chatType: 'text',
        };
      }

      let newChats = [...chats, newBootRespon]; // joining last chat and new chat
      setTimeout(() => {
        setchats(newChats);
      }, 1000);
    }
  };

  const handleUserSendMessage = preskeyValue => {
    //FUNCTION LOGIC WHEN user SEND CHAT

    //FIND USER ACCOUNT
    let customer = 'Mogie';

    //validate first that input from press btn or text input
    let messageInput = typeof preskeyValue === 'string' ? preskeyValue : Input;

    // Object item from "list chats" will be display in to list ui
    let newChatUser = {
      name: customer,
      chatType: 'text',
      message: messageInput,
    };
    let newChats = [...chats, newChatUser]; // joining last chat and new chat
    setchats(newChats);
    setInput('');
  };
  const handleUserSelectKeyword = (itm, i) => {
    let keySelect = itm?.toLowerCase();
    handleChangeText(keySelect); // <= set input with press keyword selection
    handleUserSendMessage(keySelect); // <= call send chat
  };

  const handleChangeText = value => {
    setInput(value);
  };

  const renderItem = ({item, index}) => {
    return (
      <ChatItem
        key={index}
        containerStyle={{}}
        loading={loading}
        avatarText={item?.name?.substring(0, 1)}
        avatarImg={''}
        isCustomer={item?.name !== 'Boot'}>
        {item['chatType'] === 'text' && (
          <Text style={styles.messageColor}>{item?.message}</Text>
        )}
        {item['chatType'] === 'object' && (
          <Text style={styles.messageColor}>{item?.message}</Text>
        )}
        {item['chatType'] === 'array' && (
          <View>
            <Text style={{color: '#FFF'}}>
              {`Hey, I'm Chatbot your personal helper...\n\nIf you need to get help, just type or press on one of this topic:`}
            </Text>
            {item?.options.map((key, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    handleUserSelectKeyword(
                      typeof key === 'object' ? key?.subject : key,
                      i,
                    )
                  }
                  activeOpacity={0.7}
                  style={styles.options}>
                  <Text style={styles.messageColor}>{key?.subject || key}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ChatItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={renderItem}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({animated: true})
        }
      />
      <InputSend
        onChangeText={handleChangeText}
        value={Input}
        onSend={handleUserSendMessage}
      />
    </SafeAreaView>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  options: {
    borderColor: '#FFF',
    borderWidth: 1,
    alignItems: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  messageColor: {
    color: '#FFF',
  },
});
