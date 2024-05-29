import React, { useState } from "react";
import { Dimensions, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useSelector } from "react-redux";
import Home from "./Home";
import Team from "./Team";

const renderScene = SceneMap({
  first: Home,
  second: Team,
});

const Admin = () => {
  const layout = useWindowDimensions();
  const darkMode = useSelector((state: any) => state.settings.darkMode);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Team" },
  ]);

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
