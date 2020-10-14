import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

import { ListItem, ListInput } from './src/components';

export default function App() {
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
      <ListInput
        placeholder="Add item..."
        leftLabel="Add item"
        rightLabel="Clear list"
        leftAction={(value) => updateList(value)}
        rightAction={() => clearList()} />
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
  flatList: {
    paddingHorizontal: 8,
  },
});
