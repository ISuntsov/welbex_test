export const sortItems = (items, order, path) => items.sort(function (a, b) {
    const orderDirection = order === 'asc' ? 1 : -1;
    return orderDirection * (a[path] < b[path] ? -1 : 1);
});
