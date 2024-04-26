import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Auth/Login";
import { View } from "react-native";
import Text18 from "../components/Text/Text18";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => {
            return (
              <View className="items-center pb-2 pt-[60px] bg-gray-50 dark:bg-zinc-900">
                <Text18 className="font-productSansBold text-black dark:text-gray-50">
                  Login
                </Text18>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
