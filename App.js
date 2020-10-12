import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, updateText] = useState('');
  const [list, handleList] = useState([]);

  function clearInput() {
    updateText('');
  };

  function clearList() {
    handleList([]);
  }

  function addItem(item) {
    let newList = [...list, item];
    handleList(newList) ;
  };

  function updateList(item) {
    addItem(item);
    clearInput();
    Alert.alert('List has been updated.');
  }

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
      <View>
        { list.map((item, index) => <Text key={index}>{item}</Text>) }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#fff',
  },
  inputText: {
    width: 200,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#313131',
    borderRadius: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
