import React from 'react';
import { nestedAccordianMockData } from './components/nested-accordian/mock';
import NestedAccordian from './components/nested-accordian/NestedAccordian';
import './App.css';
import Menu from './components/dropdown-menu/DropdownMenu';
import Tabs from './components/tabs/Tabs';
import { tabsProps } from './components/tabs/mock';
import Snackbar from './components/snackbar/snackbar';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const { loading, data = [], error } = useFetch('https://sonplaceholder.typicode.com/users');

  if (loading) {
    return (
      <p>Loading Users...</p>
    );
  }

  if (error) {
    return (
      <p>Something went wrong while loading users!</p>
    );
  }

  return (
    <div>
      {/* Snackbar Component */}
      <button onClick={() => setSnackbarVisible(visible => !visible)}>Show Snackbar</button>
      <Snackbar open={snackbarVisible} text="This is snackbar" />

      {/* Tabs Component */}
      <Tabs {...tabsProps} />

      {/* Menu Component */}
      <Menu menuItems={["item1", "item2", "item3"]} />

      {/* Accordian Component */}
      <div className='accordian-container'>
        <NestedAccordian {...nestedAccordianMockData} />
      </div>

      <div>
        {data?.length ? <div>
          <ul style={{ listStyleType: 'none' }}>
            {data.map(({ id, name }) => <li key={id}>
              <div style={{ margin: 10, border: "0.3px solid gray" }}>
                {name}
              </div>
            </li>)}
          </ul>
        </div> : <p>No data available...</p>}

      </div>
    </div>
  );
}

export default App;