export const filterItems = (data, filterQuery) => {
    let result;
    const isNumberFiltered = filterQuery.column !== 'name';
    switch (filterQuery.condition) {
        case 'include':
            result = Object.values(data).filter((data) =>
                data[filterQuery.column]
                    .toString()
                    .toLowerCase()
                    .indexOf(filterQuery.filterValue.toLowerCase()) !== -1);
            break;
        case 'equal':
            result = Object.values(data).filter((data) =>
                data[filterQuery.column]
                    .toString()
                    .toLowerCase() === filterQuery.filterValue.trim().toLowerCase());
            break;
        case 'more':
            result = isNumberFiltered
                ? Object.values(data).filter((data) =>
                    Number(data[filterQuery.column]) > Number(filterQuery.filterValue.trim()))
                : Object.values(data).filter((data) =>
                    data[filterQuery.column]
                        .toString()
                        .toLowerCase() > filterQuery.filterValue.trim().toLowerCase());
            break;
        case 'less':
            result = isNumberFiltered
                ? Object.values(data).filter((data) =>
                    Number(data[filterQuery.column]) < Number(filterQuery.filterValue.trim()))
                : Object.values(data).filter((data) =>
                    data[filterQuery.column]
                        .toString()
                        .toLowerCase() < filterQuery.filterValue.trim().toLowerCase());
            break;
    }
    return result;
};
