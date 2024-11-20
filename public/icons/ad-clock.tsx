import { IIcon } from "@/constants/type";

export default function AdClockIcon({ height, width }: IIcon) {
  return (
    <svg
      width={width ?? 50}
      height={height ?? 50}
      viewBox="0 0 202 189"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M100.489 17.0184C151.983 17.0184 193.741 55.3273 193.741 102.567C193.741 149.835 151.983 188.144 100.489 188.144C48.9659 188.144 7.20776 149.835 7.20776 102.567C7.20776 55.3273 48.9659 17.0184 100.489 17.0184ZM100.489 34.344C141.568 34.344 174.857 64.8835 174.857 102.569C174.857 140.254 141.568 170.821 100.489 170.821C59.4111 170.821 26.0915 140.254 26.0915 102.569C26.0915 64.8835 59.4111 34.344 100.489 34.344Z"
        fill="#125A94"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.0442 54.0057H105.593V104.016L151.902 130.38L143.728 142.507L90.0439 111.968L90.0442 54.0057Z"
        fill="#125A94"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.0984 0.362152L54.3556 11.7827L10.2572 45.1207L0 33.7001L44.0984 0.362152Z"
        fill="#125A94"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M157.431 0L147.174 11.4206L191.273 44.7585L201.53 33.338L157.431 0Z"
        fill="#125A94"
      />
    </svg>
  );
}
