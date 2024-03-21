import React from 'react';

interface InputProps {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  onChange?: (value: string) => void;
  placeholder?: string;
  inputClassName?: string;
  icon?: string;
  iconBoxClassName?: string;
  labelClassName?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  onChange = (value) => {
    console.log(value);
  },
  placeholder,
  inputClassName,
  icon,
  iconBoxClassName,
  labelClassName,
  label,
}) => {
  return (
    <div className='relative flex'>
      {label && <div className={`${labelClassName}`}>{label}</div>}
      <div className='flex items-center'>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${inputClassName} pr-10`}
        />
        {icon && (
          <div className={` ${iconBoxClassName}`}>
            <img src={icon} alt='icon' className='mr-2 p-2 mb-1' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
