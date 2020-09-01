import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };
const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      {/* <ImageBackground source={image} style={styles.image}> */}
      <Text style={styles.text}> HomeScreen </Text>
      <Button
        style={styles.textButton}
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
      <Button
        title="Add Color"
        type="outline"
        onPress={() => props.navigation.navigate("addcolor")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("reducer")}>
        <Text>Change RGB using Reducer</Text>
      </TouchableOpacity>
      <Button
        type="outline"
        title="Variable R G B"
        onPress={() => props.navigation.navigate("customBtn")}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate("AssignmentTest")}
      >
        <Text>Go to The first Assignment</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textButton: {
    fontSize: 30,
    color: "red",
  },
  container: {
    flexDirection: "column",
  },
  image: {
    // resizeMode: "cover",
    // justifyContent: "center",
    height: null,
    width: null,
    flex: 1,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
