function shipFactory(len) {
    const length = len;
    const marks = new Array(length).fill(false);
    const hit = (pt) => {
        marks.splice(pt, 1, true);
    };
    const isSunk = () => {
       if (marks.every(Boolean)) {
           return true;
       } else {
           return false;
       }
    };
    return {
        length,
        marks,
        isSunk,
        hit
}
}

module.exports = shipFactory;