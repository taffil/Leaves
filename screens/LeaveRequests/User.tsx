import React, { useState } from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  FlatList,
} from "react-native";
import LeaveRequestCard from "../../components/Cards/LeaveRequestCard";
import Input from "../../components/Inputs/Input";
import DropdownInput from "../../components/Inputs/Dropdown";

const User = ({
  admin,
  data,
  onEditCallback,
}: {
  admin: boolean;
  data: any[];
  onEditCallback: (index: number) => void;
  onRemoveCallback?: (index: number) => void;
}) => {
  const [leaveType, setLeaveType] = useState<string>("Annual Leave");
  const [date, setDate] = useState<string>("2024");

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} tintColor={"#0F172A"} />
      }
      contentContainerStyle={styles.container}
    >
      <View className="mt-3">
        <Input placeholder="Search" />
      </View>
      <View className="flex-row items-center gap-x-2 mt-3">
        <DropdownInput
          style={[styles.dropdown, { flexGrow: 3 }]}
          data={[
            { label: "Annual Leave", value: "Annual Leave" },
            { label: "Sick Leave", value: "Sick Leave" },
            { label: "Maternity Leave", value: "Maternity Leave" },
            { label: "Paternity Leave", value: "Paternity Leave" },
            { label: "Unpaid Leave", value: "Unpaid Leave" },
          ]}
          placeholder="Select Leave Type"
          value={leaveType}
          onChange={(item) => {
            setLeaveType(item.value);
          }}
        />
        <DropdownInput
          style={[styles.dropdown, { flexGrow: 1 }]}
          data={[{ label: "2024", value: "2024" }]}
          placeholder="Select Date"
          value={date}
          onChange={(item) => {
            setDate(item.value);
          }}
        />
      </View>
      <FlatList
        numColumns={1}
        contentContainerStyle={{
          marginTop: 20,
          gap: 15,
        }}
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item }) => (
          <LeaveRequestCard
            {...item}
            admin={admin}
            onApproveCallback={() => {}}
            onEditCallback={onEditCallback}
          />
        )}
      />
    </ScrollView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginLeft: 12,
  },
  dropdownContainer: {
    borderRadius: 10,
  },
  dropdownItemContainer: {
    borderRadius: 10,
  },
});
