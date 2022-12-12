import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "hello", key: 1 },
    { text: "hello", key: 2 },
    { text: "hello", key: 3 },
    { text: "hello", key: 4 },
    { text: "hello", key: 5 },
    { text: "hello", key: 6 },
  ]);
  const addHandler = (text) => {
    if (text.length > 0) {
      setListOfItems((list) => {
        return [{ text: text, key: Date.now() }, ...list];
      });
    }
  };
  const deleteHandler = (key) => {
    setListOfItems((list) => list.filter((item) => item.key != key));
  };
  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <FlatList
        data={listOfItems}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            key={item.key}
            deleteHandler={deleteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
