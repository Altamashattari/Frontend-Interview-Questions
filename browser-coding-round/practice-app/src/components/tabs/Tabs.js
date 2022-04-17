import React from 'react';
import './tabs.css';
/*
    interface TabHeaderData {
        key: string;
        title: string;
    }

    interface TabData {
        key: string;
        component: JSX.Element;
    }
 */

const Tabs = ({ tabData = [], tabHeaderData = [], selectedKey }) => {
    const [selectedTabKey, setSelectedTabKey] = React.useState(selectedKey);

    const { component } = tabData.find((tab) => tab.key === selectedTabKey);

    const onTabHeaderClick = event => {
        const key = event.target.dataset.tabkey;
        setSelectedTabKey(key);
    }

    return (
        <div className='tabsContainer'>
            <div className='tabsHeader' onClick={onTabHeaderClick}>
                {tabHeaderData.map(({ key, title }) => (
                    <div key={key} data-tabkey={key} className={`tabHeaderItem ${key === selectedTabKey ? 'selectedTab' : ''}`}>
                        <div data-tabkey={key} className='tabHeaderText'>{title}</div>
                    </div>
                ))}
            </div>
            <div className='selectedTabDetail'>
                {component()}
            </div>
        </div>
    );
}

export default Tabs;