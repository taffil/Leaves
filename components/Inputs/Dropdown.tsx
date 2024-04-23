import React from "react";
import { FieldError } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

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
  return (
    <Dropdown
      style={[
        styles.dropdown,
        { flexGrow: 1 },
        style,
        { borderColor: error ? "#ef4444" : "#e5e7eb" },
      ]}
      containerStyle={styles.dropdownContainer}
      itemContainerStyle={styles.dropdownItemContainer}
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
    backgroundColor: "#fff",
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
