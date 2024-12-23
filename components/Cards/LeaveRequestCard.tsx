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
    <View className="flex-column rounded-lg bg-gray-50 dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600">
      <View className="flex-row justify-between px-4 py-2.5 bg-gray-300 dark:bg-zinc-800 rounded-t-lg">
        <Text16>Employee:</Text16>
        <Text16 className="font-productSansMedium">{name}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="">Leave Type:</Text16>
        <Text16 className="font-productSansMedium">{leaveType}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="">Period:</Text16>
        <Text16 className="font-productSansMedium">{period}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="">Days:</Text16>
        <Text16 className="font-productSansMedium">{days}</Text16>
      </View>
      <View className="flex-row justify-between px-4 py-2.5">
        <Text16 className="">Requested On:</Text16>
        <Text16 className="font-productSansMedium">{requestedOn}</Text16>
      </View>
      {!admin && (
        <View className="flex-row justify-between px-4 py-2.5">
          <Text16 className="">Status</Text16>
          <Text16 className="font-productSansMedium">Pending</Text16>
        </View>
      )}
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
