import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { H1, H6 } from "../components/Typography";
import Button from "../components/Button";

const splashImage = require("../assets/img.png");

const SplashScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View className="flex-1 items-center justify-between bg-[#EEEEEE] pt-10 px-5">
      <View className="h-[50%] justify-center">
        <Image className="w-[187.16px] h-[170px]" source={splashImage} />
      </View>
      <View>
        <View className="mb-1">
          <H1>Get things done with TODO</H1>
        </View>
        <H6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          gravida purus id eu condimentum est diam quam. Condimentum blandit
          diam.
        </H6>
      </View>
      <View className="mb-20">
        <Button pressHandler={() => navigation.navigate("Registration")}>
          Get started
        </Button>
      </View>
    </View>
  );
};

export default SplashScreen;
