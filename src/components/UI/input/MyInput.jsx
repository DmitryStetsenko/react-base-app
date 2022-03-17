import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    const { myInput } = classes;
    return (
        <input ref={ ref } {...props} className={ myInput } />
    );
});

export default MyInput;