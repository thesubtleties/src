const shipFactory = require('./shipFactory');

function gameBoard() {
    const board = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)];
    const ships = [];
    const placeShip = (x, y, length, vertical, id) => {
        ships.push(shipFactory(length, id));
        if (!vertical) {
            for (i = 0; i < length; i++) {
                board[y][x + i] = {
                    id: id,
                    position: i
                }
                };         
        } else {
            for (i = 0; i < length; i++) {
                board[y + i][x] = {
                    id: id,
                    position: i
                }
            }
        }
    }
    const receiveAttack = (x, y) => {
        const findShip = (id) => {
           for (i = 0; i < ships.length; i++) {
               if (ships[i].id === id) {
                   return i;
               }
           }
            }
        if (board[y][x] != undefined) {
            const shipId = board[y][x].id;
            const shipPosition = board[y][x].position;
            ships[findShip(shipId)].marks[shipPosition] = true;
        } else {
            board[y][x] = 'miss';
        }
    }

    const allSunk = () => {
        const allMarks = []
        for (i = 0; i < ships.length; i++) {
            allMarks.push(...ships[i].marks);
        }
        if (allMarks.every(Boolean)) {
            return true;
        } else {
            return false;
        }
    }
    return {
        board,
        placeShip,
        receiveAttack,
        ships,
        allSunk
    }
}
module.exports = gameBoard;