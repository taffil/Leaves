import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

const Input = ({ ...props }: InputProps) => {
  return (
    <TextInput
      placeholderTextColor={"#94a3b8"}
      style={{ fontSize: 16 }}
      className={`px-2.5 py-3.5 bg-white w-full rounded-xl border border-gray-200 font-productSansRegular text-gray-700`}
      {...props}
    />
  );
};

export default Input;
