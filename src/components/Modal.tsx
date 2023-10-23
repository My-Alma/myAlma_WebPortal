// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center  justify-center z-50">

      <div className=" bg-bg w-full p-2 rounded-lg shadow-lg">
        {/* <div className="  flex justify-between items-center">
        <button
            className="bg-primary p-6 rounded-full hover:bg-gray-200"
            onClick={onClose}
          >
            &times;
          </button>
        </div> */}

        <div className=" py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
