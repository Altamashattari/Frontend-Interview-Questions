import React from 'react';
import { nestedAccordianMockData } from './components/nested-accordian/mock';
import NestedAccordian from './components/nested-accordian/NestedAccordian';
import './App.css';
import Menu from './components/dropdown-menu/DropdownMenu';
import Tabs from './components/tabs/Tabs';
import { tabsProps } from './components/tabs/mock';
import Snackbar from './components/snackbar/snackbar';

const App = () => {
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  return (
    <div>
      <button onClick={() => setSnackbarVisible(visible => !visible)}>Show Snackbar</button>
      <Snackbar open={snackbarVisible} text="This is snackbar" />
      <Tabs {...tabsProps} />
      <Menu menuItems={["item1", "item2", "item3"]} />
      <div className='accordian-container'>
        <NestedAccordian {...nestedAccordianMockData} />
      </div>
    </div>
  );
}

export default App;