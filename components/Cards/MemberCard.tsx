import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import Text16 from "../Text/Text16";
import Text14 from "../Text/Text14";

const MemberCard = (props: {
  name: string;
  role: string;
  requiredDays: string;
  usedDays: string;
}) => {
  return (
    <View className="bg-white dark:bg-zinc-700 rounded-lg items-center p-3 border border-gray-200 dark:border-zinc-600">
      <View className="justify-center items-center border-b-2 border-b-gray-300 p-3">
        {!require("../../assets/icon.png") ? (
          <Avatar.Image size={84} source={require("../../assets/icon.png")} />
        ) : (
          <Avatar.Text size={84} label="JD" />
        )}
        <Text16 className="font-productSansMedium mt-2">{props.name}</Text16>
        <Text14 className="">{props.role}</Text14>
      </View>
      <View className="justify-center items-center p-3">
        <Text16 className="text-blue-500">
          All days: {props.requiredDays}
        </Text16>
        <Text16 className="text-green-500">
          Available days: {props.usedDays}
        </Text16>
        <Text16 className="text-red-500">Used days: {props.usedDays}</Text16>
        <Text16 className="text-orange-500">
          Required days: {props.requiredDays}
        </Text16>
      </View>
    </View>
  );
};

export default MemberCard;
