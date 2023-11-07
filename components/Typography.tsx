import { View, Text } from "react-native";
import React, { ReactNode } from "react";

export const H1 = ({
  style,
  children,
}: {
  style?: {};
  children: ReactNode;
}) => {
  return (
    <Text
      className={`text-[22px] text-center font-bold text-[rgba(0, 0, 0, 0.9)]`}
      style={style}
    >
      {children}
    </Text>
  );
};

export const H6 = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: {};
}) => {
  return (
    <Text
      className={`text-[15px] leading-[22.5px] text-center font-semibold text-[rgba(0, 0, 0, 0.8)]`}
      style={style}
    >
      {children}
    </Text>
  );
};
