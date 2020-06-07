import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const arrayasfriends = [
    { name: "Friend1" },
    { name: "Friend2" },
    { name: "Friend3" },
    { name: "Friend4" },
    { name: "Friend11" },
    { name: "Friend21" },
    { name: "Friend31" },
    { name: "Friend41" },
  ];
  return (
    <View>
      <Text>List</Text>
      <FlatList
      horizontal={true}
      // horizontal={true} can be just written as just horizontal
      showsHorizontalScrollIndicator={false}
        keyExtractor={(uniqueKey) => uniqueKey.name}
        data={arrayasfriends}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 60,
  },
});
export default ListScreen;
