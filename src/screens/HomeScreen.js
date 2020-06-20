import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}> HomeScreen </Text>
      <Button
        title="Go to the Components"
        onPress={() => props.navigation.navigate("Components")}
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
