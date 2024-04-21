import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";

interface ExtendedDropdownProps {
  style?: any;
  data: any[];
  placeholder?: string;
  value?: string;
  onChange: (item: any) => void;
}

const DropdownInput = ({
  style,
  data,
  placeholder,
  value,
  onChange,
}: ExtendedDropdownProps) => {
  return (
    <Dropdown
      style={[styles.dropdown, { flexGrow: 1 }, style]}
      containerStyle={styles.dropdownContainer}
      itemContainerStyle={styles.dropdownItemContainer}
      data={data}
      placeholder={placeholder}
      labelField="label"
      valueField="value"
      value={value}
      onChange={onChange}
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
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginLeft: 12,
  },
  dropdownContainer: {
    borderRadius: 10,
  },
  dropdownItemContainer: {
    borderRadius: 10,
  },
});
