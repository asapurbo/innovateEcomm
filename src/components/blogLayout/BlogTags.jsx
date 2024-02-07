import BlogTxtWithBar from "../blogComponents/BlogTxtWithBar";
import Flex from "../commonComponent/Flex";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const BlogTags = () => {
  return (
    <div className="mt-32">
      <div>
        <BlogTxtWithBar text="Popular Tags" />
      </div>
      <div className="mt-20">
        <Flex className="flex-wrap gap-10">
          <SecondaryHeading
            text="Marketing"
            className="text-text-32 font-medium py-4 px-8 bg-navBgColor"
          />
          <SecondaryHeading
            text="Development"
            className="text-text-32 font-medium py-4 px-8 bg-navBgColor"
          />
          <SecondaryHeading
            text="Digital Agency"
            className="text-text-32 font-medium py-4 px-8 bg-navBgColor"
          />
          <SecondaryHeading
            text="Consultency"
            className="text-text-32 font-medium py-4 px-8 bg-navBgColor"
          />
          <SecondaryHeading
            text="Agency"
            className="text-text-32 font-medium py-4 px-8 bg-navBgColor"
          />
        </Flex>
      </div>
    </div>
  );
};

export default BlogTags;
