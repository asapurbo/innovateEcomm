import BlogContentCard from "../blogComponents/BlogContentCard";
import BlogSequence from "../blogComponents/BlogSequence";
import BlogContentCardData from "../blogComponents/BlogContentCardData";
import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import BlogNewsCard from "../blogComponents/BlogNewsCard";
import BlogTxtWithBar from "../blogComponents/BlogTxtWithBar";
import BlogCategory from "./BlogCategory";
import BlogTags from "./BlogTags";

const BlogContent = () => {
  const { blogContent: data, newsData: news } = BlogContentCardData();

  return (
    <section className="py-s120">
      <Container>
        <Flex className="justify-between">
          <div>
            <div>
              {data.map((item, index) => (
                <BlogContentCard
                  key={index}
                  headTxt={item.headTxt}
                  contentSrc={item.contentSrc}
                  alt={item.alt}
                  userSrc={item.userSrc}
                  paraTxt={item.paraTxt}
                  userTxt={item.userTxt}
                  date={item.date}
                />
              ))}
            </div>
            <Flex className="items-center gap-x-8">
              <BlogSequence text="1" to="" />
              <BlogSequence text="2" to="" />
              <div className="text-[#B7B3BD]">.......</div>
              <BlogSequence text="7" to="" />
            </Flex>
          </div>
          {/* ---------------- */}
          <div className="w-s632">
            <div>
              <div>
                <BlogTxtWithBar text="Latest News" />
              </div>
              <div>
                {news.map((item, index) => (
                  <BlogNewsCard
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    headTxt={item.headTxt}
                    paraTxt={item.paraTxt}
                    newsUserSrc={item.newsUserSrc}
                    newsUserTxt={item.newsUserTxt}
                    newsDate={item.newsDate}
                  />
                ))}
              </div>
            </div>

            <div>
              <BlogCategory/>
            </div>
            <div>
              <BlogTags/>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default BlogContent;
