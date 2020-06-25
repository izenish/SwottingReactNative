import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  //   console.log(props);
  return (
    <View>
      <Image source={require("../../assets/images/pizza.jpg")} />
      <Text>{props.imageName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
