import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
    const { myInput } = classes;
    return (
        <input {...props} className={ myInput } />
    );
};

export default MyInput;