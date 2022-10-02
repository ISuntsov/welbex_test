import { formatDate } from './formatDate';

export const itemsDBTransform = (items) => items.map((item) => {
    return {
        date: formatDate(item.date),
        name: item.name,
        quantity: item.quantity,
        distance: item.distance
    };
});
