import { View, Text } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TaskComponent = ({
  completed,
  task,
}: {
  completed: boolean;
  task: string;
}) => {
  console.log({ task });
  return (
    <View className="px-4 my-1">
      <BouncyCheckbox
        size={25}
        fillColor="#56C5B6"
        unfillColor="#FFFFFF"
        text={task}
        iconStyle={{
          borderColor: "blue",
          height: 25,
          width: 25,
          borderRadius: 0,
        }}
        innerIconStyle={{
          borderWidth: 2,
          height: 25,
          width: 25,
          borderRadius: 0,
        }}
        onPress={() => {}}
      />
    </View>
  );
};

export default TaskComponent;
