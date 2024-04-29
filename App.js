import React, { useState } from 'react';
import { StatusBar, Vibration, Button, StyleSheet, Text, View, FlatList, Image, TouchableHighlight, Alert, TextInput } from 'react-native';

export default function App() {
  const [arr, setArr] = useState(["A", "B", "C"]);

  const onPressLearnMore = () => {
    Vibration.vibrate(); // Triggering vibration effect when the button is clicked
    const newItem = String.fromCharCode(arr.length + 65); // Generating new item dynamically (e.g., D, E, F, ...)
    setArr(prevArr => [...prevArr, newItem]);
  };

  const deleteItem = (index) => {
    const newArray = [...arr];
    newArray.splice(index, 1);
    setArr(newArray);
  };


  const onPressAdd = () => {
    console.log('Button pressed'); // Debugging statement
  Alert.prompt(
    "Enter Name",
    null,
    (name) => {
      if (name) {
        setArr(prevArr => [...prevArr, name]);
      }
    },
    'plain-text',
    '',
    'Done'
  );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 25,
          height: 80,
          marginBottom: 10,
        }}
      >
        <Text>To Do</Text>
      </View>
      
      <View
        style={{
          height: 400,
          marginBottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 20
        }}
      >
        <FlatList
          data={arr}
          renderItem={({ item, index }) => (
            <TouchableHighlight onPress={() => deleteItem(index)}>
              <View style={styles.item}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 70,
                    backgroundColor: "#f729a4",
                    marginBottom: 10,
                    paddingHorizontal: 20
                  }}
                >
                  <Image
                    style={styles.stretch}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  />
                  <Text style={styles.title}>{item}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <Button
        onPress={onPressLearnMore}
        title="Add More"
      />

      <Button
        onPress={onPressAdd}
        title="Add Custom"
      />

     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    marginRight: 15,
    paddingVertical: 20
  },
});
