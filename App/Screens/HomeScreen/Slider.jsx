import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";

const Slider = () => {
  const [slider, setSlider] = useState();
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      console.log("resp", resp.sliders);
      setSlider(resp?.sliders);
    });
  };
  return (
    <View>
      <Text style={styles.heading}>Services On Offer</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
    paddingLeft: 20,
  },
  sliderImage: {
    width: 270,
    height: 150,
    paddingLeft: 20,
    borderRadius: 20,
    objectFit: "contain",
  },
});
