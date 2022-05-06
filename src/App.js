import React, { useState } from 'react';
import Dropdown from './core/Dropdown/Dropdown.js';
import InputDesigns from './components/Designs/InputDesigns';
import ButtonDesigns from './components/Designs/ButtonDesigns.js';
import TodoList from './components/TodoList/TodoList.js';
import Laboratory from './components/Laboratory/Laboratory.js';

const menuList = ['Input Designs', 'Button Designs', 'Todo List', 'Laboratory'];

function App() {
  const [menu, setMenu] = useState();

  const onChange = (menu) => {
    setMenu(menu);
  };

  return (
    <div
      style={{
        width: 360,
      }}
    >
      <Dropdown
        label='MENU'
        placeholder='Select MENU'
        optionList={menuList}
        setParentState={onChange}
      />
      <br />
      {/* hr 대신 아래 div 사용 */}
      <div
        style={{
          height: 1,
          backgroundColor: '#c7cad1',
        }}
      />
      <br />

      {menu === 'Input Designs' ? <InputDesigns /> : null}
      {menu === 'Button Designs' ? <ButtonDesigns /> : null}
      {menu === 'Todo List' ? <TodoList /> : null}
      {menu === 'Laboratory' ? <Laboratory /> : null}
    </div>
  );
}

export default App;
