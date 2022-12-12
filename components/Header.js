import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList ,Text} from "react-native";

export default function Header() {

  
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Привіт,створи нагадування</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    padding:30,
    backgroundColor:'gray',
  },
  text:{
    fontSize:20,
    textAlign:"center",
    top:15
  }
});
