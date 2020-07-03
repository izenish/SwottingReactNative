import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";


const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}> HomeScreen </Text>
      <Button
        type="outline"
        title="Go to the Components"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        type="clear"
        title="Go to the Images"
        onPress={() => props.navigation.navigate("imgg")}
      />
      <Button
        title="Image Assignment"
        onPress={() => props.navigation.navigate("imgassignment")}
      />
      <Button
        title="State Example"
        onPress={() => props.navigation.navigate("count")}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AssignmentTest")}
      >
        <Text>Go to The first Assignment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
