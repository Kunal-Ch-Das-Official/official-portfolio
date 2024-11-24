import React, { useEffect, useState } from "react";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import BlogCard from "./BlogCard";
import PageLoader from "../../../utils/page-loader/PageLoader";
interface ArticlesInterface {
  _id: string;
  blogTitle: string;
  authorName: string;
  supportingImgUrl: string;
  statement: string;
  createdAt: Date;
}
const BlogDisplayer: React.FC = () => {
  const [allArticles, setArticles] = useState<ArticlesInterface[]>([]);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);
        const response = await axios.get(envConfig.blogArticleUrl);
        if (response) {
          setArticles(response.data);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(`Unable to fetch blog data due to:${error.message}`);
      } finally {
        setPending(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {pending && <PageLoader />}
      <section>
        {allArticles &&
          allArticles.map((article, index) => (
            <BlogCard
              key={index}
              writerName={article.authorName}
              imageUrl={article.supportingImgUrl}
              posedIn={article.createdAt}
              title={article.blogTitle}
              briefDescription={article.statement}
              readArticleLink={"/"}
            />
          ))}
      </section>
    </main>
  );
};

export default BlogDisplayer;
