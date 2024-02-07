import BlogTxtWithBar from "../blogComponents/BlogTxtWithBar";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const BlogCategory = () => {
  return (
    <div className="mt-32">
      <BlogTxtWithBar text="Category" className="mb-7" />
      <SecondaryHeading text="Business" className="text-text-32 font-medium" />
      <SecondaryHeading
        text="Business Strategy"
        className="text-text-32 font-medium py-5"
      />
      <SecondaryHeading
        text="Digital Marketing"
        className="text-text-32 font-medium"
      />
      <SecondaryHeading
        text="Development"
        className="text-text-32 font-medium py-5"
      />
      <SecondaryHeading
        text="investment"
        className="text-text-32 font-medium"
      />
    </div>
  );
};

export default BlogCategory;
