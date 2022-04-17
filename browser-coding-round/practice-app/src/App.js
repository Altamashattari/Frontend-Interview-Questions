import React from 'react';
import { nestedAccordianMockData } from './components/nested-accordian/mock';
import NestedAccordian from './components/nested-accordian/NestedAccordian';
import './App.css';
import Menu from './components/dropdown-menu/DropdownMenu';
import Tabs from './components/tabs/Tabs';
import { tabsProps } from './components/tabs/mock';

const App = () => {
  return (
    <div>
      <Tabs {...tabsProps}/>
      <Menu menuItems={["item1", "item2", "item3"]} />
      <div className='accordian-container'>
        <NestedAccordian {...nestedAccordianMockData} />
      </div>
    </div>
  );
}

export default App;