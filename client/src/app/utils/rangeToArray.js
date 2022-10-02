export function rangeToArray(start, end, step = 1) {
    if (!end && start) {
        end = start;
        start = 0;
    }
    return Array(Math.ceil((end - start) / step)).fill(start).map((x, y) => x + y * step);
}
