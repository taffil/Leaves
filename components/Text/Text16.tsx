import { Text, TextProps } from "react-native";
import React from "react";

const Text16 = (props: TextProps) => {
  return (
    <Text
      className={`text-base font-productSansRegular text-gray-700`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default Text16;
