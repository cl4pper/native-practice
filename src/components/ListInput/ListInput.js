import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

const ListInput = ({ placeholder, leftLabel, rightLabel, leftAction, rightAction }) => {
  const [text, updateText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        onChangeText={(value) => updateText(value)}
        value={text}
      />
      <View style={styles.buttons}>
        <Button
          title={leftLabel}
          onPress={() => leftAction(text)}
        />
        <Button
          color="#ff5c5c"
          title={rightLabel}
          onPress={() => rightAction()}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
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
});

export {
  ListInput,
}