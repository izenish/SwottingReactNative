import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Button } from "react-native";
const CoutnerScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <ScrollView>
      <Button
        title="Increase ++"
        onPress={() => {
          //   counter++;
          //   console.log(counter) ; dont do this lol
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease --"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      <Text style={styles.txt}>Count:{counter}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 100,
  },
});
export default CoutnerScreen;
