import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import LeaveApprovals from "../screens/LeaveApprovals";
import LeaveRequests from "../screens/LeaveRequests";
import { Avatar } from "react-native-paper";

const drawerItemStyle = {
  drawerActiveBackgroundColor: "#ffffff",
  drawerActiveTintColor: "#0f172a",
  drawerInactiveTintColor: "#ffffff",
  drawerLabelStyle: {
    fontFamily: "ProductSans-bold",
  },
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="py-5 items-center">
        {!require("../assets/icon.png") ? (
          <Avatar.Image source={require("../assets/icon.png")} />
        ) : (
          <Avatar.Text label="JD" />
        )}
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const ProtectedRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: "#0f172a",
        headerTitleStyle: {
          fontFamily: "ProductSans-bold",
        },
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ ...drawerItemStyle, title: "Dashboard" }}
      />
      <Drawer.Screen
        name="LeaveRequests"
        component={LeaveRequests}
        options={{ ...drawerItemStyle, title: "Leave Requests" }}
      />
      <Drawer.Screen
        name="LeaveApprovals"
        component={LeaveApprovals}
        options={{ ...drawerItemStyle, title: "Leave Approvals" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ ...drawerItemStyle, title: "Profile" }}
      />
    </Drawer.Navigator>
  );
};

export default ProtectedRoutes;
