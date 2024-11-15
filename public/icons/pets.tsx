import { IIcon } from "@/constants/type";

export default function PetIcon({ height, width }: IIcon) {
  return (
    <svg
      width={width ?? 50}
      height={height ?? 50}
      viewBox="0 0 175 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M76.854 98.3014V75.7539C76.854 74.1566 76.1657 72.7085 74.9631 71.4999C74.7513 71.8939 74.4487 72.2559 74.1462 72.618C70.1146 77.1754 61.8018 78.9536 54.556 78.9536C47.3101 78.9536 38.9893 77.1753 35.0026 72.618C33.9739 71.4414 33.3309 70.2062 33.0284 68.9337C19.8672 73.4912 11.5929 83.452 9.91988 97.1253C5.93368 96.1297 2.62831 94.0799 0.699497 91.3913C-2.2126 99.8406 3.91425 109.498 20.0864 109.498H28.2327V104.547C28.2327 102.343 29.8589 100.378 32.4382 99.2335C32.824 98.3923 32.9072 97.5139 32.7408 96.6673C32.5668 95.7622 32.0979 94.8572 31.3263 94.0425C30.3809 93.1055 29.1857 92.3813 27.7638 91.9609C26.3494 91.5083 24.7609 91.3273 23.1801 91.4498C21.5916 91.5722 20.1394 90.7523 19.9653 89.6396C19.7913 88.5216 20.9108 87.5259 22.4992 87.3768C25.1542 87.1639 27.8167 87.4993 30.1765 88.25C32.5366 89.006 34.5938 90.2145 36.0915 91.7532C37.3774 93.0789 38.1942 94.5909 38.4893 96.1562C38.6179 96.8537 38.6633 97.5778 38.5725 98.2965H41.5755C43.1639 98.2965 44.4951 99.2016 44.4951 100.346C44.4951 101.464 43.1639 102.369 41.5755 102.369L37.1052 102.375C35.3882 102.375 34.019 103.338 34.019 104.547V109.498H52.2859V95.2187C51.3858 95.1015 50.531 94.9791 49.7142 94.7981C47.914 94.3721 46.2878 93.8025 44.8733 93.0464C43.5874 92.3809 43.3302 91.1137 44.2682 90.2087C45.2137 89.3036 47.0517 89.1226 48.2997 89.7828C49.1998 90.2353 50.2738 90.6293 51.4312 90.8689C52.5884 91.1404 53.8743 91.2629 55.2055 91.2629C56.5368 91.2629 57.7772 91.1404 58.9346 90.8689C60.0919 90.6293 61.1658 90.2353 62.0661 89.7828C63.3519 89.1173 65.1522 89.2983 66.0976 90.2087C67.0884 91.1138 66.7859 92.381 65.5 93.0464C64.0856 93.8024 62.4593 94.3721 60.6516 94.7981C59.8347 94.9791 58.9799 95.1015 58.0799 95.2187V109.498H77.459C78.4423 109.498 79.2592 108.923 79.2592 108.231V105.724C79.2592 104.366 78.3137 103.158 76.8614 102.375H72.3987C70.7649 102.375 69.479 101.47 69.479 100.352C69.479 99.2071 70.7649 98.302 72.3987 98.302L76.854 98.3014ZM82.4286 82.9994H82.3001V75.7533C82.3001 73.4321 81.3167 71.2279 79.4712 69.3218L76.5138 66.3031C77.7619 65.4299 78.9569 64.4929 80.031 63.5292L81.4077 62.3206C82.2624 62.4431 83.1247 62.5016 83.9793 62.5016C91.097 62.5016 96.8835 58.4287 96.8835 53.4187V45.6934C96.8835 43.7342 95.938 41.9506 94.1377 40.4706L83.6769 31.8082C79.9858 28.7575 73.7304 28.0973 68.8819 30.2057L67.6414 30.7487C59.4952 27.6395 49.6317 27.6395 41.485 30.7487L40.2446 30.2057C35.3961 28.092 29.1786 28.7575 25.4949 31.8082L16.9174 38.8733C13.7406 30.7541 14.9433 22.7576 20.6009 14.8197C26.3041 6.79106 40.4099 1.23807 52.7542 0.210126C65.2347 -0.817426 77.7527 1.96181 87.1479 7.81287C96.5348 1.95635 109.06 -0.817412 121.534 0.210126C133.886 1.23768 147.992 6.79065 153.695 14.8197C161.584 25.8991 160.858 37.1805 151.509 48.6226C150.821 46.2693 150.049 44.0013 149.278 41.9248C148.68 40.2052 146.918 38.8475 144.558 38.2139C142.198 37.6123 139.626 37.8199 137.523 38.8155C135.292 39.875 133.318 41.1102 131.692 42.5902C127.146 41.9567 122.471 41.9567 117.925 42.5902C116.291 41.1102 114.325 39.8749 112.094 38.8155C110.036 37.8199 107.419 37.607 105.059 38.2139C102.699 38.8475 100.99 40.205 100.339 41.9248C98.0247 48.2604 95.5361 56.5344 96.4363 63.3547C95.9673 63.8072 95.5362 64.2598 95.1504 64.771L94.4621 65.6175V66.5811C94.4621 70.8351 97.3742 74.1254 101.966 76.5106C100.68 77.9001 99.9534 79.4388 99.6055 81.036C96.822 81.9411 94.2048 82.6066 91.8902 82.9953C88.8118 83.7247 85.4685 83.7247 82.4278 83.0006L82.4286 82.9994ZM125.18 11.1671H133.538C134.393 11.1671 135.081 11.6516 135.081 12.2213V17.7157H142.841C143.658 17.7157 144.339 18.1682 144.339 18.7699V24.6583C144.339 25.2333 143.651 25.7124 142.841 25.7124H135.081V31.2068C135.081 31.7818 134.393 32.261 133.538 32.261H125.18C124.363 32.261 123.682 31.7765 123.682 31.2068V25.7124H115.914C115.059 25.7124 114.371 25.2279 114.371 24.6583V18.7699C114.371 18.1682 115.059 17.7157 115.914 17.7157H123.674V12.2213C123.674 11.6516 124.363 11.1671 125.18 11.1671ZM167.969 106.175C164.8 108.257 160.428 109.556 154.937 109.497H148.076V104.876C148.076 102.885 146.616 101.075 144.302 100.047C144.045 99.3551 143.961 98.6576 144.09 97.9655C144.219 97.1829 144.65 96.4269 145.293 95.7295C146.064 94.9468 147.093 94.3399 148.296 93.9778C149.498 93.5838 150.822 93.4347 152.199 93.5252C153.787 93.6743 155.201 92.8597 155.375 91.747C155.587 90.6289 154.43 89.6067 152.841 89.4842C150.444 89.3032 148.038 89.5747 145.898 90.2721C143.757 90.9376 141.912 92.0504 140.535 93.4399C139.332 94.6485 138.606 96.0061 138.349 97.4224C138.266 97.9974 138.221 98.567 138.266 99.1101H135.951C134.363 99.1101 133.077 100.047 133.077 101.165C133.077 102.283 134.363 103.22 135.951 103.22H139.892C141.224 103.22 142.29 103.944 142.29 104.881V109.503H126.814V99.9354C127.54 99.8449 128.191 99.7224 128.872 99.5734C130.46 99.2433 131.958 98.7002 133.244 98.0347C134.529 97.3692 134.787 96.0755 133.841 95.165C132.896 94.2599 131.058 94.0789 129.764 94.7444C129.038 95.1384 128.138 95.4685 127.109 95.6814C126.164 95.8891 125.052 96.0115 123.94 96.0115C122.783 96.0115 121.709 95.8891 120.725 95.6814C119.696 95.4685 118.796 95.1384 118.07 94.7444C116.784 94.0789 114.984 94.2599 113.993 95.165C113.048 96.0701 113.305 97.3692 114.591 98.0347C115.877 98.7002 117.382 99.2433 119.008 99.5734C119.651 99.7225 120.339 99.8449 121.02 99.9354V109.503H104.251C103.351 109.503 102.662 109.018 102.662 108.385V106.18C102.662 104.972 103.479 103.886 104.765 103.22H108.713C110.347 103.22 111.633 102.283 111.633 101.165C111.633 100.047 110.347 99.1101 108.713 99.1101H104.765L104.773 84.0862C104.773 81.8234 105.242 79.9493 106.664 78.4746C118.796 82.457 137.026 81.8873 147.312 76.6963C155.761 80.109 161.335 86.3862 163.347 95.3471C163.907 97.7589 163.778 100.389 164.807 102.71C165.405 102.29 165.836 101.747 166.305 101.294C168.536 99.1217 168.453 96.1935 168.491 93.2972C168.528 92.3602 168.4 91.3966 168.188 90.4328C167.59 87.8985 165.405 85.4549 163.385 83.1868C158.801 78.0277 154.891 73.6194 164.368 68.9397C165.699 68.3061 167.5 68.5191 168.4 69.4561C169.3 70.3612 168.997 71.6284 167.674 72.2938C162.697 74.7376 165.276 77.6392 168.271 81.0146C170.631 83.6074 173.12 86.4185 173.891 89.7674C174.194 90.944 174.322 92.1845 174.277 93.3612C174.194 97.0721 173.936 100.815 170.979 103.685C170.071 104.547 169.127 105.451 167.969 106.175ZM99.9237 66.5798C100.567 65.7652 101.293 65.1316 102.155 64.6471C100.952 59.6957 102.11 52.455 105.627 42.8874C105.839 42.3709 106.315 41.9823 107.003 41.8013C107.73 41.6202 108.463 41.6788 109.061 41.9823C111.935 43.3399 114.076 45.001 115.49 46.9602C121.534 45.6026 128.137 45.6026 134.143 46.9602C135.557 45.001 137.705 43.3399 140.618 41.9823C141.215 41.6788 141.949 41.6202 142.63 41.8013C143.356 41.9823 143.832 42.3763 143.999 42.8874C147.516 52.4547 148.673 59.6954 147.471 64.6471C148.325 65.1316 149.059 65.7651 149.702 66.5798C149.702 80.7628 99.9237 80.7628 99.9237 66.5798ZM131.306 59.5147C131.306 58.3647 132.592 57.4596 134.226 57.4596C135.814 57.4596 137.1 58.3647 137.1 59.5147V61.0534C137.1 62.198 135.814 63.1084 134.226 63.1084C132.592 63.1084 131.306 62.2033 131.306 61.0534V59.5147ZM112.525 59.5147C112.525 58.3647 113.856 57.4596 115.445 57.4596C117.033 57.4596 118.357 58.3647 118.357 59.5147V61.0534C118.357 62.198 117.026 63.1084 115.445 63.1084C113.856 63.1084 112.525 62.2033 112.525 61.0534V59.5147ZM123.508 69.3216C121.874 69.3216 120.588 68.4165 120.588 67.2984C120.588 66.1484 121.874 65.2434 123.508 65.2434H126.163C127.751 65.2434 129.083 66.1485 129.083 67.2984C129.083 68.4165 127.751 69.3216 126.163 69.3216H123.508ZM78.9949 57.3105C80.3261 58.157 82.0811 58.6682 83.9644 58.6682C88.0791 58.6682 91.43 56.3149 91.43 53.4186V45.6933C91.43 44.6391 90.9611 43.734 90.0156 42.9461L79.5092 34.3158C77.5805 32.6867 74.3204 32.3566 71.7487 33.4693L67.6339 35.2794C59.8734 31.2331 49.2762 31.2331 41.4775 35.2794L37.3627 33.4693C34.8364 32.3512 31.5763 32.6867 29.6022 34.3158L19.1414 42.9461C18.1581 43.7287 17.6815 44.6339 17.6815 45.6933V53.4186C17.6815 56.3149 21.0248 58.6682 25.1396 58.6682C27.0684 58.6682 28.8307 58.157 30.1544 57.3105C30.3662 56.9165 30.5024 56.4959 30.5024 56.0753V44.8789V44.6659C30.5477 43.6117 30.7142 42.7332 31.0167 41.9825C31.4025 41.0135 31.9622 40.2308 32.7715 39.6292C33.8834 38.8146 35.7289 38.8146 36.8863 39.5706C38.0436 40.3533 38.089 41.6523 36.9695 42.4669C36.8409 42.5574 36.7123 42.7385 36.6291 43.0686C36.4174 43.5211 36.3266 44.0961 36.2888 44.7563V44.8788V56.0752C36.2888 58.0345 35.1769 59.85 33.3691 61.1438C34.7457 62.379 36.5006 63.6781 38.6033 65.0358C33.8834 78.495 75.2199 78.495 70.5088 65.0358C72.6494 63.6781 74.4117 62.3791 75.7809 61.1438C73.9353 59.8448 72.8235 58.0346 72.8235 56.0752V44.8788V44.7563C72.8235 44.0908 72.6949 43.5211 72.5209 43.0686C72.3923 42.7385 72.2638 42.5575 72.1806 42.4669C71.0687 41.6524 71.1065 40.3533 72.2259 39.5706C73.3832 38.8146 75.2288 38.8146 76.3407 39.6292C77.1576 40.2308 77.7552 41.0187 78.1409 41.9825C78.3981 42.7385 78.5721 43.6117 78.6099 44.6659C78.6099 44.7298 78.6553 44.815 78.6553 44.8789V56.0753C78.6553 56.4959 78.7377 56.9219 78.9949 57.3105ZM44.911 53.3601C43.3226 53.4506 41.9536 52.5775 41.8248 51.4595C41.7416 50.3414 42.9821 49.3778 44.5706 49.2872L46.7113 49.1967C48.3375 49.1381 49.7142 50.0112 49.7974 51.1293C49.8806 52.2474 48.678 53.211 47.0517 53.2749L44.911 53.3601ZM57.3839 65.7332C57.0889 66.6383 55.9241 67.3038 54.5551 67.3038C53.1784 67.3038 52.0212 66.6383 51.7262 65.7332C50.4404 65.5203 49.495 64.7057 49.495 63.7421C49.495 62.5921 50.7808 61.687 52.4146 61.687H56.7412C58.3297 61.687 59.6156 62.5921 59.6156 63.7421C59.6156 64.7057 58.6697 65.5203 57.3839 65.7332ZM64.5924 49.2823C66.1808 49.3728 67.3759 50.3364 67.2927 51.4546C67.2019 52.5726 65.8328 53.4457 64.252 53.3552L62.066 53.2647C60.4776 53.2061 59.2825 52.2371 59.3658 51.1191C59.449 50.0064 60.8256 49.128 62.414 49.1864L64.5924 49.2823Z"
        fill="#4174A8"
      />
    </svg>
  );
}