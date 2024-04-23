import React, { Dispatch, SetStateAction } from "react";
import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm, Controller } from "react-hook-form";
import Text16 from "../../components/Text/Text16";
import Button from "../../components/Buttons/Button";
import DropdownInput from "../../components/Inputs/Dropdown";
import Input from "../../components/Inputs/Input";
import TextError from "../../components/Text/TextError";
import { LeaveRequest } from "../../types";

const LeaveRequestModal = ({
  admin,
  index,
  setLeaveRequestModal,
  leaveRequestModal,
  data,
  setData,
}: {
  admin: boolean;
  index: number | boolean;
  setLeaveRequestModal: Dispatch<
    SetStateAction<{ visible: boolean; dataIndex: number | null }>
  >;
  leaveRequestModal: { visible: boolean; dataIndex: number | null };
  data: LeaveRequest[];
  setData: Dispatch<SetStateAction<LeaveRequest[]>>;
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      decision:
        leaveRequestModal.dataIndex !== null
          ? data[leaveRequestModal.dataIndex].decision
          : "",
      days:
        leaveRequestModal.dataIndex !== null
          ? data[leaveRequestModal.dataIndex].days
          : "",
      description:
        leaveRequestModal.dataIndex !== null
          ? data[leaveRequestModal.dataIndex].description
          : "",
      leaveType:
        leaveRequestModal.dataIndex !== null
          ? data[leaveRequestModal.dataIndex].leaveType
          : "",
      fromDate:
        leaveRequestModal.dataIndex !== null
          ? data[leaveRequestModal.dataIndex].fromDate
          : new Date(),
      toDate:
        leaveRequestModal.dataIndex !== null
          ? data[leaveRequestModal.dataIndex].toDate
          : new Date(),
    },
  });

  const onSubmit = (leaveRequest: any) => {
    if (leaveRequestModal.dataIndex !== null) {
    } else {
      setData((prev) => {
        return [
          ...prev,
          {
            key: prev.length + 1,
            name: "John Doe",
            period: "10.01.2024 - 20.01.2024",
            requestedOn: "01.01.2024",
            decision: "Pending",
            ...leaveRequest,
          },
        ];
      });
    }
    setLeaveRequestModal({ visible: false, dataIndex: null });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-between pb-10">
          <View>
            <View className="flex-row items-center justify-between bg-gray-50 px-5 py-2.5 pt-14">
              <Text16 className="text-black font-productSansBold">
                {leaveRequestModal.dataIndex !== null
                  ? "Edit Leave Request"
                  : "New Leave Request"}
              </Text16>
              <Button
                text="Close"
                type="third"
                onPress={() =>
                  setLeaveRequestModal({
                    visible: false,
                    dataIndex: null,
                  })
                }
              />
            </View>
            <View className="p-5 flex-col gap-y-4">
              {admin && index === 0 && leaveRequestModal.dataIndex !== null && (
                <View className="flex-row justify-between items-center">
                  <Text16 className="w-1/4">Decision:</Text16>
                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    name="decision"
                    render={({ field: { onBlur, value } }) => (
                      <DropdownInput
                        data={[
                          { label: "Approved", value: "Approved" },
                          {
                            label: "Partially Approved",
                            value: "Partially Approved",
                          },
                          { label: "Rejected", value: "Rejected" },
                        ]}
                        value={value}
                        placeholder="Select Decision"
                        onChange={(item) => {
                          setValue("leaveType", item.value);
                        }}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </View>
              )}
              <View className="flex-row justify-between items-center">
                <Text16 className="w-1/4">
                  {admin && index === 1 && leaveRequestModal.dataIndex !== null
                    ? "Decision:"
                    : "Leave Type:"}
                </Text16>
                <Controller
                  control={control}
                  rules={{
                    required:
                      admin &&
                      index === 1 &&
                      leaveRequestModal.dataIndex !== null
                        ? false
                        : true,
                  }}
                  name={
                    admin && index === 1 && leaveRequestModal.dataIndex !== null
                      ? "decision"
                      : "leaveType"
                  }
                  render={({ field: { onBlur, value } }) => (
                    <DropdownInput
                      data={
                        admin &&
                        index === 1 &&
                        leaveRequestModal.dataIndex !== null
                          ? [
                              { label: "Approved", value: "Approved" },
                              {
                                label: "Partially Approved",
                                value: "Partially Approved",
                              },
                              { label: "Rejected", value: "Rejected" },
                            ]
                          : [
                              { label: "Annual Leave", value: "Annual Leave" },
                              { label: "Sick Leave", value: "Sick Leave" },
                              {
                                label: "Maternity Leave",
                                value: "Maternity Leave",
                              },
                              {
                                label: "Paternity Leave",
                                value: "Paternity Leave",
                              },
                              { label: "Unpaid Leave", value: "Unpaid Leave" },
                            ]
                      }
                      value={value}
                      placeholder={
                        admin &&
                        index === 1 &&
                        leaveRequestModal.dataIndex !== null
                          ? "Select Decision"
                          : "Select Leave Type"
                      }
                      onChange={(item) => {
                        setValue(
                          admin &&
                            index === 1 &&
                            leaveRequestModal.dataIndex !== null
                            ? "decision"
                            : "leaveType",
                          item.value
                        );
                      }}
                      onBlur={onBlur}
                      error={errors.leaveType}
                    />
                  )}
                />
                {errors.leaveType && <TextError>This is required.</TextError>}
              </View>
              <View className="flex-row items-center">
                <Text16 className="w-1/4">From Date:</Text16>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="fromDate"
                  render={({ field: { value } }) => (
                    <DateTimePicker
                      value={value}
                      mode="date"
                      display="default"
                      onChange={(_, date?: Date) => {
                        setValue("fromDate", date ? date : new Date());
                      }}
                    />
                  )}
                />
                {errors.fromDate && <TextError>This is required.</TextError>}
              </View>
              <View className="flex-row items-center">
                <Text16 className="w-1/4">To Date:</Text16>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="toDate"
                  render={({ field: { value } }) => (
                    <DateTimePicker
                      value={value}
                      mode="date"
                      display="default"
                      onChange={(_, date?: Date) => {
                        setValue("toDate", date ? date : new Date());
                      }}
                    />
                  )}
                />
                {errors.toDate && <TextError>This is required.</TextError>}
              </View>
              <View className="flex-row items-center justify-between">
                <Text16 className="w-1/4">Days:</Text16>
                <View className="w-3/4 pl-2">
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    name="days"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        keyboardType="numeric"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.days}
                      />
                    )}
                  />
                  {errors.days && <TextError>This is required.</TextError>}
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <Text16 className="w-1/4">Description:</Text16>
                <View className="w-3/4 pl-2">
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    name="description"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.description}
                      />
                    )}
                  />
                  {errors.description && (
                    <TextError>This is required.</TextError>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View className="px-5">
            {leaveRequestModal.dataIndex !== null ? (
              <Button
                type="secondary"
                text="Save"
                className="px-6 py-3"
                onPress={handleSubmit(onSubmit)}
              />
            ) : (
              <Button
                type="primary"
                text="Add"
                className="px-6 py-3"
                onPress={handleSubmit(onSubmit)}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LeaveRequestModal;
