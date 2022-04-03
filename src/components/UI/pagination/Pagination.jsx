import React from 'react';
import { getPageArray } from '../../../utils/pages';
import classes from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPageArray(totalPages);
    const { pagination, btn, current } = classes;

    return (
        <div className={ pagination }>
            {
                pagesArray.map( p => <button
                                        onClick={ () => changePage(p) }
                                        key={ p } 
                                        className={ page === p ? `${btn} ${current}` : btn }
                                    >
                                        { p }
                                    </button> 
                                )
            }
        </div>
    );
};

export default Pagination;