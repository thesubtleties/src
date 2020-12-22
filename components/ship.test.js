shipFactory = require('./shipFactory');

test('Ship factory function give us back a ship with correct length.', () => {
    const ship3 = shipFactory(3);
    expect(ship3.length).toBe(3);
})
test('Ship factory gives us an arry of marks filled with false.', () => {
    const ship3 = shipFactory(3);
    expect(ship3.marks).toEqual([false, false, false])
}
)

test('Ship factor isSunk function works', () => {
    const ship3 = shipFactory(3);
    expect(ship3.isSunk()).toBeFalsy()
})

test('Ship factor isSunk function works if ship should be sunk.', () => {
    const ship3 = shipFactory(3);
    ship3.hit(0);
    ship3.hit(1);
    ship3.hit(2);
    expect(ship3.isSunk()).toBeTruthy()
})

test('Ship takes a hit point and then turns that mark in the array to true.', () => {
    const ship3 = shipFactory(3);
    ship3.hit(0);
    expect(ship3.marks).toEqual([true, false, false]);
})

// test('Ship factor isSunk function works', () => {
//     const ship3 = shipFactory(3);
//     ship3.
//     expect(shipFactory.isSunk).toBeFalsy()
// })

// {
//     length: 3,
//     hit: function() {

//     },
//     isSunk: function() {

//     }
// }