import React from "react";
import { FieldError } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  error?: boolean | undefined | FieldError;
}

const Input = ({ error, ...props }: InputProps) => {
  return (
    <TextInput
      placeholderTextColor={"#94a3b8"}
      style={{ fontSize: 16 }}
      className={`px-2.5 py-3.5 bg-white dark:bg-zinc-700 w-full rounded-xl border ${
        error ? "border-red-500" : "border-gray-200 dark:border-zinc-600"
      } font-productSansRegular text-gray-700 dark:text-gray-50`}
      {...props}
    />
  );
};

export default Input;
