import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";

const HomeScreen = () => {
  return (
    <View>
      {/* Header */}
      <Header />
      <View style={{ padding: 20 }}>
        {/* Slider */}
        <Slider />
        {/* Categories */}
        <Categories />
      </View>
    </View>
  );
};

export default HomeScreen;
