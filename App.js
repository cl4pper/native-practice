import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, updateText] = useState('');
  const [list, handleList] = useState([]);

  function clearInput() {
    updateText('');
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
      <Button
        style={styles.button}
        title="Add item"
        onPress={() => updateList(text)}
      />
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
    padding: 8,
    borderWidth: 1,
    borderColor: '#313131',
    borderRadius: 4,
  },
  button: {
    color: '#FFFFFF',
    backgroundColor: '#3A96F4',
    borderRadius: 4,
  },
});
