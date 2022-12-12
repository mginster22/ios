import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text ,TouchableWithoutFeedback} from "react-native";

export default function ListItem({item,deleteHandler}) {
  return (
    <TouchableWithoutFeedback style={styles.header} onPress={()=>deleteHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text:{
    padding:20,
    borderWidth:2,
    marginTop:20,
    width:'65%',
    textAlign:"center",
    marginLeft:'15%'
  }
});
