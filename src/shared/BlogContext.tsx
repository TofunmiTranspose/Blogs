import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Blog } from "../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}
const initial = [
  {
    "id": 1,
    "title": "The Great L1 Blockchain Debate: Are We There Yet?",
    "description": "One of the oldest debates in crypto focuses on the relationship between the adoption of L1 blockchain networks and the value accrual of their native tokens. The debate is unresolved, but it is generally believed that, as long as the L1 token is the preferred asset for transacting on the network, the most widely adopted networks will also end up hosting the most valuable tokens.",
    "imageURL": "https://images.pexels.com/photos/8437001/pexels-photo-8437001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": 2,
    "title": "AI & The Art of Writing: A Creator's New Co-Pilot",
    "description": "Is AI a threat or an opportunity for writers? This blog explores how artificial intelligence is not just a tool for automation but a partner in the creative process. From generating ideas to refining prose, we'll dive into how AI can elevate your writing and help you break through creative blocks.",
    "imageURL": "https://images.pexels.com/photos/10368560/pexels-photo-10368560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": 3,
    "title": "Unlocking Your Potential: The Secret to Building Mindful Habits",
    "description": "Small changes can lead to monumental results. This post is a guide to building simple, daily habits that improve your mental clarity, boost productivity, and lead to a more balanced life. Discover how to create routines that stick and unlock your true potential.",
    "imageURL": "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": 4,
    "title": "Beyond the Hype: A Beginner's Guide to Understanding Web3",
    "description": "Decentralization, NFTs, DAOs... the world of Web3 can seem overwhelming. This beginner-friendly guide breaks down the core concepts of the next generation of the internet, explaining what it is, why it matters, and how you can get involved without getting lost in the jargon.",
    "imageURL": "https://images.pexels.com/photos/11947604/pexels-photo-11947604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": 5,
    "title": "The Remote Revolution: How WFH is Reshaping Our World",
    "description": "The shift to remote work has changed more than just our commutes. It's impacting cityscapes, family dynamics, and even the way we socialize. This blog post explores the long-term effects of this massive societal shift and what it means for the future of work and community.",
    "imageURL": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    // Check if localStorage is available and retrieve blogs
    if (typeof window !== "undefined") {
      const savedBlogs = localStorage.getItem("blogs");
      return savedBlogs ? JSON.parse(savedBlogs) : [...initial];
    }
    return [...initial];
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
