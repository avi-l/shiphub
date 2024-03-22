import React, { ReactNode } from 'react';
import xIcon from '../../assets/x.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  icon?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-gray-500 opacity-75'></div>
      <div className='bg-white p-4 rounded-lg z-10 relative text-customGray'>
        <button onClick={onClose} className='absolute top-0 right-0 p-4'>
          <img src={xIcon} alt='Close' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
