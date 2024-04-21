import { View } from "react-native";
import React from "react";
import Text16 from "../Text/Text16";
import Button from "../Buttons/Button";

const LeaveRequestCard = ({
  name,
  leaveType,
  period,
  days,
  requestedOn,
  admin,
  onApproveCallback,
  onEditCallback,
  onRemoveCallback,
}: {
  name: string;
  leaveType: string;
  period: string;
  days: string;
  requestedOn: string;
  admin: boolean;
  onApproveCallback: () => void;
  onEditCallback: () => void;
  onRemoveCallback: () => void;
}) => {
  return (
    <View className="flex-column rounded-lg bg-gray-50">
      <View className="flex-row justify-between px-4 py-2.5 flex-1 bg-gray-300 rounded-t-lg">
        <Text16 className="text-black">Employee:</Text16>
        <Text16 className="font-productSansMedium text-black">{name}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="text-black">Leave Type:</Text16>
        <Text16 className="font-productSansMedium text-black">
          {leaveType}
        </Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="text-black">Period:</Text16>
        <Text16 className="font-productSansMedium text-black">{period}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="text-black">Days:</Text16>
        <Text16 className="font-productSansMedium text-black">{days}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="text-black">Requested On:</Text16>
        <Text16 className="font-productSansMedium text-black">
          {requestedOn}
        </Text16>
      </View>
      <View className="flex-row justify-end px-4 py-2.5 rounded-b-lg">
        {admin && (
          <Button
            type="primary"
            text="Approve"
            className="mr-2"
            onPress={onApproveCallback}
          />
        )}
        <Button
          type="secondary"
          text="Edit"
          className="mr-2"
          onPress={onEditCallback}
        />
        <Button type="remove" text="Remove" onPress={onRemoveCallback} />
      </View>
    </View>
  );
};

export default LeaveRequestCard;
