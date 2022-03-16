import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ( {children, ...props} ) => {
    const { myBtn } = classes;

    return (
        <button {...props} className={ myBtn } >
            { children }
        </button>
    );
};

export default MyButton;