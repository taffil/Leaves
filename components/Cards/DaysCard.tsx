import { View } from "react-native";
import React from "react";
import Text20 from "../Text/Text20";
import Text128 from "../Text/Text128";

const DaysCard = ({
  title,
  value,
  classNames,
  titleClassNames,
  valueClassNames,
}: {
  title: string;
  value: string;
  classNames?: string;
  titleClassNames?: string;
  valueClassNames?: string;
}) => {
  return (
    <View
      className={`bg-white dark:bg-zinc-700 rounded-lg items-center justify-center p-4 border border-gray-200 dark:border-zinc-600 ${classNames}`}
    >
      <Text20 className={`font-productSansBold my-2 ${titleClassNames}`}>
        {title}
      </Text20>
      <Text128 className={`font-productSansBold my-2 ${valueClassNames}`}>
        {value}
      </Text128>
    </View>
  );
};

export default DaysCard;
