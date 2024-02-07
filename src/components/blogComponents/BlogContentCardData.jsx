
import contentcd from "../../assets/contentcd.png";
import user from "../../assets/user.png";
import news from "../../assets/news.png";

const BlogContentCardData = () => {
  const blogContent = [
    {
      contentSrc: contentcd,
      alt: "image",
      headTxt: "The hundred of completed works still counting",
      userSrc: user,
      paraTxt:
        "Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.",
      userTxt: "Esther Howard",
      date: "8 Sep, 2021",
    },
    {
      contentSrc: contentcd,
      alt: "image",
      headTxt: "The hundred of completed works still counting",
      userSrc: user,
      paraTxt:
        "Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.",
      userTxt: "Esther Howard",
      date: "8 Sep, 2021",
    },
    {
      contentSrc: contentcd,
      alt: "image",
      headTxt: "The hundred of completed works still counting",
      userSrc: user,
      paraTxt:
        "Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.",
      userTxt: "Esther Howard",
      date: "8 Sep, 2021",
    },
  ];

 const newsData =  [
    {
      src: news,
      alt: "image",
      headTxt: "Online Environments That Work Well",
      paraTxt:
        "Objectively restore stand-alone markets rather than enterprise-wide products. ",
      newsUserSrc: user,
      newsUserTxt: "Esther Howard",
      newsDate: "8 Sep, 2021",
    },
    {
      src: news,
      alt: "image",
      headTxt: "Build Seamless Spreadshet Import Experience",
      paraTxt:
        "Objectively restore stand-alone markets rather than enterprise-wide products. ",
      newsUserSrc: user,
      newsUserTxt: "Esther Howard",
      newsDate: "8 Sep, 2021",
    },
    {
      src: news,
      alt: "image",
      headTxt: "How to Create a Fast WordPress Website",
      paraTxt:
        "Objectively restore stand-alone markets rather than enterprise-wide products. ",
      newsUserSrc: user,
      newsUserTxt: "Esther Howard",
      newsDate: "8 Sep, 2021",
    },
  ];
  return {
    blogContent,
    newsData
  };
};

export default BlogContentCardData;
