import { StatusBar } from "expo-status-bar";
import {useState} from 'react'
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({ addHandler }) {
  const [text,setText]=useState('')
  const onChange=(text)=>{
    setText(text)
  }
  return (
    <View style={styles.inputWrap}>
      <TextInput style={styles.text} placeholder="Пиши примітку" onChangeText={onChange}/>
      <Button title="Зробити примітку" onPress={()=>addHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    marginTop: 10,
  },
  text: {
    padding: 10,
    borderBottomWidth: 2,
    width: "60%",
    marginLeft: "16%",
  },
});
