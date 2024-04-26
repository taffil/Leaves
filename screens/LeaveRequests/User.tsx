import React, { useState } from "react";
import { View, ScrollView, RefreshControl, StyleSheet } from "react-native";
import LeaveRequestCard from "../../components/Cards/LeaveRequestCard";
import Input from "../../components/Inputs/Input";
import DropdownInput from "../../components/Inputs/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

const User = ({
  admin,
  data,
  onEditCallback,
  onRemoveCallback,
}: {
  admin: boolean;
  data: any[];
  onEditCallback: (value: number) => void;
  onRemoveCallback: (value: number) => void;
}) => {
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);

  const [leaveType, setLeaveType] = useState<string>("All");
  const [date, setDate] = useState<string>("2024");

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          tintColor={darkMode ? "#f9fafb" : "#0F172A"}
        />
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      className="dark:bg-zinc-800"
    >
      <View className="mt-3">
        <Input placeholder="Search" />
      </View>
      <View className="flex-row items-center gap-x-2 mt-3">
        <DropdownInput
          style={[{ flexGrow: 3 }]}
          data={[
            { label: "All", value: "All" },
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
          style={[{ flexGrow: 1 }]}
          data={[{ label: "2024", value: "2024" }]}
          placeholder="Select Date"
          value={date}
          onChange={(item) => {
            setDate(item.value);
          }}
        />
      </View>
      {data.map((item, idx) => (
        <View className="mt-4" key={item.key}>
          <LeaveRequestCard
            admin={admin}
            {...item}
            onEditCallback={() => onEditCallback(idx)}
            onRemoveCallback={() => onRemoveCallback(idx)}
          />
        </View>
      ))}
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
