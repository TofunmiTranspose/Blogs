import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Blog } from "../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    // Check if localStorage is available and retrieve blogs
    if (typeof window !== "undefined") {
      const savedBlogs = localStorage.getItem("blogs");
      return savedBlogs ? JSON.parse(savedBlogs) : [];
    }
    return [];
  });

  useEffect(() => {
    // Save blogs to localStorage whenever the blogs state changes
    if (typeof window !== "undefined") {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, [blogs]);

  const addBlog = (blog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, blog]);
  };
  const updateBlog = (updatedBlog: Blog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };
  const deleteBlog = (id: number) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("Component must exist inside the Blogs Provider");
  }
  return context;
};
