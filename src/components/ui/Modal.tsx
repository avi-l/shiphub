import React, { ReactNode } from 'react';
import xIcon from '../../assets/x.svg';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: (value: boolean) => void;
  icon?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return false;
  return (
    <div className='z-50 fixed inset-0 flex items-center justify-center   '>
      <div className='fixed inset-0 bg-gray-500 opacity-75   '></div>
      <div className='bg-white p-4 rounded-lg    relative text-customGray'>
        <button
          onClick={() => onClose(false)}
          className='absolute top-0 right-0 p-4'
        >
          <img src={xIcon} alt='Close' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
