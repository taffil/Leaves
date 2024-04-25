import { useColorScheme } from "nativewind";
import React from "react";
import { FieldError } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Text12 from "../Text/Text12";
import Text16 from "../Text/Text16";
import Text20 from "../Text/Text20";

interface ExtendedDropdownProps {
  style?: any;
  data: any[];
  placeholder?: string;
  value?: string;
  error?: boolean | undefined | FieldError;
  onChange: (item: any) => void;
  onBlur?: () => void;
}

const DropdownInput = ({
  style,
  data,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}: ExtendedDropdownProps) => {
  const { colorScheme } = useColorScheme();

  return (
    <Dropdown
      style={[
        styles.dropdown,
        {
          flexGrow: 1,
          borderColor: error
            ? "#ef4444"
            : colorScheme === "dark"
            ? "#52525b"
            : "#e5e7eb",
          backgroundColor: colorScheme === "dark" ? "#3f3f46" : "#fff",
        },
        style,
      ]}
      containerStyle={[
        styles.dropdownContainer,
        {
          borderColor: error
            ? "#ef4444"
            : colorScheme === "dark"
            ? "#52525b"
            : "#e5e7eb",
          backgroundColor: colorScheme === "dark" ? "#3f3f46" : "#fff",
        },
      ]}
      itemContainerStyle={[styles.dropdownItemContainer]}
      itemTextStyle={{
        color: colorScheme === "dark" ? "#f9fafb" : "#4b5563",
      }}
      selectedTextStyle={{
        color: colorScheme === "dark" ? "#f9fafb" : "#4b5563",
      }}
      placeholderStyle={{
        color: colorScheme === "dark" ? "#f9fafb" : "#4b5563",
      }}
      renderItem={(item) => {
        return (
          <View className="p-4 bg-white dark:bg-zinc-700 rounded-[9px]">
            <Text16>{item.label}</Text16>
          </View>
        );
      }}
      data={data}
      placeholder={placeholder}
      labelField="label"
      valueField="value"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default DropdownInput;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  dropdown: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    marginLeft: 12,
  },
  dropdownContainer: {
    borderRadius: 10,
  },
  dropdownItemContainer: {
    borderRadius: 10,
  },
});
