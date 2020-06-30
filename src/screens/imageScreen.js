import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
// Note that components should start with capitalletters
const imageScreen = function () {
  return (
    <View>
      <ImageDetail imageName="Forrest" imagetoshow={require("../../assets/images/forest.jpg")} />
      <ImageDetail imageName="Beach" imagetoshow={require("../../assets/images/beach.jpg")} />

      {/* <ImageDetail imageSource={require("../../assets/images/beach.jpg")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});
export default imageScreen;
