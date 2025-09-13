import { useBlogs } from "../shared/BlogContext";
import type { Blog } from "../types";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ onEdit }: { onEdit: (blog: Blog) => void }) => {
  const { blogs, deleteBlog } = useBlogs();
  return <div className="mt-[5rem]">
    {blogs.map(blog => (
      <ArticleCard key={blog.id} article={blog} onDelete={() => deleteBlog(blog.id)} onEdit={() => onEdit(blog)}/>
    ))}
  </div>;
};

export default ArticleList;
