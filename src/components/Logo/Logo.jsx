const Logo = ({className}) => {
  return (
    <div>
      <svg
        width="111"
        height="60"
        viewBox="0 0 111 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.68024 29.5971C4.15805 29.5971 5.36048 30.7982 5.36048 32.276C5.36048 33.7579 4.15805 34.959 2.68024 34.959C1.1997 34.959 0 33.7579 0 32.276C0 30.7982 1.1997 29.5971 2.68024 29.5971ZM6.64061 38.8021C9.34266 38.8021 11.5362 40.9943 11.5362 43.695C11.5362 46.397 9.34266 48.5879 6.64061 48.5879C3.93856 48.5879 1.74911 46.397 1.74911 43.695C1.74911 40.9957 3.93856 38.8021 6.64061 38.8021ZM17.3629 48.3588C20.065 48.3588 22.2544 50.5496 22.2544 53.2544C22.2544 55.9551 20.065 58.1473 17.3629 58.1473C14.6609 58.1473 12.4673 55.9551 12.4673 53.2544C12.4673 50.5496 14.6609 48.3588 17.3629 48.3588ZM32.6196 52.7745C34.6141 52.7745 36.2323 54.3928 36.2323 56.3873C36.2323 58.3818 34.6141 60 32.6196 60C30.6251 60 29.0068 58.3818 29.0068 56.3873C29.0068 54.3941 30.6251 52.7745 32.6196 52.7745ZM46.9587 42.2976C49.6608 42.2976 51.8543 44.4912 51.8543 47.1932C51.8543 49.8953 49.6621 52.0861 46.9587 52.0861C44.2594 52.0861 42.0672 49.8953 42.0672 47.1932C42.0672 44.4912 44.2594 42.2976 46.9587 42.2976ZM40.4258 1.80091C42.7489 1.80091 44.6275 3.6809 44.6275 6.00123C44.6275 8.32019 42.7489 10.2015 40.4258 10.2015C38.1096 10.2015 36.2282 8.32156 36.2282 6.00123C36.2282 3.6809 38.1109 1.80091 40.4258 1.80091ZM24.7043 0C26.5679 0 28.0825 1.51326 28.0825 3.37825C28.0825 5.2446 26.5693 6.75922 24.7043 6.75922C22.8407 6.75922 21.326 5.24324 21.326 3.37825C21.326 1.51326 22.8393 0 24.7043 0ZM10.9541 7.45723C12.4346 7.45723 13.6343 8.65829 13.6343 10.1361C13.6343 11.618 12.4346 12.8191 10.9541 12.8191C9.47218 12.8191 8.27384 11.618 8.27384 10.1361C8.27384 8.65829 9.47218 7.45723 10.9541 7.45723ZM50.9177 11.1109C53.7575 11.1109 56.0628 13.4148 56.0628 16.2559C56.0628 19.097 53.7575 21.4024 50.9177 21.4024C48.0739 21.4024 45.7699 19.097 45.7699 16.2559C45.7699 13.4148 48.0739 11.1109 50.9177 11.1109ZM3.37825 19.4597C4.53841 19.4597 5.47772 20.399 5.47772 21.5564C5.47772 22.7139 4.53841 23.6518 3.37825 23.6518C2.22217 23.6518 1.28286 22.7139 1.28286 21.5564C1.28286 20.399 2.22217 19.4597 3.37825 19.4597Z"
          fill="#FF5538"
        />
        <path
          d="M102.266 30.662C102.082 30.0335 101.714 29.5223 101.164 29.1269C100.615 28.7329 99.9753 28.5366 99.2487 28.5366C98.4607 28.5366 97.7681 28.7588 97.1751 29.2005C96.8029 29.4759 96.4566 29.9654 96.139 30.662H102.266ZM105.109 32.891H96.0122C96.1458 33.6912 96.5003 34.3293 97.0701 34.8023C97.6373 35.2754 98.3639 35.514 99.2487 35.514C100.307 35.514 101.217 35.1418 101.977 34.4029L104.365 35.5249C103.769 36.366 103.058 36.9904 102.226 37.3967C101.396 37.8016 100.413 38.002 99.2705 38.002C97.4996 38.002 96.0586 37.4444 94.9502 36.3292C93.8337 35.2113 93.2774 33.8126 93.2774 32.133C93.2774 30.4112 93.8337 28.9851 94.9434 27.8468C96.0558 26.7112 97.4437 26.1413 99.1164 26.1413C100.89 26.1413 102.335 26.7098 103.452 27.8468C104.561 28.9851 105.12 30.4861 105.12 32.3525L105.109 32.891ZM87.782 22.2764H90.604V26.429H92.2809V28.8679H90.604V37.7102H87.782V28.8679H86.3301V26.429H87.782V22.2764ZM78.7829 28.7534C77.9049 28.7534 77.1755 29.0601 76.5975 29.6804C76.0154 30.3007 75.7264 31.0928 75.7264 32.058C75.7264 33.0369 76.0195 33.8357 76.6111 34.4656C77.2001 35.0968 77.9295 35.4104 78.7938 35.4104C79.6867 35.4104 80.4229 35.0995 81.0119 34.4806C81.6008 33.8644 81.8939 33.0532 81.8939 32.0498C81.8939 31.071 81.6008 30.2721 81.0119 29.6695C80.4229 29.0574 79.6827 28.7534 78.7829 28.7534ZM81.7603 26.429H84.5823V37.7102H81.7603V36.5174C81.2082 37.0449 80.6506 37.4199 80.0944 37.6557C79.5381 37.8834 78.9342 38.0006 78.2839 38.0006C76.8238 38.0006 75.5669 37.4335 74.5008 36.306C73.4347 35.1772 72.9044 33.7717 72.9044 32.0907C72.9044 30.3512 73.417 28.9238 74.4476 27.81C75.4769 26.6989 76.7311 26.1413 78.2007 26.1413C78.8797 26.1413 79.5122 26.2695 80.1121 26.5244C80.7051 26.7807 81.2532 27.1651 81.759 27.6777V26.429H81.7603ZM60.3225 26.429H63.2018L66.0551 33.0859L68.8908 26.429H71.766L66.9604 37.7102H65.1281L60.3225 26.429ZM53.2811 28.8052C52.399 28.8052 51.6656 29.1119 51.0848 29.7227C50.4999 30.3362 50.2109 31.1173 50.2109 32.0703C50.2109 33.0532 50.4959 33.8467 51.078 34.4547C51.656 35.0641 52.3827 35.3695 53.2674 35.3695C54.1522 35.3695 54.8898 35.0627 55.4787 34.4438C56.0636 33.8276 56.3608 33.0382 56.3608 32.0703C56.3608 31.1037 56.0717 30.3184 55.4937 29.7131C54.9143 29.1078 54.1768 28.8052 53.2811 28.8052ZM53.2347 26.1399C54.3008 26.1399 55.3042 26.4072 56.2408 26.9375C57.176 27.4664 57.9067 28.1931 58.433 29.1038C58.9606 30.0158 59.221 31.0001 59.221 32.0566C59.221 33.1241 58.9537 34.1193 58.4302 35.045C57.8986 35.972 57.1801 36.6946 56.2667 37.2181C55.3533 37.7375 54.3485 38.0006 53.2497 38.0006C51.6315 38.0006 50.2518 37.4239 49.1053 36.2733C47.9642 35.1241 47.3889 33.724 47.3889 32.0812C47.3889 30.3184 48.0392 28.8502 49.3289 27.675C50.4631 26.6539 51.7637 26.1399 53.2347 26.1399ZM35.1956 26.429H38.0135V27.5837C38.6597 27.0397 39.2378 26.6662 39.7654 26.4576C40.282 26.2449 40.8165 26.1399 41.3618 26.1399C42.4851 26.1399 43.4313 26.5326 44.2152 27.3124C44.8723 27.9749 45.1981 28.9565 45.1981 30.2585V37.7102H42.3992V32.7683C42.3992 31.4186 42.342 30.5229 42.2179 30.0799C42.0993 29.6395 41.8853 29.3028 41.5854 29.0697C41.2854 28.8379 40.9173 28.7234 40.4729 28.7234C39.8949 28.7234 39.4068 28.9129 38.9951 29.3001C38.5834 29.6804 38.2944 30.2121 38.1389 30.8897C38.0558 31.2441 38.0122 32.0062 38.0122 33.1814V37.7102H35.1942V26.429H35.1956ZM22.4501 26.429H25.2722V27.5837C25.9156 27.0397 26.4964 26.6662 27.0213 26.4576C27.542 26.2449 28.0765 26.1399 28.6218 26.1399C29.7424 26.1399 30.6913 26.5326 31.4724 27.3124C32.1295 27.9749 32.4554 28.9565 32.4554 30.2585V37.7102H29.6592V32.7683C29.6592 31.4186 29.5979 30.5229 29.4752 30.0799C29.3566 29.6395 29.1466 29.3028 28.8426 29.0697C28.5427 28.8379 28.1746 28.7234 27.7329 28.7234C27.1549 28.7234 26.6641 28.9129 26.251 29.3001C25.8434 29.6804 25.5544 30.2121 25.3949 30.8897C25.3158 31.2441 25.2722 32.0062 25.2722 33.1814V37.7102H22.4501V26.429ZM16.6152 22.4591H19.4945V37.7102H16.6152V22.4591Z"
          fill="#324857"
        />
        <path
          d="M62.4599 42.7951C62.5199 42.7201 62.5924 42.6826 62.6774 42.6826C62.7474 42.6826 62.8099 42.7101 62.8649 42.7651C62.9199 42.8201 62.9474 42.8876 62.9474 42.9676C62.9474 43.0426 62.9249 43.1051 62.8799 43.1551L61.0574 45.4576V47.7226C61.0574 47.8226 61.0274 47.9001 60.9674 47.9551C60.9124 48.0101 60.8399 48.0376 60.7499 48.0376C60.6599 48.0376 60.5849 48.0101 60.5249 47.9551C60.4699 47.9001 60.4424 47.8226 60.4424 47.7226V45.4501L58.6199 43.1551C58.5699 43.1001 58.5449 43.0376 58.5449 42.9676C58.5449 42.8876 58.5724 42.8201 58.6274 42.7651C58.6874 42.7101 58.7549 42.6826 58.8299 42.6826C58.9149 42.6826 58.9874 42.7201 59.0474 42.7951L60.7574 44.9776L62.4599 42.7951Z"
          fill="#FF5538"
        />
        <path
          d="M64.5105 48.0526C64.1655 48.0526 63.8605 47.9751 63.5955 47.8201C63.3355 47.6651 63.133 47.4451 62.988 47.1601C62.848 46.8701 62.778 46.5351 62.778 46.1551C62.778 45.7751 62.848 45.4426 62.988 45.1576C63.133 44.8676 63.3355 44.6451 63.5955 44.4901C63.8605 44.3351 64.1655 44.2576 64.5105 44.2576C64.8555 44.2576 65.1605 44.3351 65.4255 44.4901C65.6905 44.6451 65.893 44.8676 66.033 45.1576C66.178 45.4426 66.2505 45.7751 66.2505 46.1551C66.2505 46.5351 66.178 46.8701 66.033 47.1601C65.893 47.4451 65.6905 47.6651 65.4255 47.8201C65.1605 47.9751 64.8555 48.0526 64.5105 48.0526ZM64.5105 47.5501C64.8705 47.5501 65.1455 47.4326 65.3355 47.1976C65.5305 46.9576 65.628 46.6101 65.628 46.1551C65.628 45.7101 65.5305 45.3676 65.3355 45.1276C65.1405 44.8826 64.8655 44.7601 64.5105 44.7601C64.1555 44.7601 63.8805 44.8826 63.6855 45.1276C63.4905 45.3676 63.393 45.7101 63.393 46.1551C63.393 46.6051 63.488 46.9501 63.678 47.1901C63.873 47.4301 64.1505 47.5501 64.5105 47.5501Z"
          fill="#FF5538"
        />
        <path
          d="M69.9307 44.2726C70.0257 44.2726 70.0982 44.3001 70.1482 44.3551C70.2032 44.4101 70.2307 44.4826 70.2307 44.5726V47.7451C70.2307 47.8301 70.2032 47.9001 70.1482 47.9551C70.0982 48.0101 70.0257 48.0376 69.9307 48.0376C69.8407 48.0376 69.7682 48.0126 69.7132 47.9626C69.6632 47.9076 69.6382 47.8376 69.6382 47.7526V47.3776C69.5232 47.5976 69.3607 47.7651 69.1507 47.8801C68.9457 47.9951 68.7132 48.0526 68.4532 48.0526C68.0182 48.0526 67.6907 47.9326 67.4707 47.6926C67.2507 47.4476 67.1407 47.0876 67.1407 46.6126V44.5726C67.1407 44.4826 67.1682 44.4101 67.2232 44.3551C67.2782 44.3001 67.3532 44.2726 67.4482 44.2726C67.5432 44.2726 67.6157 44.3001 67.6657 44.3551C67.7207 44.4101 67.7482 44.4826 67.7482 44.5726V46.5976C67.7482 46.9226 67.8132 47.1626 67.9432 47.3176C68.0732 47.4676 68.2782 47.5426 68.5582 47.5426C68.8782 47.5426 69.1357 47.4401 69.3307 47.2351C69.5257 47.0251 69.6232 46.7501 69.6232 46.4101V44.5726C69.6232 44.4826 69.6507 44.4101 69.7057 44.3551C69.7607 44.3001 69.8357 44.2726 69.9307 44.2726Z"
          fill="#FF5538"
        />
        <path
          d="M73.1673 44.2726C73.3773 44.2576 73.4823 44.3426 73.4823 44.5276C73.4823 44.6076 73.4598 44.6726 73.4148 44.7226C73.3698 44.7676 73.2923 44.7951 73.1823 44.8051L72.9573 44.8276C72.6223 44.8576 72.3723 44.9776 72.2073 45.1876C72.0473 45.3926 71.9673 45.6351 71.9673 45.9151V47.7376C71.9673 47.8376 71.9398 47.9126 71.8848 47.9626C71.8298 48.0126 71.7573 48.0376 71.6673 48.0376C71.5773 48.0376 71.5023 48.0126 71.4423 47.9626C71.3873 47.9076 71.3598 47.8326 71.3598 47.7376V44.5726C71.3598 44.4776 71.3898 44.4051 71.4498 44.3551C71.5098 44.3001 71.5823 44.2726 71.6673 44.2726C71.7473 44.2726 71.8148 44.3001 71.8698 44.3551C71.9248 44.4051 71.9523 44.4751 71.9523 44.5651V44.9851C72.0573 44.7651 72.2048 44.5976 72.3948 44.4826C72.5898 44.3676 72.8123 44.3001 73.0623 44.2801L73.1673 44.2726Z"
          fill="#FF5538"
        />
        <path
          d="M77.7149 48.0601C77.3399 48.0601 76.9799 48.0051 76.6349 47.8951C76.2949 47.7801 76.0224 47.6276 75.8174 47.4376C75.7424 47.3676 75.7049 47.2801 75.7049 47.1751C75.7049 47.1051 75.7249 47.0451 75.7649 46.9951C75.8049 46.9401 75.8524 46.9126 75.9074 46.9126C75.9724 46.9126 76.0424 46.9401 76.1174 46.9951C76.5824 47.3551 77.1124 47.5351 77.7074 47.5351C78.1374 47.5351 78.4674 47.4526 78.6974 47.2876C78.9274 47.1226 79.0424 46.8876 79.0424 46.5826C79.0424 46.4076 78.9874 46.2676 78.8774 46.1626C78.7674 46.0526 78.6224 45.9651 78.4424 45.9001C78.2624 45.8351 78.0199 45.7676 77.7149 45.6976C77.3049 45.6026 76.9674 45.5026 76.7024 45.3976C76.4424 45.2926 76.2299 45.1426 76.0649 44.9476C75.9049 44.7526 75.8249 44.4976 75.8249 44.1826C75.8249 43.8826 75.9049 43.6176 76.0649 43.3876C76.2299 43.1526 76.4574 42.9726 76.7474 42.8476C77.0424 42.7176 77.3774 42.6526 77.7524 42.6526C78.1024 42.6526 78.4274 42.7076 78.7274 42.8176C79.0324 42.9226 79.2874 43.0751 79.4924 43.2751C79.5724 43.3551 79.6124 43.4426 79.6124 43.5376C79.6124 43.6076 79.5924 43.6701 79.5524 43.7251C79.5124 43.7751 79.4649 43.8001 79.4099 43.8001C79.3549 43.8001 79.2824 43.7726 79.1924 43.7176C78.9474 43.5176 78.7199 43.3776 78.5099 43.2976C78.2999 43.2176 78.0474 43.1776 77.7524 43.1776C77.3374 43.1776 77.0149 43.2651 76.7849 43.4401C76.5549 43.6101 76.4399 43.8501 76.4399 44.1601C76.4399 44.4251 76.5399 44.6251 76.7399 44.7601C76.9449 44.8901 77.2574 45.0051 77.6774 45.1051C78.1324 45.2151 78.4899 45.3176 78.7499 45.4126C79.0099 45.5026 79.2249 45.6401 79.3949 45.8251C79.5699 46.0101 79.6574 46.2576 79.6574 46.5676C79.6574 46.8626 79.5749 47.1226 79.4099 47.3476C79.2499 47.5726 79.0224 47.7476 78.7274 47.8726C78.4324 47.9976 78.0949 48.0601 77.7149 48.0601Z"
          fill="#FF5538"
        />
        <path
          d="M82.0813 48.0526C81.7363 48.0526 81.4313 47.9751 81.1663 47.8201C80.9063 47.6651 80.7038 47.4451 80.5588 47.1601C80.4188 46.8701 80.3488 46.5351 80.3488 46.1551C80.3488 45.7751 80.4188 45.4426 80.5588 45.1576C80.7038 44.8676 80.9063 44.6451 81.1663 44.4901C81.4313 44.3351 81.7363 44.2576 82.0813 44.2576C82.4263 44.2576 82.7313 44.3351 82.9963 44.4901C83.2613 44.6451 83.4638 44.8676 83.6038 45.1576C83.7488 45.4426 83.8213 45.7751 83.8213 46.1551C83.8213 46.5351 83.7488 46.8701 83.6038 47.1601C83.4638 47.4451 83.2613 47.6651 82.9963 47.8201C82.7313 47.9751 82.4263 48.0526 82.0813 48.0526ZM82.0813 47.5501C82.4413 47.5501 82.7163 47.4326 82.9063 47.1976C83.1013 46.9576 83.1988 46.6101 83.1988 46.1551C83.1988 45.7101 83.1013 45.3676 82.9063 45.1276C82.7113 44.8826 82.4363 44.7601 82.0813 44.7601C81.7263 44.7601 81.4513 44.8826 81.2563 45.1276C81.0613 45.3676 80.9638 45.7101 80.9638 46.1551C80.9638 46.6051 81.0588 46.9501 81.2488 47.1901C81.4438 47.4301 81.7213 47.5501 82.0813 47.5501Z"
          fill="#FF5538"
        />
        <path
          d="M85.034 48.0376C84.944 48.0376 84.869 48.0126 84.809 47.9626C84.754 47.9076 84.7265 47.8326 84.7265 47.7376V42.9751C84.7265 42.8801 84.754 42.8076 84.809 42.7576C84.869 42.7026 84.944 42.6751 85.034 42.6751C85.119 42.6751 85.189 42.7026 85.244 42.7576C85.304 42.8076 85.334 42.8801 85.334 42.9751V47.7376C85.334 47.8326 85.304 47.9076 85.244 47.9626C85.189 48.0126 85.119 48.0376 85.034 48.0376Z"
          fill="#FF5538"
        />
        <path
          d="M89.2446 44.2726C89.3396 44.2726 89.4121 44.3001 89.4621 44.3551C89.5171 44.4101 89.5446 44.4826 89.5446 44.5726V47.7451C89.5446 47.8301 89.5171 47.9001 89.4621 47.9551C89.4121 48.0101 89.3396 48.0376 89.2446 48.0376C89.1546 48.0376 89.0821 48.0126 89.0271 47.9626C88.9771 47.9076 88.9521 47.8376 88.9521 47.7526V47.3776C88.8371 47.5976 88.6746 47.7651 88.4646 47.8801C88.2596 47.9951 88.0271 48.0526 87.7671 48.0526C87.3321 48.0526 87.0046 47.9326 86.7846 47.6926C86.5646 47.4476 86.4546 47.0876 86.4546 46.6126V44.5726C86.4546 44.4826 86.4821 44.4101 86.5371 44.3551C86.5921 44.3001 86.6671 44.2726 86.7621 44.2726C86.8571 44.2726 86.9296 44.3001 86.9796 44.3551C87.0346 44.4101 87.0621 44.4826 87.0621 44.5726V46.5976C87.0621 46.9226 87.1271 47.1626 87.2571 47.3176C87.3871 47.4676 87.5921 47.5426 87.8721 47.5426C88.1921 47.5426 88.4496 47.4401 88.6446 47.2351C88.8396 47.0251 88.9371 46.7501 88.9371 46.4101V44.5726C88.9371 44.4826 88.9646 44.4101 89.0196 44.3551C89.0746 44.3001 89.1496 44.2726 89.2446 44.2726Z"
          fill="#FF5538"
        />
        <path
          d="M92.3612 47.5576C92.5362 47.5726 92.6237 47.6526 92.6237 47.7976C92.6237 47.8826 92.5913 47.9476 92.5262 47.9926C92.4663 48.0326 92.3737 48.0476 92.2487 48.0376L92.0462 48.0226C91.6463 47.9926 91.3512 47.8726 91.1613 47.6626C90.9712 47.4526 90.8763 47.1351 90.8763 46.7101V44.8276H90.3737C90.2887 44.8276 90.2213 44.8076 90.1712 44.7676C90.1263 44.7226 90.1038 44.6651 90.1038 44.5951C90.1038 44.5201 90.1263 44.4601 90.1712 44.4151C90.2213 44.3701 90.2887 44.3476 90.3737 44.3476H90.8763V43.5001C90.8763 43.4051 90.9038 43.3326 90.9587 43.2826C91.0137 43.2276 91.0887 43.2001 91.1838 43.2001C91.2738 43.2001 91.3462 43.2276 91.4012 43.2826C91.4562 43.3326 91.4837 43.4051 91.4837 43.5001V44.3476H92.3162C92.3962 44.3476 92.4587 44.3701 92.5037 44.4151C92.5537 44.4601 92.5788 44.5201 92.5788 44.5951C92.5788 44.6651 92.5537 44.7226 92.5037 44.7676C92.4587 44.8076 92.3962 44.8276 92.3162 44.8276H91.4837V46.7401C91.4837 47.0151 91.5387 47.2151 91.6488 47.3401C91.7637 47.4601 91.9338 47.5276 92.1587 47.5426L92.3612 47.5576Z"
          fill="#FF5538"
        />
        <path
          d="M93.5301 48.0376C93.4401 48.0376 93.3651 48.0126 93.3051 47.9626C93.2501 47.9076 93.2226 47.8326 93.2226 47.7376V44.5726C93.2226 44.4776 93.2501 44.4051 93.3051 44.3551C93.3651 44.3001 93.4401 44.2726 93.5301 44.2726C93.6201 44.2726 93.6926 44.3001 93.7476 44.3551C93.8026 44.4051 93.8301 44.4776 93.8301 44.5726V47.7376C93.8301 47.8376 93.8026 47.9126 93.7476 47.9626C93.6926 48.0126 93.6201 48.0376 93.5301 48.0376ZM93.5301 43.4851C93.4101 43.4851 93.3126 43.4501 93.2376 43.3801C93.1626 43.3101 93.1251 43.2176 93.1251 43.1026C93.1251 42.9926 93.1626 42.9026 93.2376 42.8326C93.3126 42.7626 93.4101 42.7276 93.5301 42.7276C93.6501 42.7276 93.7476 42.7626 93.8226 42.8326C93.8976 42.9026 93.9351 42.9926 93.9351 43.1026C93.9351 43.2176 93.8976 43.3101 93.8226 43.3801C93.7476 43.4501 93.6501 43.4851 93.5301 43.4851Z"
          fill="#FF5538"
        />
        <path
          d="M96.4807 48.0526C96.1357 48.0526 95.8307 47.9751 95.5657 47.8201C95.3057 47.6651 95.1032 47.4451 94.9582 47.1601C94.8182 46.8701 94.7482 46.5351 94.7482 46.1551C94.7482 45.7751 94.8182 45.4426 94.9582 45.1576C95.1032 44.8676 95.3057 44.6451 95.5657 44.4901C95.8307 44.3351 96.1357 44.2576 96.4807 44.2576C96.8257 44.2576 97.1307 44.3351 97.3957 44.4901C97.6607 44.6451 97.8632 44.8676 98.0032 45.1576C98.1482 45.4426 98.2207 45.7751 98.2207 46.1551C98.2207 46.5351 98.1482 46.8701 98.0032 47.1601C97.8632 47.4451 97.6607 47.6651 97.3957 47.8201C97.1307 47.9751 96.8257 48.0526 96.4807 48.0526ZM96.4807 47.5501C96.8407 47.5501 97.1157 47.4326 97.3057 47.1976C97.5007 46.9576 97.5982 46.6101 97.5982 46.1551C97.5982 45.7101 97.5007 45.3676 97.3057 45.1276C97.1107 44.8826 96.8357 44.7601 96.4807 44.7601C96.1257 44.7601 95.8507 44.8826 95.6557 45.1276C95.4607 45.3676 95.3632 45.7101 95.3632 46.1551C95.3632 46.6051 95.4582 46.9501 95.6482 47.1901C95.8432 47.4301 96.1207 47.5501 96.4807 47.5501Z"
          fill="#FF5538"
        />
        <path
          d="M100.963 44.2576C101.838 44.2576 102.276 44.7401 102.276 45.7051V47.7376C102.276 47.8326 102.248 47.9076 102.193 47.9626C102.143 48.0126 102.071 48.0376 101.976 48.0376C101.881 48.0376 101.806 48.0126 101.751 47.9626C101.696 47.9076 101.668 47.8326 101.668 47.7376V45.7426C101.668 45.4026 101.601 45.1551 101.466 45.0001C101.336 44.8451 101.126 44.7676 100.836 44.7676C100.501 44.7676 100.233 44.8701 100.033 45.0751C99.8334 45.2801 99.7334 45.5576 99.7334 45.9076V47.7376C99.7334 47.8326 99.7059 47.9076 99.6509 47.9626C99.6009 48.0126 99.5284 48.0376 99.4334 48.0376C99.3384 48.0376 99.2634 48.0126 99.2084 47.9626C99.1534 47.9076 99.1259 47.8326 99.1259 47.7376V44.5726C99.1259 44.4826 99.1534 44.4101 99.2084 44.3551C99.2634 44.3001 99.3384 44.2726 99.4334 44.2726C99.5234 44.2726 99.5934 44.3001 99.6434 44.3551C99.6984 44.4101 99.7259 44.4801 99.7259 44.5651V44.9476C99.8459 44.7226 100.013 44.5526 100.228 44.4376C100.443 44.3176 100.688 44.2576 100.963 44.2576Z"
          fill="#FF5538"
        />
      </svg>
    </div>
  );
};

export default Logo;