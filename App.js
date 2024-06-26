import React, { useState } from 'react';
import { StatusBar, Vibration, Button, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,TouchableHighlight, Alert, TextInput } from 'react-native';

export default function App() {
  const [arr, setArr] = useState(["A", "B", "C"]);
  const [inputText, setInputText] = useState('');

  const onPressLearnMore = () => {
    const newItem = String.fromCharCode(arr.length + 65); // Generating new item dynamically (e.g., D, E, F, ...)
    setArr(prevArr => [...prevArr, newItem]);
  };

  const deleteItem = (index = 0)  => {
    const newArray = [...arr];
    newArray.splice(index, 1);
    setArr(newArray);
  };

  const goalInputHandler = (enteredText) => {
    setInputText(enteredText);
  }

  const addCustomItem = () => {
    if (inputText.trim() !== '') {
      setArr(prevArr => [...prevArr, inputText]);
      setInputText('');
    }
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
          // padding: 25,
          height: 80,
          marginBottom: 10,
        }}
      >
        <Text>To Do</Text>
      </View>
      
      <View style={styles.topBar}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={inputText}
        onEndEditing={addCustomItem}
      />
      
      <TouchableOpacity  style={styles.btnStyle}
        onPress={onPressAdd}
      >
        <Text style={{    color: '#fff',}}>Add Goal</Text>
        </TouchableOpacity>
      
      
        </View> 

      <View
        style={styles.contentListStyle}
      >
        <FlatList style={styles.flatListStyle}
          data={arr}
          contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: "stretch" }}
          renderItem={({ item, index }) => (
            
            
              <View>
                <View
                  style={styles.flatListSubViewStyle}
                >
                  <Image
                    style={styles.stretch}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  />
                  <Text style={styles.title}>{item}</Text>
                  <TouchableOpacity  style={styles.btnStyle}
                   onPress={onPressLearnMore}>
                  <Text style={{    color: '#fff',}}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <TouchableOpacity  style={styles.btnStyle}
        onPress={onPressLearnMore}>
        <Text style={{    color: '#fff',}}>Add Goal</Text>
        </TouchableOpacity>
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
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '85%',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
  },
  topBar: {
    flexDirection: 'row',
    height: 40,
    margin: 40,
    borderRadius: 10
  },
  btnStyle: {
    width: 100,
    padding: 8,
    backgroundColor: '#0a00FF',
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'bottom'
  },
  contentListStyle: {
    flex: 1,
    margin: 15,
    height: 'auto',
  },
  flatListStyle: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  flatListSubViewStyle: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
     
  }
});
