import React, { ReactNode } from 'react';
import xIcon from '../assets/x.svg';
import plusIcon from '../assets/plusWhite.svg';
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
        <div className='flex gap-4 items-center'>
          <button
            onClick={onClose}
            className='shadow-drop font-bold items-center h-[37px] flex
        uppercase ml-2 px-4 py-1 text-sm text-white bg-customOrange
         rounded-lg hover:bg-customGray'
          >
            {' '}
            <img src={plusIcon} alt='plus' />
            <div className='p-2'> ADD NEW MARKETPLACE</div>
          </button>
          <span className='underline cursor-pointer text-customGray text-sm'>
            Need Help?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
