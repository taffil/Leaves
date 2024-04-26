import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useColorScheme } from "nativewind";
import Login from "../screens/Auth/Login";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: colorScheme === "dark" ? "#f9fafb" : "#0f172a",
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#18181b" : "#f8fafc",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
