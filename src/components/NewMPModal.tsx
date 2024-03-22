import React from 'react';
import Modal from './ui/Modal';
import plusIcon from '../assets/plusWhite.svg';
interface NewMPModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewMPModal: React.FC<NewMPModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='max-w-[711px] text-sm p-4'>
        <div className='text-customOrange font-bold text-lg mb-6'>
          CONNECT A MARKETPLACE
        </div>{' '}
        <div className=' mb-6'>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry’s standard dummy text ever since the
          1500s,
        </div>
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
    </Modal>
  );
};

export default NewMPModal;
