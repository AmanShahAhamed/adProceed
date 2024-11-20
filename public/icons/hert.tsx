import { IIcon } from "@/constants/type";

export default function HeartIcn({ height, width }: IIcon) {
  return (
    <svg
      width={width ?? "50"}
      height={height ?? "50"}
      viewBox="0 0 95 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.5008 7.5C77.5008 -2.5 61.3988 -2.5 51.3988 7.5L47.5004 11.4023L43.602 7.5039C33.602 -2.4961 17.5 -2.4961 7.5 7.5039C-2.5 17.5039 -2.5 33.6059 7.5 43.6059L47.5 83.6059L87.5 43.6059C97.5 33.6019 97.5 17.4029 87.5 7.5009L87.5008 7.5Z"
        fill="#ffff"
      />
    </svg>
  );
}
