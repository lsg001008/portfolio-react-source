import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import classNames from 'classnames/bind';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const cx = classNames.bind(styles);
let key = 0;

const Option = ({ option }) => {
  return <option>{option}</option>;
};

const Dropdown = ({ name, placeholder, optionList }) => {
  return (
    <div className={cx('Dropdown')}>
      <label>{name}</label>

      <select defaultValue={'init'}>
        <option value='init' disabled>
          {placeholder}
        </option>

        {optionList.map((option) => (
          <Option option={option} key={key++} />
        ))}
      </select>

      <MdKeyboardArrowDown className={cx('arrow')} size='25' />
    </div>
  );
};

Dropdown.defaultProps = {
  optionList: ['defaultProps'],
};

export default Dropdown;
