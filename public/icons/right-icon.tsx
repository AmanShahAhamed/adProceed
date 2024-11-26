import React from "react";
import { IIcon } from "../../constants/type";

const RightIcon = ({ height, width }: IIcon) => {
  return (
    <svg
      width={width ?? 8}
      height={height ?? 12}
      viewBox="0 0 9 12"
      fill="none"
    >
      <path
        d="M0.968318 10.4064L5.57645 5.99999L0.968318 1.59359L2.38698 0.23999L8.42383 5.99999L2.38698 11.76L0.968318 10.4064Z"
        fill={"#202224"}
      />
    </svg>
  );
};

export default RightIcon;
