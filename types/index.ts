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

export type { LeaveRequest, Authorization };
