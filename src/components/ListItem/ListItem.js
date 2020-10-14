import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ item, onPress }) => {

  return (
    <View style={styles.item}>
      <Text style={styles.text} onPress={() => onPress(item.id)}>{item.value}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    width: 240,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: '#EE88BC',
    marginBottom: 4,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
  },
});

export {
  ListItem,
}