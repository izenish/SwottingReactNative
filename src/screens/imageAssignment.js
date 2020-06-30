import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import ImageDetail from "../components/ImageDetail";

const Assignment = () => {
  return (
    <ScrollView>
      <ImageDetail
        imageName="❤💓"
        imagetoshow={require("../../assets/images/3.jpg")}
        score="Score:98"
      />
      <ImageDetail
        imageName="💛"
        imagetoshow={require("../../assets/images/4.jpg")}
        score="Score:99"
      />
      <ImageDetail
        imageName="💗💖"
        imagetoshow={require("../../assets/images/5.jpg")}
        score="Score:97"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default Assignment;
