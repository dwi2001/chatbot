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
  // {
  //   name: 'Joker',
  //   message: 'Hi, Boot. Can you here me ?',
  // },
  // {
  //   name: 'Joker',
  //   message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  // },
  // {
  //   name: 'Joker',
  //   message: '?',
  // },
  // {
  //   name: 'Boot',
  //   message: 'Ya',
  // },
];
const ChatPage = () => {
  const flatListRef = useRef(null);
  const [Input, setInput] = useState('');
  const [chats, setchats] = useState(sample);
  const [keyItems, setkeyItems] = useState(['AGRONOMI', 'FINANCE']);
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

      const foundDepart = bootData.find(
        item =>
          item['departement'].toLowerCase() ===
          lastObject.message.toLowerCase(),
      );

      // Object item from "list chats" will be display in to list ui
      let newBootRespon = {};

      if (lastObject.message.toLowerCase() === 'help') {
        newBootRespon = {
          name: 'Boot',
          message: 'hallo',
          chatType: 'array',
          keyword: ['AGRONOMI', 'FINANCE'],
        };
      } else if (!Func.isObjEmpty(foundDepart)) {
        newBootRespon = {
          name: 'Boot',
          message: 'hallo',
          chatType: 'array',
          keyword: foundDepart?.keyword,
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
            {item?.keyword.map((key, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleUserSelectKeyword(key, i)}
                  activeOpacity={0.7}
                  style={styles.options}>
                  <Text style={styles.messageColor}>
                    {key?.departement || key?.keywordName || key}
                  </Text>
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
