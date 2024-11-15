import { IIcon } from "@/constants/type";

export default function VehicleIcon({ height, width }: IIcon) {
  return (
    <svg
      width={width ?? 50}
      height={height ?? 50}
      viewBox="0 0 194 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.3765 8.82216L72.7267 2.24931C72.6506 2.22752 72.565 2.22026 72.4888 2.22026C72.4127 2.22752 72.3365 2.24205 72.2699 2.27836L64.4945 5.64101C64.3993 5.67733 64.3327 5.73543 64.2851 5.79353C64.2376 5.8589 64.209 5.93153 64.2185 6.01142C64.2185 6.09131 64.2471 6.16394 64.2947 6.22931C64.3422 6.28741 64.4184 6.33825 64.5136 6.38182L81.3968 13.1289C86.3933 11.6836 91.3898 10.2456 96.3861 8.82935L96.3765 8.82216ZM144.439 0.0486899C143.487 3.47679 144.486 5.0527 147.189 5.2271C150.33 5.4232 155.478 4.13769 162.312 1.81369C162.235 1.78464 162.15 1.76285 162.074 1.73379C158.686 0.644378 154.184 0.121463 149.34 0.0197986C147.731 -0.0165165 146.085 -0.00198964 144.429 0.0561122L144.439 0.0486899ZM118.038 10.2964C117.848 10.1511 117.581 10.0567 117.286 10.0567C116.991 10.0567 116.725 10.1438 116.525 10.2964C116.335 10.4416 116.211 10.645 116.211 10.8774C116.211 11.088 116.316 11.2841 116.487 11.4221L116.525 11.4511C116.715 11.5964 116.982 11.6908 117.277 11.6908C117.572 11.6908 117.838 11.5964 118.029 11.4511C118.219 11.3059 118.343 11.1025 118.343 10.8774C118.343 10.6668 118.238 10.4707 118.067 10.3254L118.029 10.2964H118.038ZM117.286 8.54604C118.124 8.54604 118.885 8.80749 119.437 9.22874C119.456 9.24327 119.475 9.26506 119.494 9.27959C120.008 9.69357 120.322 10.26 120.322 10.8774C120.322 11.5165 119.98 12.0975 119.428 12.5188C118.876 12.94 118.114 13.2015 117.277 13.2015C116.439 13.2015 115.678 12.94 115.126 12.5188C115.107 12.5042 115.088 12.4825 115.069 12.4679C114.555 12.0467 114.241 11.4875 114.241 10.8774C114.241 10.2383 114.584 9.65725 115.136 9.23601C115.688 8.81478 116.449 8.55331 117.286 8.55331L117.286 8.54604ZM105.105 13.659C104.914 13.5138 104.648 13.4193 104.353 13.4193C104.077 13.4193 103.82 13.4992 103.629 13.6299L103.591 13.659C103.401 13.8043 103.277 14.0076 103.277 14.2327C103.277 14.4579 103.392 14.6613 103.582 14.8065C103.772 14.9518 104.039 15.0389 104.334 15.0389C104.629 15.0389 104.895 14.9518 105.095 14.7992C105.285 14.654 105.409 14.4506 105.409 14.2182C105.409 13.9931 105.285 13.7897 105.095 13.6445L105.105 13.659ZM104.353 11.9087C105.19 11.9087 105.952 12.1701 106.504 12.5914C107.056 13.0126 107.398 13.5936 107.398 14.2328C107.398 14.8719 107.056 15.4529 106.504 15.8741C105.952 16.2954 105.19 16.5568 104.353 16.5568C103.515 16.5568 102.754 16.2954 102.202 15.8741L102.192 15.8669C101.64 15.4456 101.298 14.8646 101.298 14.2255C101.298 13.5864 101.64 13.0054 102.192 12.5841C102.211 12.5696 102.24 12.5551 102.259 12.5405C102.801 12.1483 103.544 11.9087 104.343 11.9087L104.353 11.9087ZM93.3511 17.0216C93.1608 16.8764 92.8943 16.782 92.5897 16.782C92.2947 16.782 92.0282 16.8691 91.8284 17.0216C91.638 17.1669 91.5143 17.3703 91.5143 17.6027C91.5143 17.8133 91.619 18.0094 91.7903 18.1474L91.8284 18.1764C92.0187 18.3217 92.2852 18.4161 92.5802 18.4161C92.8752 18.4161 93.1417 18.3217 93.332 18.1764C93.5224 18.0312 93.6461 17.8278 93.6461 17.6027C93.6461 17.3775 93.5319 17.1742 93.332 17.0217L93.3511 17.0216ZM92.5897 15.2713C93.4272 15.2713 94.1886 15.5328 94.7406 15.954C95.2926 16.3753 95.6352 16.9563 95.6352 17.5954C95.6352 18.2345 95.2926 18.8155 94.7406 19.2368C94.1886 19.658 93.4272 19.9195 92.5897 19.9195C91.7522 19.9195 90.9909 19.658 90.4389 19.2368C90.4199 19.2222 90.4008 19.2005 90.3818 19.1859C89.8679 18.7647 89.5538 18.2055 89.5538 17.5954C89.5538 16.9563 89.8964 16.3752 90.4484 15.954C91.0004 15.5328 91.7618 15.2713 92.5993 15.2713L92.5897 15.2713ZM81.8831 20.3843C81.6928 20.239 81.4263 20.1446 81.1313 20.1446C80.8363 20.1446 80.5698 20.2318 80.3699 20.3843C80.1796 20.5295 80.0559 20.7329 80.0559 20.9653C80.0559 21.1904 80.1701 21.3938 80.3604 21.539C80.5508 21.6843 80.8172 21.7715 81.1122 21.7715C81.4073 21.7715 81.6738 21.677 81.8641 21.5318C82.0544 21.3865 82.1686 21.1832 82.1686 20.958C82.1686 20.7329 82.0449 20.5295 81.8546 20.3843H81.8831ZM81.1313 18.634C81.9688 18.634 82.7302 18.8954 83.2821 19.3167C83.8341 19.7379 84.1768 20.3189 84.1768 20.958C84.1768 21.5972 83.8341 22.1782 83.2821 22.5994C82.7302 23.0206 81.9688 23.2821 81.1313 23.2821C80.2938 23.2821 79.5324 23.0207 78.9805 22.5994L78.9709 22.5921C78.419 22.1709 78.0763 21.5899 78.0763 20.9508C78.0763 20.3116 78.4189 19.7306 78.9709 19.3094C79.5229 18.8882 80.2843 18.6267 81.1218 18.6267L81.1313 18.634ZM68.9495 23.7469C68.7591 23.6017 68.4927 23.5072 68.1976 23.5072C67.9026 23.5072 67.6361 23.6017 67.4458 23.7469C67.2555 23.8922 67.1317 24.0955 67.1317 24.3279C67.1317 24.5531 67.2555 24.7564 67.4458 24.9017C67.6361 25.0469 67.9026 25.1414 68.1976 25.1414C68.4736 25.1414 68.7306 25.0615 68.9209 24.9307L68.959 24.9017C69.1494 24.7564 69.2731 24.5531 69.2731 24.3279C69.2731 24.1028 69.1494 23.8994 68.959 23.7542L68.9495 23.7469ZM68.1976 21.9966C69.0351 21.9966 69.7965 22.258 70.3485 22.6793C70.9005 23.1005 71.2431 23.6815 71.2431 24.3207C71.2431 24.9598 70.9005 25.5408 70.3485 25.962C70.3295 25.9766 70.3009 25.9911 70.2819 26.0056C69.7394 26.3978 68.9971 26.6375 68.1976 26.6375C67.3601 26.6375 66.5988 26.376 66.0468 25.9548C65.4948 25.5335 65.1522 24.9525 65.1522 24.3134C65.1522 23.6743 65.4948 23.0933 66.0468 22.672C66.5988 22.2508 67.3601 21.9893 68.1976 21.9893L68.1976 21.9966ZM130.983 6.91912C130.792 6.77386 130.526 6.67944 130.231 6.67944C129.936 6.67944 129.669 6.77385 129.479 6.91912C129.289 7.06438 129.165 7.26773 129.165 7.49287C129.165 7.718 129.289 7.92137 129.479 8.06661C129.669 8.21187 129.936 8.30629 130.24 8.30629C130.535 8.30629 130.802 8.21188 130.992 8.06661C131.183 7.92136 131.306 7.718 131.306 7.49287C131.306 7.28225 131.202 7.08615 131.03 6.94089L130.992 6.91184L130.983 6.91912ZM130.231 5.16879C131.068 5.16879 131.83 5.43024 132.382 5.8515C132.401 5.86602 132.42 5.88781 132.439 5.90233C132.953 6.31632 133.267 6.88279 133.267 7.49287C133.267 8.13199 132.924 8.71301 132.372 9.13425C131.82 9.55548 131.059 9.81695 130.221 9.81695C129.384 9.81695 128.623 9.5555 128.071 9.13425C127.519 8.71301 127.176 8.13199 127.176 7.49287C127.176 6.85375 127.519 6.27274 128.071 5.8515C128.623 5.43027 129.384 5.1688 130.221 5.1688L130.231 5.16879ZM26.0471 36.1366L19.5947 47.096L24.6387 46.3625L35.7071 34.3645L26.0471 36.1366ZM24.0676 35.8316L23.1254 34.8511C23.0397 34.764 22.9731 34.6986 22.916 34.6478C22.8589 34.5969 22.7828 34.5388 22.6781 34.4662L12.5233 27.2978C12.333 27.1598 12.1997 27.0001 12.1236 26.8257L12.1046 26.7749C12.0475 26.6151 12.038 26.4408 12.0855 26.2593C12.1331 26.0632 12.2378 25.8889 12.3901 25.7509C12.5424 25.6129 12.7422 25.4967 12.9896 25.424L20.3177 23.2089C20.5176 23.1508 20.7175 23.1218 20.9173 23.1218C21.1076 23.129 21.3075 23.1653 21.5074 23.238L33.6132 27.7045C34.0414 27.8643 34.4888 27.9514 34.9551 27.9659C35.4119 27.9805 35.8687 27.9224 36.316 27.7989C49.6875 23.9932 65.2088 19.1199 80.6749 14.4937L81.284 14.7333C81.7693 14.9222 82.3594 14.7842 82.6164 14.4138C82.7306 14.2467 82.7591 14.0579 82.702 13.8836C87.9746 12.3148 93.2278 10.7823 98.3766 9.32989L99.4615 9.62767C99.9755 9.77292 100.537 9.56956 100.727 9.17737C100.803 9.01033 100.803 8.82876 100.727 8.66898C109.074 6.35215 117.106 4.28949 124.434 2.71358C129.241 1.42807 135.826 0.447518 142.441 0.0990928C141.356 4.42038 143.012 6.43954 147.075 6.6937C150.787 6.92611 156.716 5.39367 164.539 2.67733C166.395 3.62875 167.623 4.8562 167.937 6.41035C168.098 7.20926 168.041 8.10257 167.718 9.09754C166.756 12.0608 155.488 14.9949 138.615 19.3815C132.648 20.9357 125.986 22.6642 118.858 24.6541L121.875 19.3233C122.084 18.9601 122.132 18.5825 122.046 18.2193C121.96 17.8489 121.732 17.5076 121.37 17.2243C121.009 16.9411 120.561 16.7523 120.095 16.6724C119.619 16.5925 119.115 16.6215 118.639 16.7668L99.4717 22.5043C99.091 22.6205 98.7674 22.7875 98.5105 23.0054C98.2535 23.2233 98.0632 23.4847 97.9585 23.7825L96.1502 28.772C81.9604 31.6263 68.1808 34.4006 56.6836 36.7029C45.2536 38.9979 36.1838 40.8063 31.282 41.7796L38.0486 34.4442C38.0676 34.4297 38.0771 34.4079 38.0962 34.3934C38.315 34.132 38.3626 33.856 38.2579 33.58C38.1723 33.3476 37.9724 33.137 37.6774 32.9772C37.6584 32.9626 37.6298 32.9554 37.6108 32.9409C37.3729 32.8247 37.0874 32.752 36.7923 32.723C36.5258 32.6939 36.2308 32.7085 35.9548 32.7593L25.5338 34.6765C25.2863 34.7201 25.0769 34.7928 24.8866 34.8872C24.6487 35.0106 24.4773 35.1704 24.3632 35.3593L24.0967 35.8168L24.0676 35.8316ZM53.6937 75.5733C53.6366 75.5587 53.5891 75.5369 53.532 75.5152L38.3047 70.1843V101.669C41.864 102.984 44.4621 101.851 46.9937 100.739C49.8679 99.4829 52.6658 98.2556 56.5299 99.708C59.0043 97.1806 61.9927 93.404 64.1816 89.3877C65.8566 86.3229 67.0462 83.1344 67.17 80.2948L53.6937 75.5733ZM21.5362 75.3626C21.4886 75.3844 21.4315 75.4062 21.3839 75.4207L7.47009 80.294C7.60333 83.6349 9.14509 87.4697 11.3434 91.0865C13.9226 95.3353 17.3963 99.2715 20.575 101.77C20.7273 101.719 20.8891 101.668 21.0509 101.617C22.1929 101.24 23.1256 100.826 23.9536 100.463C27.2561 99.0029 29.3211 98.1024 36.3352 100.869V70.1916L21.5457 75.37L21.5362 75.3626ZM46.2604 59.7551V55.47C43.3292 54.2935 40.455 53.756 37.6189 53.7778C34.8019 53.7996 32.0133 54.3879 29.2439 55.4773V59.7551C32.0038 59.4646 34.7637 59.3121 37.5331 59.3048C40.4453 59.2903 43.3577 59.4428 46.2604 59.7551ZM47.1455 61.3819C49.106 61.6289 51.0666 61.9484 53.0271 62.3551V73.6777L37.7998 68.3468L37.7808 68.3395H36.6959L36.6768 68.3468L21.8874 73.5252V62.3624C23.9906 61.9557 26.0845 61.6216 28.1876 61.3747C28.2352 61.3747 28.2827 61.3674 28.3303 61.3601C31.3473 61.0043 34.3737 60.8154 37.3907 60.8009C40.5504 60.7864 43.7196 60.968 46.8791 61.3601C46.9172 61.3674 46.9552 61.3747 46.9933 61.3747L47.1455 61.3819ZM1.69269 106.274C1.15974 106.354 0.636307 106.092 0.531616 105.685C0.426925 105.279 0.769542 104.879 1.30251 104.799C7.43142 103.841 9.85828 105.206 12.0759 106.448C14.0935 107.581 15.9017 108.598 21.5453 106.724C22.6873 106.346 23.62 105.932 24.448 105.569C27.9787 104.015 30.0821 103.085 38.2953 106.586C42.1211 108.213 44.843 107.022 47.4886 105.86C50.7529 104.429 53.9316 103.035 58.6903 105.598C59.8799 106.237 62.7827 107.029 65.6284 107.007C67.4747 106.993 69.2639 106.63 70.4251 105.635C70.7867 105.322 71.4053 105.293 71.8145 105.569C72.2238 105.845 72.2618 106.317 71.9002 106.63C70.3109 108.002 67.9981 108.496 65.6475 108.511C62.3735 108.532 58.976 107.588 57.5581 106.826C53.8275 104.821 51.1911 105.976 48.4692 107.167C45.3477 108.532 42.1308 109.941 37.3343 107.901C30.0917 104.821 28.3502 105.591 25.4285 106.877C24.5339 107.269 23.5537 107.704 22.3261 108.111C15.6451 110.334 13.4085 109.077 10.9056 107.675C9.02122 106.622 6.96551 105.46 1.69322 106.288L1.69269 106.274ZM48.3929 77.6077C48.8497 78.0362 49.1352 78.6463 49.1352 79.3217C49.1352 80.0044 48.8497 80.6072 48.3929 81.0357C47.9837 81.4206 47.4317 81.6603 46.8321 81.6603C46.2326 81.6603 45.6806 81.4206 45.2713 81.0357C44.8145 80.6072 44.529 79.9972 44.529 79.3217C44.529 78.639 44.8145 78.0362 45.2713 77.6077C45.6806 77.2228 46.2326 76.9831 46.8321 76.9831C47.4317 76.9831 47.9837 77.2228 48.3929 77.6077ZM46.8321 75.4725C48.0503 75.4725 49.1448 75.9301 49.9251 76.6636C50.6579 77.3535 51.1147 78.2977 51.1147 79.329C51.1147 80.3603 50.6579 81.3045 49.9251 81.9945C49.1447 82.728 48.0502 83.1855 46.8321 83.1855C45.614 83.1855 44.5195 82.728 43.7392 81.9945C43.0064 81.3045 42.5495 80.3603 42.5495 79.329C42.5495 78.2977 43.0064 77.3536 43.7392 76.6636C44.5196 75.9301 45.614 75.4725 46.8321 75.4725ZM182.489 81.043L172.734 71.2602C172.62 71.1512 172.496 71.0641 172.353 71.0133C172.21 70.9624 172.049 70.9334 171.858 70.9334H163.255C162.951 70.9334 162.675 71.0278 162.475 71.1803C162.275 71.3328 162.151 71.5434 162.151 71.7758V81.5587C162.151 81.7911 162.275 82.0017 162.475 82.1542C162.675 82.3067 162.951 82.4012 163.255 82.4012H181.614C181.842 82.4012 182.042 82.3576 182.204 82.2777C182.365 82.1978 182.508 82.0816 182.603 81.9291C182.698 81.7766 182.737 81.624 182.727 81.4715C182.708 81.3263 182.632 81.1738 182.499 81.043L182.489 81.043ZM174.304 70.3451L184.059 80.1279C184.421 80.491 184.63 80.905 184.678 81.3263C184.735 81.7548 184.63 82.1833 184.364 82.59C184.097 82.9967 183.707 83.3235 183.231 83.5487C182.755 83.7738 182.194 83.8973 181.604 83.8973H163.245C162.398 83.8973 161.627 83.6358 161.066 83.2073C160.504 82.7788 160.162 82.1905 160.162 81.5441V71.7613C160.162 71.1149 160.504 70.5266 161.066 70.1054L161.075 70.0981C161.637 69.6696 162.408 69.4082 163.245 69.4082H171.848C172.334 69.4082 172.8 69.4881 173.219 69.6479C173.638 69.8076 173.999 70.04 174.304 70.3378L174.304 70.3451ZM193.224 92.3215H191.14C190.94 92.3215 190.759 92.3869 190.626 92.4885C190.493 92.5902 190.407 92.7282 190.407 92.8807V96.0545C190.407 96.207 190.493 96.345 190.626 96.4467C190.759 96.5484 190.94 96.6065 191.14 96.6065H193.224C193.405 96.6065 193.576 96.5556 193.709 96.4685L193.738 96.4394C193.871 96.3377 193.957 96.1997 193.957 96.0472V92.8735C193.957 92.721 193.871 92.583 193.738 92.4813C193.605 92.3796 193.424 92.3215 193.224 92.3215ZM178.444 99.5044C176.94 98.3569 174.856 97.6451 172.562 97.6451C170.269 97.6451 168.184 98.3569 166.681 99.5044C165.177 100.652 164.244 102.243 164.244 103.993C164.244 105.743 165.177 107.334 166.681 108.481C168.184 109.629 170.269 110.341 172.562 110.341C174.856 110.341 176.94 109.629 178.444 108.481C179.948 107.334 180.88 105.743 180.88 103.993C180.88 102.242 179.948 100.652 178.444 99.5044ZM172.562 96.1345C169.717 96.1345 167.147 97.0133 165.282 98.4368C163.635 99.6932 162.55 101.371 162.312 103.237H156.164C156.117 103.237 156.069 103.223 156.031 103.201L156.012 103.187C155.974 103.157 155.946 103.114 155.946 103.063V66.8075C155.946 66.7712 155.965 66.7349 155.993 66.7059L156.012 66.6913C156.05 66.6623 156.107 66.6405 156.174 66.6405H174.941C174.989 66.6405 175.027 66.6478 175.046 66.655C175.065 66.6623 175.094 66.6841 175.122 66.7059L192.9 84.1437C192.986 84.2308 193.395 84.7319 193.69 85.4001C193.852 85.7705 193.976 86.1772 193.976 86.5839V90.8835C193.738 90.8326 193.5 90.8036 193.243 90.8036H191.159C190.416 90.8036 189.731 91.036 189.246 91.4137C188.751 91.7913 188.446 92.307 188.446 92.8735V96.0472C188.446 96.6137 188.751 97.1366 189.246 97.507C189.741 97.8847 190.416 98.1171 191.159 98.1171H193.243C193.5 98.1171 193.738 98.0881 193.976 98.0372V101.611C193.976 102.032 193.719 102.438 193.309 102.744C192.9 103.041 192.348 103.23 191.72 103.23H182.841C182.603 101.364 181.518 99.686 179.871 98.4295C178.006 97.006 175.436 96.1272 172.591 96.1272L172.562 96.1345ZM110.684 99.5044C109.18 98.3569 107.096 97.6451 104.802 97.6451C102.508 97.6451 100.424 98.3569 98.9204 99.5044C97.4167 100.652 96.484 102.243 96.484 103.993C96.484 105.743 97.4167 107.334 98.9204 108.481C100.424 109.629 102.508 110.341 104.802 110.341C107.096 110.341 109.18 109.629 110.684 108.481C112.187 107.334 113.12 105.743 113.12 103.993C113.12 102.242 112.187 100.652 110.684 99.5044ZM165.967 88.1454H170.802C171.344 88.1454 171.792 87.8041 171.792 87.3901C171.792 86.9761 171.344 86.6348 170.802 86.6348H165.967C165.425 86.6348 164.977 86.9761 164.977 87.3901C164.977 87.8041 165.425 88.1454 165.967 88.1454ZM174.447 102.562C174.923 102.925 175.227 103.433 175.227 103.993C175.227 104.552 174.932 105.06 174.447 105.423C173.971 105.787 173.305 106.019 172.572 106.019C171.839 106.019 171.173 105.794 170.697 105.423C170.221 105.06 169.917 104.552 169.917 103.993C169.917 103.433 170.212 102.925 170.697 102.562C171.173 102.199 171.839 101.966 172.572 101.966C173.305 101.966 173.971 102.192 174.447 102.562ZM172.572 100.456C173.847 100.456 175.008 100.848 175.846 101.494C176.684 102.133 177.207 103.019 177.207 103.993C177.207 104.966 176.693 105.852 175.846 106.491C175.009 107.13 173.847 107.53 172.572 107.53C171.297 107.53 170.136 107.138 169.298 106.491C168.461 105.852 167.937 104.966 167.937 103.993C167.937 103.02 168.451 102.134 169.298 101.494C170.136 100.855 171.297 100.456 172.572 100.456ZM106.676 102.562C107.152 102.925 107.456 103.433 107.456 103.993C107.456 104.552 107.161 105.06 106.676 105.423C106.2 105.787 105.534 106.019 104.801 106.019C104.068 106.019 103.402 105.794 102.926 105.423C102.45 105.06 102.146 104.552 102.146 103.993C102.146 103.433 102.441 102.925 102.926 102.562C103.402 102.199 104.068 101.966 104.801 101.966C105.534 101.966 106.2 102.192 106.676 102.562ZM104.801 100.456C106.076 100.456 107.237 100.848 108.075 101.494C108.912 102.133 109.436 103.019 109.436 103.993C109.436 104.966 108.922 105.852 108.075 106.491C107.237 107.13 106.076 107.53 104.801 107.53C103.526 107.53 102.364 107.138 101.527 106.491C100.689 105.852 100.166 104.966 100.166 103.993C100.166 103.02 100.68 102.134 101.527 101.494C102.364 100.855 103.525 100.456 104.801 100.456ZM153.967 88.2109V102.715C153.967 102.911 153.9 103.078 153.805 103.187C153.786 103.216 153.862 103.23 153.824 103.23H115.052C114.814 101.364 113.729 99.6861 112.082 98.4296C110.217 97.0061 107.647 96.1273 104.802 96.1273C101.956 96.1273 99.3863 97.0061 97.521 98.4296C95.8746 99.6861 94.7896 101.364 94.5516 103.23H84.6539C83.9401 103.23 83.2644 103.02 82.7885 102.635C82.3412 102.279 82.0557 101.763 82.0557 101.11V88.1964H153.967L153.967 88.2109ZM82.055 86.7002H153.967V66.161C153.795 65.8995 153.586 65.6744 153.329 65.4928C153.063 65.304 152.748 65.1587 152.387 65.0498H83.4158C83.1208 65.1006 82.8163 65.2459 82.5688 65.4565C82.3023 65.6744 82.112 65.9431 82.0549 66.2118V86.7064L82.055 86.7002ZM97.8913 29.5856L99.8423 24.204C99.8709 24.1386 99.9089 24.0805 99.9661 24.0297C100.023 23.9861 100.09 23.9498 100.175 23.9208L119.343 18.1833C119.447 18.1542 119.562 18.147 119.666 18.1615C119.771 18.176 119.866 18.2196 119.942 18.2849C120.028 18.3503 120.076 18.4229 120.095 18.5028C120.114 18.5827 120.104 18.6626 120.057 18.7498L116.154 25.642C116.135 25.6783 116.107 25.7147 116.097 25.751L98.2434 57.2784C98.2054 57.3365 98.1673 57.3874 98.1102 57.4237C98.0531 57.46 97.9865 57.4891 97.9008 57.5108L87.8223 59.9076C87.7176 59.9294 87.6225 59.9367 87.5273 59.9149C87.4321 59.9003 87.3465 59.864 87.2799 59.8059C87.2037 59.7478 87.1466 59.6825 87.1276 59.6171C87.0991 59.5517 87.1086 59.4718 87.1371 59.392L97.8915 29.6513C97.901 29.6367 97.901 29.6149 97.9105 29.6004L97.8913 29.5856ZM1.17988 101.175C0.646929 101.254 0.123501 100.993 0.0188108 100.586C-0.0858797 100.18 0.256739 99.7801 0.789701 99.7002C6.91862 98.7415 9.34548 100.107 11.5631 101.349C13.5807 102.482 15.3889 103.499 21.0325 101.625C22.1745 101.247 23.1072 100.833 23.9352 100.47C27.4659 98.9158 29.5692 97.9863 37.7825 101.487C41.6083 103.114 44.3302 101.923 46.9758 100.761C50.2401 99.3298 53.4188 97.9355 58.1775 100.499C59.3671 101.138 62.2699 101.93 65.1155 101.908C66.9618 101.894 68.7511 101.53 69.9123 100.535C70.2739 100.223 70.8925 100.194 71.3017 100.47C71.711 100.746 71.749 101.218 71.3874 101.53C69.7981 102.903 67.4853 103.397 65.1347 103.411C61.8607 103.433 58.4632 102.489 57.0453 101.727C53.3147 99.722 50.6783 100.877 47.9564 102.068C44.8349 103.433 41.618 104.842 36.8215 102.801C29.5789 99.7221 27.8374 100.492 24.9157 101.777C24.0211 102.17 23.0409 102.605 21.8132 103.012C15.1322 105.234 12.8957 103.978 10.3928 102.576C8.50841 101.523 6.4527 100.361 1.18041 101.189L1.17988 101.175Z"
        fill="#4174A8"
      />
    </svg>
  );
}