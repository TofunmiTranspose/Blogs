import { useEffect, useState } from "react";
import { useBlogs } from "../shared/BlogContext";
import type { Blog } from "../types";

const BlogForm = ({
  existingBlog,
  onClose,
}: {
  existingBlog: Blog | null;
  onClose: () => void;
}) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    existingBlog ? updateBlog(blog) : addBlog(blog);
    onClose();
  };
  return (
    <div className="p-8 rounded-2xl w-full max-w-lg mx-auto">
      <h3 className="font-bold text-2xl mb-4 text-white text-center">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300 h-32 resize-none"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300"
        />
        <input
          type="date"
          value={time}
          onChange={(e) => setTime(e.target.value === '' ? Date.now().toString() : e.target.value)}
          className="block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transition-all duration-300"
        />
        <div className="flex justify-end mt-6 space-x-4">
          <button
            type="submit"
            className="bg-[#FF69B4] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#E65C9E] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-offset-2"
          >
            {existingBlog ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
