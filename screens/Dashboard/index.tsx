import React from "react";
import { useSelector } from "react-redux";
import Admin from "./Admin";
import User from "./User";
import { RootState } from "../../services/store";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth);

  return user.admin ? <Admin /> : <User />;
};

export default Dashboard;
