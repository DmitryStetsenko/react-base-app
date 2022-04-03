import React from 'react';
import classes from './PaginationBtn.module.css';

const PaginationBtn = ( {children, ...props} ) => {
    const { pBtn, current } = classes;
    const active = Boolean(props.active);

    console.log(active);

    return (
        <button {...props} className={ !active ? pBtn : `${pBtn} ${current}` } >
            { children }
        </button>
    );
};

export default PaginationBtn;