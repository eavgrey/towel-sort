// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    } else {
        return matrix.reduce((a, c, i) => {
            return a.concat(!(i % 2) ? c : c.reverse());
        }, []);
    }
};
