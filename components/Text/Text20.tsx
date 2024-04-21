import { Text, TextProps } from "react-native";
import React from "react";

interface Text20Props extends TextProps {
  children: React.ReactNode;
}

const Text20 = (props: Text20Props) => {
  return (
    <Text
      className={`text-xl font-productSansRegular text-gray-600`}
      {...props}
    >
      {props?.children}
    </Text>
  );
};

export default Text20;
