import React from 'react';

import './NestedAccordian.css';

const NestedAccordian = ({ title = '', nestedChild = [] }) => {
    const [expanded, setExpanded] = React.useState(false);

    const onClick = () => setExpanded((expanded) => setExpanded(!expanded));

    return (
        <div className='container'>
            <div className='accordian-header'>
                <p>{title}</p>
                {nestedChild?.length ? <p onClick={onClick}>{expanded ? '-' : '+'}</p> : null}
            </div>
            {nestedChild?.length && expanded ? (
                <div style={{marginLeft: 10}}>
                    {nestedChild.map((child, index) => <NestedAccordian key={index} {...child} />)}
                </div>
            ): null}
        </div>
    );
};

export default NestedAccordian;