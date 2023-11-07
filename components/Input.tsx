import { View, Text, TextInput } from "react-native";
import React from "react";
import { H1 } from "./Typography";

const Input = ({
  isSecureTextEntry,
  label,
  placeholder,
  register,
  options,
  name,
  value,
  onChangeText,
}: {
  isSecureTextEntry?: boolean;
  label: string;
  placeholder: string;
  register?: any;
  options?: any;
  name: string;
  value: any;
  onChangeText: any;
}) => {
  return (
    <View className="pt-2.5">
      <Text className="text-[15px] font-semibold">{label}</Text>
      <TextInput
        name={name}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureTextEntry}
        className="rounded-[20px] bg-white placeholder:text-[rgba(0, 0, 0, 0.50)] placeholder:font-semibold py-3 px-4"
        placeholder={placeholder}
        {...(register && { ...register(name, options) })}
      />
    </View>
  );
};

export default Input;
