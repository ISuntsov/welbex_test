export function paginate(items, pageNumber, pageSize = 10) {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
