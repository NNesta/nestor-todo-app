import React, { ReactNode, useState, useEffect } from "react";
import { View, Text } from "react-native";

const Alert = ({
  children,
  type,
  displayDuration = 5000,
}: {
  children: ReactNode;
  type: "error" | "success";
  displayDuration?: number;
}) => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlertVisible(false);
    }, displayDuration);
    return () => clearTimeout(timer);
  }, [displayDuration]);

  return (
    isAlertVisible && (
      <View
        className={`w-full py-2 flex justify-center items-center rounded-lg ${
          type === "error" && "bg-red-300"
        } ${type === "success" && "bg-green-300"}`}
      >
        <Text className={`text-white`}>{children}</Text>
      </View>
    )
  );
};

export default Alert;
