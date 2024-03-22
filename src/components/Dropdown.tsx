// Dropdown.tsx
import React from 'react';

interface Item {
  label: string | JSX.Element;
  store?: string | JSX.Element;
  action: () => void;
  icon?: string | JSX.Element;
}

interface DropdownProps {
  label?: string | JSX.Element;
  items: Item[];
  defaultValue: string | JSX.Element;
  labelClassName?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  itemClassName?: string;
  iconBoxClassName?: string;
  icon?: string;
  isOpen: boolean;
  toggleDropdown: () => void;
  onChange?: (value: string | JSX.Element) => void;
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
}) => {
  const handleOnClick = (item: Item) => {
    item.action();
    console.log(item);
    toggleDropdown();
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
              onClick={() => handleOnClick(item)}
            >
              {item.icon && item.icon}
              {item.label}
              {item.store && <>: {item.store}</>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
