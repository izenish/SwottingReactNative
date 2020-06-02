import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = function () {
  const text =
    "We can also replace the JS variables inside JSX using curly brackets";
  return (
    <View>
      <Text style={styles.textStyle}>
        This is the components screen and just so you know we can define a
        function by using the keywords "=>" or by just using the "function()"
        they both mean the same even if they dont look alike!
      </Text>
      <Text> {text} </Text>
      <Text style={{ fontSize: 15 }}>
        And also the styleSheet.create function thats used below is an Validator
        object meaning its not neccessarily required but usefull to track our
        errors.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
