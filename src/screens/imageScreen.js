import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetails from "../components/ImageDetails";
// Note that components should start with capitalletters
const imageScreen = function () {
  return (
    <View>
      <ImageDetails imageName="Forrest" />
      <ImageDetails imageName="Beach" />
      <ImageDetails imageName="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});
export default imageScreen;
