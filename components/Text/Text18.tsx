import { Text, TextProps } from "react-native";
import React from "react";

const Text18 = (props: TextProps) => {
  return (
    <Text
      className={`text-lg font-productSansRegular text-gray-700 dark:text-gray-50`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default Text18;
