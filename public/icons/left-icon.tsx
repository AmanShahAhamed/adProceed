import { IIcon } from "../../constants/type";

const LeftIcon = ({ height, width }: IIcon) => {
  return (
    <svg
      width={width ?? 8}
      height={height ?? 12}
      viewBox="0 0 8 12"
      fill="none"
    >
      <path
        d="M7.56586 10.4064L2.95773 5.99999L7.56586 1.59359L6.1472 0.23999L0.110352 5.99999L6.1472 11.76L7.56586 10.4064Z"
        fill="#202224"
      />
    </svg>
  );
};

export default LeftIcon;
