import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Home from "./Home";
import Team from "./Team";

const renderScene = SceneMap({
  first: Home,
  second: Team,
});

const Admin = () => {
  const layout = useWindowDimensions();

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

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default Admin;
