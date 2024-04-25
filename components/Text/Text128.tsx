import { Text, TextProps } from "react-native";
import React from "react";

const Text128 = (props: TextProps) => {
  return (
    <Text
      className={`text-9xl font-productSansRegular text-gray-600 dark:text-gray-50`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default Text128;
