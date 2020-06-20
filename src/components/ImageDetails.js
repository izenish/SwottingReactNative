import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetails = (props) => {
  console.log(props);
  return (
    <View>
      <Image source={require("../../assets/images/forrest.jpg")} />
      <Text>{props.imageName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetails;
