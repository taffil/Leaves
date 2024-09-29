import React, { useEffect, useState } from "react";
import { Alert, Dimensions, View, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import User from "./User";
import Button from "../../components/Buttons/Button";
import LeaveRequestModal from "./LeaveRequestModal";
import { LeaveRequest } from "../../types";
import ScreenModal from "../../components/Modals/ScreenModal";
import { RootState } from "../../services/store";
import { useSelector } from "react-redux";

const LeaveRequests = ({ navigation }: { navigation: any }) => {
  const user = useSelector((state: RootState) => state.auth);
  const layout = useWindowDimensions();
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);

  const [leaveRequestModal, setLeaveRequestModal] = useState<{
    visible: boolean;
    dataIndex: number | null;
  }>({
    visible: false,
    dataIndex: null,
  });
  const [data, setData] = useState<LeaveRequest[]>([
    // {
    //   key: 1,
    //   name: "Halil Sadiku",
    //   leaveType: "Annual Leave",
    //   decision: "Approved",
    //   period: "11.11.2024 - 20.11.2024",
    //   days: "8",
    //   requestedOn: "07.09.2024",
    //   fromDate: new Date(),
    //   toDate: new Date(),
    //   description: "On Vacation",
    // },
    {
      key: 2,
      name: "Tafil Osmani",
      leaveType: "Sick Leave",
      decision: "Approved",
      period: "07.05.2024 - 10.05.2024",
      days: "4",
      requestedOn: "10.05.2024",
      fromDate: new Date(),
      toDate: new Date(),
      description: "Sick",
    },
    {
      key: 3,
      name: "Filan Fisteku",
      leaveType: "Annual Leave",
      decision: "Approved",
      period: "23.12.2024 - 03.01.2025",
      days: "10",
      requestedOn: "01.10.2024",
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

  const onApprove = (index: number) => {
    Alert.alert(
      "Approve Leave Request?",
      "Are you sure you want to approve this leave request?",
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

  const onRemove = (index: number) => {
    Alert.alert(
      "Reject Leave Request?",
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

  const renderScene = ({ route }: { route: any }) => {
    switch (route.key) {
      case "first":
        return (
          <User
            admin={user.admin}
            data={data}
            onApproveCallback={onApprove}
            onEditCallback={onEdit}
            onRemoveCallback={onRemove}
          />
        );
      case "second":
        return (
          <User
            admin={user.admin}
            data={data}
            onApproveCallback={onApprove}
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
        width: 100,
        left: (Dimensions.get("window").width / routes.length - 100) / 2,
        backgroundColor: "#4f46e5",
      }}
      pressColor="transparent"
      labelStyle={{ fontFamily: "ProductSans-bold" }}
      activeColor={darkMode ? "#4f46e5" : "#4f46e5"}
      inactiveColor="#9ca3af"
      className="bg-transparent dark:bg-zinc-800"
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
              type="transparent"
              onPress={() =>
                setLeaveRequestModal({
                  visible: true,
                  dataIndex: null,
                })
              }
            >
              Add new
            </Button>
          </View>
        );
      },
    });
  }, []);

  return (
    <>
      {user.admin ? (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      ) : (
        <User
          admin={user.admin}
          data={data}
          onApproveCallback={onApprove}
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
          admin={user.admin}
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
