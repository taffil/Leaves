import { View } from "react-native";
import React from "react";
import Text16 from "../Text/Text16";
import Button from "../Buttons/Button";

const LeaveRequestCard = ({
  showButtons = true,
  admin,
  name,
  leaveType,
  period,
  days,
  requestedOn,
  onApproveCallback,
  onEditCallback,
  onRemoveCallback,
}: {
  showButtons?: boolean;
  admin?: boolean;
  name: string;
  leaveType: string;
  period: string;
  days: string;
  requestedOn: string;
  onApproveCallback?: () => void;
  onEditCallback?: () => void;
  onRemoveCallback?: () => void;
}) => {
  return (
    <View className="flex-column rounded-lg bg-gray-50 border border-gray-200">
      <View className="flex-row justify-between px-4 py-2.5 bg-gray-300 rounded-t-lg">
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
      {showButtons ? (
        admin ? (
          <View className="flex-row justify-end px-4 py-2.5 gap-y-2 rounded-b-lg">
            <Button
              type="primary"
              className="mr-2"
              onPress={onApproveCallback}
              mode="contained"
            >
              Approve
            </Button>
            <Button
              type="secondary"
              className="mr-2"
              onPress={onEditCallback}
              mode="contained"
            >
              Edit
            </Button>
            <Button type="remove" onPress={onRemoveCallback} mode="contained">
              Reject
            </Button>
          </View>
        ) : (
          <View className="flex-row flex-wrap justify-end px-4 py-2.5 gap-y-2 rounded-b-lg">
            <Button type="secondary" onPress={onEditCallback}>
              Edit
            </Button>
          </View>
        )
      ) : null}
    </View>
  );
};

export default LeaveRequestCard;
