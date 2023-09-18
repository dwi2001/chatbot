import React, {useState, useRef} from 'react';
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
const sample = [
  {
    name: 'Boot',
    message: `Hello, please type 'Help' to start the conversation`,
  },
  {
    name: 'Joker',
    message: 'Hi, Boot. Can you here me ?',
  },
  {
    name: 'Joker',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    name: 'Joker',
    message: '?',
  },
  {
    name: 'Boot',
    message: 'Ya',
  },
];
const ChatPage = () => {
  const flatListRef = useRef(null);
  const [Input, setInput] = useState('');
  const [chats, setchats] = useState(sample);
  const [keyItems, setkeyItems] = useState(['AGRONOMI', 'FINANCE']);

  const handleSendMessage = () => {};
  const handleKeywordSelect = (itm, i) => {};

  const renderItem = ({item, index}) => {
    return (
      <ChatItem
        key={index}
        containerStyle={{}}
        loading={false}
        avatarText={item.name.substring(0, 1)}
        avatarImg={''}
        isCustomer={item.name !== 'Boot'}>
        <Text style={{color: '#FFF'}}>{item.message}</Text>
        {index === 4 && (
          <View>
            <Text style={{color: '#FFF'}}>
              {`Hey, I'm Chatbot your personal helper...\n\nIf you need to get help, just type or press on one of this topic:`}
            </Text>
            {keyItems.map((itm, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleKeywordSelect(itm, i)}
                  activeOpacity={0.7}
                  style={styles.options}>
                  <Text style={{color: '#FFF'}}>{itm}</Text>
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
        onChangeText={val => setInput(val)}
        value={Input}
        onSend={handleSendMessage}
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
});
