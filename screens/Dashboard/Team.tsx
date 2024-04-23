import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MemberCard from "../../components/Cards/MemberCard";

const Team = () => {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} tintColor={"#0F172A"} />
      }
      contentContainerStyle={styles.container}
    >
      <View className="flex-row gap-y-4 flex-wrap justify-between">
        {[
          {
            key: "1",
            name: "John Doe",
            role: "Software Engineer",
            requiredDays: "27",
            usedDays: "10",
          },
          {
            key: "2",
            name: "John Doe",
            role: "Software Engineer",
            requiredDays: "27",
            usedDays: "10",
          },
          {
            key: "3",
            name: "John Doe",
            role: "Software Engineer",
            requiredDays: "27",
            usedDays: "10",
          },
        ].map((item) => (
          <TouchableOpacity key={item.key}>
            <MemberCard
              name={item.name}
              role={item.role}
              requiredDays={item.requiredDays}
              usedDays={item.usedDays}
            />
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
