import React from 'react';
import { nestedAccordianMockData } from './components/nested-accordian/mock';
import NestedAccordian from './components/nested-accordian/NestedAccordian';
import './App.css';
const App = () => {
  return (
    <div>
      <div className='accordian-container'>
        <NestedAccordian {...nestedAccordianMockData} />
      </div>
    </div>
  );
}

export default App;