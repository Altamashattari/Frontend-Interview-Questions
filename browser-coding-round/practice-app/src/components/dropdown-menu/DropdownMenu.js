import React from 'react';

const Menu = ({ menuItems = [], }) => {
    const [selected, setSelected] = React.useState(menuItems[1]);

    const onSelect = (event) => {
        console.log(event);
        setSelected(event.target.value);
    };

    return (
        <select onChange={onSelect} value={selected}>
            {menuItems.map((item, index) => <option key={index}>{item}</option>)}
        </select>
    );
};

export default Menu;