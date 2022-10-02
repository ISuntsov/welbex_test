import React from 'react';
import PropTypes from 'prop-types';
import { rangeToArray } from '../../utils/rangeToArray';

const Pagination = ({ itemsCount, pageSize = 1, onPageChange, currentPage }) => {
    const pageCount = pageSize >= 1 ? Math.ceil(itemsCount / pageSize) : 1;
    
    if (pageCount <= 1) {
        return null;
    } else {
        const pages = rangeToArray(1, pageCount + 1);
        
        return (
            <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li
                            className={
                                'page-item' +
                                (page === currentPage ? ' active' : '')
                            }
                            key={'page_' + page}
                        >
                            <button
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
