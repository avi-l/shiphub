// Dropdown.tsx
import React from 'react';

interface DropdownProps {
  label?: string;
  items: {
    label: string;
    store?: string;
    action: () => void;
  }[];
  defaultValue: string;
  labelClassName?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  itemClassName?: string;
  iconBoxClassName?: string;
  icon?: string;
  isOpen: boolean;
  toggleDropdown: () => void;
  onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  defaultValue,
  labelClassName,
  buttonClassName,
  iconBoxClassName,
  dropdownClassName,
  itemClassName,
  icon,
  isOpen,
  toggleDropdown,
  onChange,
}) => {
  const handleItemClick = (item: { label: string; action: () => void }) => {
    onChange && onChange(item.label);
    item.action();
  };
  return (
    <div className={`flex ${labelClassName}`}>
      {label && <div className='p-2 '>{label}</div>}
      <button className={buttonClassName} onClick={toggleDropdown}>
        {defaultValue}
        {icon && (
          <div className={iconBoxClassName}>
            <img src={icon} alt='icon' />
          </div>
        )}
      </button>
      {isOpen && (
        <div className={dropdownClassName}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex cursor-pointer ${itemClassName} hover:bg-gray-100`}
              onClick={() => handleItemClick(item)}
            >
              <div className={`${item.store && 'font-bold'}`}>{item.label}</div>
              {item.store && <div>: {item.store}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
