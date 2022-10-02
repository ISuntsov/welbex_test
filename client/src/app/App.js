import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './components/ui/loader/loader';
import FilterGroup from './components/ui/filterGroup';
import CitiesTable from './components/ui/citiesTable';
import Pagination from './components/common/pagination';
import configFile from './config.json';
import { getCitiesData } from './store/citiesSlice';
import { itemsDBTransform } from './utils/itemsDBTransform';
import { filterItems } from './utils/filter';
import { sortItems } from './utils/sort';
import { paginate } from './utils/paginate';

function App() {
    const cities = useSelector(getCitiesData());
    const citiesTransformed = itemsDBTransform(cities);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [filterQuery, setFilterQuery] = useState(configFile.initialFilterQuery);
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' });
    const pageSize = 10;
    
    useEffect(() => {
        setCurrentPage(1);
    }, [filterQuery, sortBy]);
    
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    
    const handleFilterQuery = (target) => {
        setFilterQuery((prevState) => ({
            ...prevState,
            [target.name]: target.value.trim()
        }));
    };
    
    const clearFilter = () => {
        setFilterQuery(configFile.initialFilterQuery);
    };
    
    const handleSort = (item) => {
        setSortBy(item);
    };
    
    if (citiesTransformed) {
        const filteredItems = filterItems(citiesTransformed, filterQuery);
        const sortedItems = sortItems(filteredItems, sortBy.order, sortBy.path);
        const itemsCrop = paginate(sortedItems, currentPage, pageSize);
        const filteredItemsCount = filteredItems.length;
        return (
            <div className="d-flex">
                <div className="container md-5 alert alert-light">
                    <div className="d-flex flex-column">
                        <FilterGroup
                            filterQuery={filterQuery}
                            handleFilterQuery={handleFilterQuery}
                            clearFilter={clearFilter}
                        />
                        {filteredItemsCount > 0 && (
                            <CitiesTable
                                items={itemsCrop}
                                selectedSort={sortBy}
                                onSort={handleSort}
                            />
                        )}
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={filteredItemsCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <Loader/>;
}

export default App;
