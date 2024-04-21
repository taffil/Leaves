import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
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
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          marginTop: 20,
          gap: 15,
        }}
        keyExtractor={(item) => item.key}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={[
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
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <MemberCard
              name={item.name}
              role={item.role}
              requiredDays={item.requiredDays}
              usedDays={item.usedDays}
            />
          </TouchableOpacity>
        )}
      />
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
