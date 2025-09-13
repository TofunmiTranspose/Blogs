import type { ReactNode } from "react";

const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative w-9/10 max-w-lg">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >X</button>
      </div>
    </div>
  );
};

export default Modal;
