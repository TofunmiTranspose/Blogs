import React from "react";
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";
import type { Blog } from "../types";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-[#2E2B45] max-w-4xl mx-auto mb-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={article.image || "https://placehold.co/150"}
        alt={article.title}
        className="w-full md:w-36 h-40 md:h-24 object-cover rounded-lg shadow-md mb-4 md:mb-0"
      />
      <div className="relative md:ml-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2">
          {article.title}
        </h3>
        <p className="relative text-sm text-[#E0E0E0] whitespace-normal flex-1">
          {article.description}
        </p>
        <div className="flex items-center justify-between mt-4 text-[#E0E0E0]">
          <span className="text-sm">{article.time}</span>
          <div className="flex space-x-3">
            <FaBookmark className="text-gray-400 hover:text-[#64FFDA] transition-colors duration-200 ease-in-out cursor-pointer" />
            <FaEdit
              onClick={onEdit}
              className="text-[#64FFDA] hover:text-[#64FFDA] transition-colors duration-200 ease-in-out cursor-pointer"
            />
            <FaTrash
              className="text-[#FF69B4] hover:text-[#E65C9E] transition-colors duration-200 ease-in-out cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;