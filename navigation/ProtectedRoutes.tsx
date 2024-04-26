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
import { Avatar, Icon } from "react-native-paper";
import Button from "../components/Buttons/Button";
import { useColorScheme } from "nativewind";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../services/slices/settingsSlice";
import { logout } from "../services/slices/authSlice";

const drawerItemStyle = {
  drawerActiveBackgroundColor: "#ffffff",
  drawerActiveTintColor: "#0f172a",
  drawerInactiveTintColor: "#ffffff",
  drawerLabelStyle: {
    fontFamily: "ProductSans-bold",
  },
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View className="py-5 items-center">
          {!require("../assets/icon.png") ? (
            <Avatar.Image source={require("../assets/icon.png")} />
          ) : (
            <Avatar.Text label="JD" />
          )}
        </View>
        <DrawerItemList {...props} />
      </View>
      <View className="p-5 pb-10 flex-col gap-y-3">
        <Button
          type="transparent"
          textProps={{ style: { color: "white" } }}
          onPress={() => {
            toggleColorScheme();
            setTimeout(() => dispatch(setDarkMode(colorScheme !== "dark")), 50);
          }}
          icon={
            <Icon
              source={
                colorScheme === "dark" ? "white-balance-sunny" : "weather-night"
              }
              color="white"
              size={20}
            />
          }
        >
          {colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
        <Button
          type="secondary"
          onPress={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const ProtectedRoutes = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colorScheme === "dark" ? "#18181b" : "#0f172a",
        },
        headerTintColor: colorScheme === "dark" ? "#f9fafb" : "#0f172a",
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#18181b" : "#f8fafc",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
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
