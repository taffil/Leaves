import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import User from "./User";
import Button from "../../components/Buttons/Button";
import Text16 from "../../components/Text/Text16";
import DropdownInput from "../../components/Inputs/Dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../../components/Inputs/Input";

const LeaveRequests = ({ navigation }: { navigation: any }) => {
  let admin = true;
  const [leaveType, setLeaveType] = useState<string>("Annual Leave");
  const [leaveRequestModal, setLeaveRequestModal] = useState<boolean>(false);

  const [data, setData] = useState<any[]>([
    {
      key: "1",
      name: "John Doe",
      leaveType: "Annual Leave",
      period: "10.01.2024 - 20.01.2024",
      days: "10",
      requestedOn: "01.01.2024",
    },
    {
      key: "2",
      name: "John Doe",
      leaveType: "Sick Leave",
      period: "10.01.2024 - 20.01.2024",
      days: "10",
      requestedOn: "01.01.2024",
    },
    {
      key: "3",
      name: "John Doe",
      leaveType: "Annual Leave",
      period: "10.01.2024 - 20.01.2024",
      days: "10",
      requestedOn: "01.01.2024",
    },
  ]);

  const layout = useWindowDimensions();

  const renderScene = ({ route }: { route: any }) => {
    switch (route.key) {
      case "first":
        return (
          <User
            admin={admin}
            data={data}
            onEditCallback={() => setLeaveRequestModal(true)}
          />
        );
      case "second":
        return (
          <User
            admin={admin}
            data={data}
            onEditCallback={() => setLeaveRequestModal(true)}
          />
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "transparent",
        borderRadius: 10,
        padding: 1.5,
      }}
      labelStyle={{ color: "red", fontFamily: "ProductSans-bold" }}
      activeColor="#0f172a"
      inactiveColor="#9ca3af"
      className="bg-transparent"
    />
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Team" },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View className="mr-3">
            <Button
              text="Add new"
              type="transparent"
              onPress={() => setLeaveRequestModal(true)}
            />
          </View>
        );
      },
    });
  }, []);

  return (
    <>
      {admin ? (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      ) : (
        <User
          admin={admin}
          data={data}
          onEditCallback={() => setLeaveRequestModal(true)}
        />
      )}
      <Modal visible={leaveRequestModal} animationType="slide">
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View className="flex-1 justify-between pb-10">
              <View>
                <View className="flex-row items-center justify-between bg-gray-50 px-5 py-2.5 pt-14">
                  <Text16 className="text-black font-productSansBold">
                    New Leave Request
                  </Text16>
                  <Button
                    text="Close"
                    type="third"
                    onPress={() => setLeaveRequestModal(false)}
                  />
                </View>
                <View className="p-5 flex-col gap-y-4">
                  <View className="flex-row justify-between items-center">
                    <Text16 className="w-1/4">Leave Type:</Text16>
                    <DropdownInput
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
                  </View>
                  <View className="flex-row items-center">
                    <Text16 className="w-1/4">From Date:</Text16>
                    <DateTimePicker
                      value={new Date()}
                      mode="date"
                      display="default"
                      onChange={(date) => {
                        console.log(date);
                      }}
                    />
                  </View>
                  <View className="flex-row items-center">
                    <Text16 className="w-1/4">To Date:</Text16>
                    <DateTimePicker
                      value={new Date()}
                      mode="date"
                      display="default"
                      onChange={(date) => {
                        console.log(date);
                      }}
                    />
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text16 className="w-1/4">Days:</Text16>
                    <View className="w-3/4 pl-2">
                      <Input keyboardType="numeric" />
                    </View>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text16 className="w-1/4">Description:</Text16>
                    <View className="w-3/4 pl-2">
                      <Input />
                    </View>
                  </View>
                </View>
              </View>
              <View className="px-5">
                <Button type="primary" text="Add" className="px-6 py-3" />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

export default LeaveRequests;
