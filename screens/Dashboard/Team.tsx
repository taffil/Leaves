import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MemberCard from "../../components/Cards/MemberCard";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

const Team = () => {
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          tintColor={darkMode ? "#f9fafb" : "#0F172A"}
        />
      }
      contentContainerStyle={styles.container}
      className="dark:bg-zinc-800"
    >
      <View
        className="flex-row gap-y-4 flex-wrap justify-between"
        style={{
          marginTop: 0,
        }}
      >
        {[
          {
            key: "1",
            name: "Halil Sadiku",
            role: "Software Engineer",
            allDays: "20",
            availableDays: "15",
            requiredDays: "20",
            usedDays: "5",
          },
          {
            key: "2",
            name: "Tafil Osmani",
            role: "Software Engineer",
            allDays: "20",
            availableDays: "10",
            requiredDays: "20",
            usedDays: "5",
          },
          {
            key: "3",
            name: "Filan Fisteku",
            role: "Software Engineer",
            allDays: "20",
            availableDays: "10",
            requiredDays: "20",
            usedDays: "10",
          },
        ].map((item) => (
          <TouchableOpacity key={item.key} className="w-[47.5%]">
            <MemberCard {...item} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
