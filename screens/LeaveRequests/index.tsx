import React, { useEffect, useState } from "react";
import { Alert, View, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import User from "./User";
import Button from "../../components/Buttons/Button";
import LeaveRequestModal from "./LeaveRequestModal";
import { LeaveRequest } from "../../types";
import ScreenModal from "../../components/Modals/ScreenModal";

const LeaveRequests = ({ navigation }: { navigation: any }) => {
  let admin: boolean = true;

  const [leaveRequestModal, setLeaveRequestModal] = useState<{
    visible: boolean;
    dataIndex: number | null;
  }>({
    visible: false,
    dataIndex: null,
  });

  const [data, setData] = useState<LeaveRequest[]>([
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

  const onEdit = (index: number) => {
    setLeaveRequestModal({
      visible: true,
      dataIndex: index,
    });
  };

  const onRemove = (index: number) => {
    Alert.alert(
      "Remove Leave Request?",
      "Are you sure you want to remove this leave request?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () =>
            setData((prev) => {
              return prev.filter((_, itemIndex) => itemIndex !== index);
            }),
        },
      ]
    );
  };

  const layout = useWindowDimensions();

  const renderScene = ({ route }: { route: any }) => {
    switch (route.key) {
      case "first":
        return (
          <User
            admin={admin}
            data={data}
            onEditCallback={onEdit}
            onRemoveCallback={onRemove}
          />
        );
      case "second":
        return (
          <User
            admin={admin}
            data={data}
            onEditCallback={onEdit}
            onRemoveCallback={onRemove}
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
              onPress={() =>
                setLeaveRequestModal({
                  visible: true,
                  dataIndex: null,
                })
              }
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
          onEditCallback={onEdit}
          onRemoveCallback={onRemove}
        />
      )}
      <ScreenModal
        visible={leaveRequestModal.visible}
        title={
          leaveRequestModal.dataIndex !== null
            ? "Edit Leave Request"
            : "New Leave Request"
        }
        onCloseCallback={() =>
          setLeaveRequestModal({
            visible: false,
            dataIndex: null,
          })
        }
      >
        <LeaveRequestModal
          admin={admin}
          index={index}
          setLeaveRequestModal={setLeaveRequestModal}
          leaveRequestModal={leaveRequestModal}
          data={data}
          setData={setData}
        />
      </ScreenModal>
    </>
  );
};

export default LeaveRequests;
