import { Text, TextProps } from "react-native";
import React from "react";

const Text14 = (props: TextProps) => {
  return (
    <Text
      className={`text-sm font-productSansRegular text-gray-600 dark:text-gray-50`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default Text14;
