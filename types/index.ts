import { ReactNode } from "react";
import {
  ModalProps,
  ScrollViewProps,
  TextProps,
  ViewProps,
} from "react-native";
import { TouchableOpacityProps } from "react-native";

interface LeaveRequest {
  key: number;
  name: string;
  decision?: "Approved" | "Rejected" | "Pending" | "Partially Approved";
  leaveType:
    | "Annual Leave"
    | "Sick Leave"
    | "Maternity Leave"
    | "Paternity Leave"
    | "Unpaid Leave";
  period: string;
  days: string;
  requestedOn: string;
  description?: string;
  toDate: Date;
  fromDate: Date;
}

interface Authorization {
  role: string;
  add: boolean;
  approve: boolean;
  partiallyApprove: boolean;
  edit: boolean;
  reject: boolean;
}

interface ButtonProps extends TouchableOpacityProps {
  type?: "primary" | "secondary" | "third" | "remove" | "transparent";
  text?: string;
  icon?: any;
  mode?: "contained" | "outlined";
  textProps?: TextProps;
}

interface AlertModalProps extends ModalProps {
  children: ReactNode;
  headerShow?: boolean;
  title?: string;
  visible: boolean;
  animationType?: "none" | "slide" | "fade";
  refershing?: boolean;
  containerViewProps?: ScrollViewProps;
  headerViewProps?: ViewProps;
  titleProps?: TextProps;
  buttonProps?: ButtonProps;
  headerChildren?: ReactNode;
  onCloseCallback?: () => void;
  onYesCallback?: () => void;
  onNoCallback?: () => void;
}

interface User {
  name: string;
  email: string;
  role: string;
}

export type { LeaveRequest, Authorization, ButtonProps, AlertModalProps, User };
