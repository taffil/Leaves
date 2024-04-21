import React from "react";
import Admin from "./Admin";
import User from "./User";

const Dashboard = () => {
  let admin = true;
  return admin ? <Admin /> : <User />;
};

export default Dashboard;
