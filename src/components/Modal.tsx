import type { ReactNode } from "react";

const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-[#2E2B45] shadow-2xl p-4 rounded-lg shadow relative w-9/10 max-w-lg">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-500 text-2xl cursor-pointer hover:text-gray-700 transition"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
