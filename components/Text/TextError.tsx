import { Text, TextProps } from "react-native";
import React from "react";

const TextError = (props: TextProps) => {
  return (
    <Text
      className={`text-xs font-productSansRegular text-red-500`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default TextError;
