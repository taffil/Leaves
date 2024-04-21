import { Text, TextProps } from "react-native";
import React from "react";

const Text12 = (props: TextProps) => {
  return (
    <Text
      className={`text-xs font-productSansRegular text-gray-600`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default Text12;
