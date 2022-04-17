export const tabsProps = {
    tabHeaderData: [
      { key: '1', title: 'Title 1'},
      { key: '2', title: 'Title 2'},
      { key: '3', title: 'Title 3'},
    ],
    tabData: [
      { key: '1', component: () => <div>Title Body 1</div>},
      { key: '2', component: () => <div>Title Body 2</div>},
      { key: '3', component: () => <div>Title Body 3</div>},
    ],
    selectedKey: '1',
  };