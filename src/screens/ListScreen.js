import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const arrayasfriends = [
    { name: "Friend1" },
    { name: "Friend2" },
    { name: "Friend3" },
    { name: "Friend4" },
  ];
  return (
    <View>
      <Text>List</Text>
      <FlatList
        data={arrayasfriends}
        renderItem={({item})=> {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ListScreen;
