import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image source={props.imagetoshow} />
      <Text>{props.imageName}</Text>
      <Text>{props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
