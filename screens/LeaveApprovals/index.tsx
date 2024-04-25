import React, { useState } from "react";
import { View, ScrollView, RefreshControl, StyleSheet } from "react-native";
import LeaveRequestCard from "../../components/Cards/LeaveRequestCard";
import Input from "../../components/Inputs/Input";
import DropdownInput from "../../components/Inputs/Dropdown";
import { LeaveRequest } from "../../types";
import { useColorScheme } from "nativewind";

const LeaveApprovals = () => {
  const { colorScheme } = useColorScheme();

  const [leaveType, setLeaveType] = useState<string>("All");
  const [date, setDate] = useState<string>("2024");
  const [data] = useState<LeaveRequest[]>([
    {
      key: 1,
      name: "John Doe",
      leaveType: "Annual Leave",
      decision: "Approved",
      period: "10.01.2024 - 20.01.2024",
      days: "10",
      requestedOn: "01.01.2024",
      fromDate: new Date(),
      toDate: new Date(),
      description: "On Vacation",
    },
    {
      key: 2,
      name: "John Doe",
      leaveType: "Sick Leave",
      decision: "Approved",
      period: "10.01.2024 - 20.01.2024",
      days: "10",
      requestedOn: "01.01.2024",
      fromDate: new Date(),
      toDate: new Date(),
      description: "Sick",
    },
    {
      key: 3,
      name: "John Doe",
      leaveType: "Annual Leave",
      decision: "Approved",
      period: "10.01.2024 - 20.01.2024",
      days: "10",
      requestedOn: "01.01.2024",
      fromDate: new Date(),
      toDate: new Date(),
      description: "On Vacation",
    },
  ]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          tintColor={colorScheme === "dark" ? "#f9fafb" : "#0F172A"}
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
      {data.map((item) => (
        <View className="mt-4" key={item.key}>
          <LeaveRequestCard {...item} showButtons={false} />
        </View>
      ))}
    </ScrollView>
  );
};

export default LeaveApprovals;

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
