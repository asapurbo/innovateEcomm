/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Color Start
      colors: {
        primaryColor: "#29313D",
        secondaryColor: "#FF5538 !important",
        SWPColor: "rgba(255, 85, 56, 0.4)",
        SWPBgColor: "rgba(255, 255, 255, 1)",
        navBgColor: "#fbf3f0",
        hAboutBg: "rgba(251, 243, 240, 0.80)",
        CpCBg: "#FDF9F8",
        arrowBg: "#FFDDD7",
        pdBg: "#FFD7C8",
        borderColor: "rgba(41, 49, 61, 0.2)",
        afterBg: "#52C5B6",
        iconColor: "#5B5F77",
        notWhite: "#fafafa !important",
        ExperienceBgColor: "#FCF5F3",
        ServicesAgencyBgColor: "#EDF3F7",
        blogBdrColor: "#B7B3BD",
      },
      // Color End
      // Font Size Start
      fontSize: {
        "text-64": "64px",
        "text-28": "28px",
        "text-40": "40px",
        "text-32": "32px",
      },
      // Font Size End

      // Max Width Start
      maxWidth: {
        container: "1408px",
        primaryContainer: "1338px",
      },
      // Max Width End
      // Font Family Start
      fontFamily: {
        pop: ["Poppins"],
        os: ["Open Sans"],
        nun: ["Nunito"],
        int: ["Inter"],
      },
      // Font Family End
      // Line Height Start

      lineHeight: {
        83: "83.2px ",
        67: "67.2px ",
        50: "50.4px ",
        64: "64.8px ",
        57: "57.6px ",
      },
      // Line Height End
      // Spacing Start
      spacing: {
        s14: "14px",
        s199: "199px",
        s296: "296px",
        s771: "771px",
        s547: "547px",
        s450: "450px",
        s120: "120px",
        s570: "570px",
        s10: "10px",
        s60: "60px",
        s693: "693px",
        s810: "810px",
        s374: "374px",
        s330: "330px",
        s260: "260px",
        s230: "230px",
        s550: "550px",
        s849: "849px",
        s210: "210px",
        s130: "130px",
        s150: "150px",
        s100: "100px",
        s1283: "1000px",
        s600: "600px",
        s140: "140px",
        s335: "335px",
        s709: "709px",
        s560:"560px",
        s99: "99px",
        s298: "298px",
        s632: "632px",
        s68: "68px",
        s74: "74px",
        s342: "342px",
        s717: "717px",
        s628: "628px",
        s366: "366px",
        s25: "25px !important",
      },
      // Spacing Start
      // Border Radius Start
      borderRadius: {
        18: "18px",
        br10: "10px",
      },
      // Border Radius End
      // Back Ground Image Start
      backgroundImage: {
        homeBanner: "url('./src/assets/homebanner.png')",
        homeAbout: "url('./src/assets/homeaboutbg.png')",
        counterBg: "url('./src/assets/counterbg.png')",
        projectBg: "url('./src/assets/projectbg.png')",
        primaryBg: "url('./src/assets/primarybg.png')",
        secondaryBg: "url('./src/assets/secondarybg.png')",
        interBg: "url('./src/assets/interbg.png')",
      },
      // Back Ground Image End
      //Box Shadow Start
      boxShadow: {
        social: "0px 44px 40px 0px rgba(0, 0, 0, 0.02)",
        SWPBgShadow: "rgba(0, 0, 0, 0.05)",
      },
      //Box Shadow End
      // Background Size Start

      backgroundSize: {
        48: "48%",
      },
      // Background Size End

      //  Rotate Start
      // Background Size End
      rotate: {
        405: "405deg !important",
        720: "720deg !important",
      },
      // Background Size End
    },
  },
  plugins: [],
};
