import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedRoutes from "./navigation/ProtectedRoutes";
import { store, persistor, RootState } from "./services/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { loadFonts } from "./services/loadFonts";
import { ActivityIndicator } from "react-native";
import AuthRoutes from "./navigation/AuthRoutes";
import { useColorScheme } from "nativewind";
import { PersistGate } from "redux-persist/integration/react";
import { setDarkMode } from "./services/slices/settingsSlice";
import { useEffect } from "react";

export default () => {
  const [fontloaded] = loadFonts();
  const { colorScheme } = useColorScheme();

  return fontloaded ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  ) : (
    <ActivityIndicator
      size={"large"}
      color={"#0f127a"}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

const AppNavigator = () => {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDarkMode(false));
  }, []);

  return user?.email ? <ProtectedRoutes /> : <AuthRoutes />;
};
