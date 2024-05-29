import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DashboardIcon = (props: any) => {
  return (
    <Svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-gray-800 dark:text-white mr-2"
      {...props}
    >
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 01-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4z"
      />
    </Svg>
  );
};

export default DashboardIcon;
