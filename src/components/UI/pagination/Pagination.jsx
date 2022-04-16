import React from 'react';
import { getPageArray } from '../../../utils/pages';
import MySelect from '../select/MySelect';
import classes from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage, limit, setLimit}) => {
    let pagesArray = getPageArray(totalPages);
    const { pagination, btn, current } = classes;
    const newLimit = value => {
        changePage(1);
        setLimit(value);
    }

    console.log(pagesArray);

    return (
        <div className={ pagination }>
            <MySelect
                value={ limit }
                onChange={ value => newLimit(value) }
                defaultValue="Лимит постов..."
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'all'},
                ]}
            />
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