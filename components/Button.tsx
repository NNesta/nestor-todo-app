import { Text, Pressable } from "react-native";
import React, { ReactNode } from "react";

const Button = ({
  children,
  pressHandler,
}: {
  children: ReactNode;
  pressHandler: () => void;
}) => {
  return (
    <Pressable
      onPress={pressHandler}
      className="bg-[#62D2C3] rounded-[5px] py-[15px] px-[109px]"
    >
      <Text className="text-center font-bold text-xl">{children}</Text>
    </Pressable>
  );
};

export default Button;
