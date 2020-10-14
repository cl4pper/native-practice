import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import { ListItem } from './src/components';

export default function App() {
  const [text, updateText] = useState('');
  const [list, handleList] = useState([]);

  function clearInput() {
    updateText('');
  };

  function clearList() {
    handleList([]);
    Alert.alert('List cleared.');
  };

  function removeItem(selected) {
    handleList(list.filter(item => item.id !== selected));
  };

  function generateItem(value) {
    return {
      id: Math.random().toString(),
      value,
    }
  };

  function addItem(value) {
    let newList = [...list, generateItem(value)];
    handleList(newList);
  };

  function updateList(item) {
    addItem(item);
    // clearInput();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Add something..."
        onChangeText={(value) => updateText(value)}
        value={text}
      />
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          title="Add item"
          onPress={() => updateList(text)}
        />
        <Button
          color="#ff5c5c"
          title="Clear list"
          onPress={() => clearList()}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={list}
        keyExtractor={item => list.indexOf(item)}
        renderItem={(itemData) => (
          <ListItem
            item={itemData.item}
            onPress={() => removeItem(itemData.item.id)} />
          )}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputText: {
    width: 240,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#313131',
    borderRadius: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  flatList: {
    paddingHorizontal: 8,
  },
});
