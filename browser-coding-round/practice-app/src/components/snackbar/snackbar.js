import React from 'react';
import './snackbar.css';

const Snackbar = ({ text, open }) => {
    const [visible, setVisible] = React.useState(open);

    React.useEffect(() => {
        let timeout;
        if (open) {
            timeout = setTimeout(() => setVisible(false), 3000);
        }
        setVisible(open);
        return () => {
            clearTimeout(timeout);
        }
    }, [open])


    return visible ? (
        <div className='snackbar-container'>
            <p className='snackbar-text'>{text}</p>
        </div>
    ) : null;
}

export default Snackbar;