import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedRoutes from "./navigation/ProtectedRoutes";
import { store } from "./services/store";
import { Provider } from "react-redux";
import { loadFonts } from "./services/loadFonts";
import { ActivityIndicator } from "react-native";
import AuthRoutes from "./navigation/AuthRoutes";

const App = () => {
  const [fontloaded] = loadFonts();
  let user = true;

  return fontloaded ? (
    <Provider store={store}>
      <StatusBar backgroundColor={"#fff"} />
      <NavigationContainer>
        {user ? <ProtectedRoutes /> : <AuthRoutes />}
      </NavigationContainer>
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

export default App;
