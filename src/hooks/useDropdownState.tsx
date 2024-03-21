import { useState } from 'react';

interface DropdownState {
  isDropOpen: string | null;
  toggleDropdown: (dropdownTitle: string) => void;
}

const useDropdownState = (): DropdownState => {
  const [isDropOpen, setIsDropOpen] = useState<string | null>(null);

  const toggleDropdown = (dropdownTitle: string) => {
    setIsDropOpen((prev) => (prev === dropdownTitle ? null : dropdownTitle));
  };

  return { isDropOpen, toggleDropdown };
};

export default useDropdownState;
