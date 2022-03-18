import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
    const {myModal, active, myModalContent} = classes;
    const rootClasses = !visible ? [myModal] : [myModal, active];

    return (
        <div onClick={ () => setVisible(false) } className={ rootClasses.join(' ') }>
            <div className={ myModalContent } onClick={ e => e.stopPropagation() }>
                { children }
            </div>
        </div>
    );
};

export default MyModal;