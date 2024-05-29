import React, { useState } from "react";
import { View, ScrollView, RefreshControl, StyleSheet } from "react-native";
import DaysCard from "../../components/Cards/DaysCard";
import DropdownInput from "../../components/Inputs/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

const Home = () => {
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const [leaveType, setLeaveType] = useState<string>("Annual Leave");
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
      className="dark:bg-zinc-800"
    >
      <View className="flex-row gap-x-2 mt-3">
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
      <View className="flex-col mt-3">
        <DaysCard
          title="All Days"
          value="44"
          valueClassNames="text-blue-500"
          classNames="mb-4"
        />
        <DaysCard
          title="Available Days"
          value="27"
          valueClassNames="text-green-500"
          classNames="mb-4"
        />
        <DaysCard
          title="Used Days"
          value="10"
          valueClassNames="text-red-500"
          classNames="mb-4"
        />
        <DaysCard
          title="Required Days"
          value="15"
          valueClassNames="text-orange-500"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontFamily: "ProductSans-bold",
  },
  dropdownContainer: {
    fontFamily: "ProductSans-bold",
    borderRadius: 10,
  },
  dropdownItemContainer: {
    fontFamily: "ProductSans-bold",
    borderRadius: 10,
  },
});
