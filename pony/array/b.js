//Array.of

/*
This method is exactly like the first incarnation of cast we played with in our analysis of Array.from.
*/

Array.of = function of () {
  return Array.prototype.slice.call(arguments)
}

//You can¡¯t just replace Array.prototype.slice.call with Array.of. They¡¯re different animals.

Array.prototype.slice.call([1, 2, 3])
// <- [1, 2, 3]
Array.of(1, 2, 3)
// <- [1, 2, 3]

new Array()
// <- []
new Array(undefined)
// <- [undefined]
new Array(1)
// <- [undefined x 1]
new Array(3)
// <- [undefined x 3]
new Array(1, 2)
// <- [1, 2]
new Array(-1)
// <- RangeError: Invalid array length

//In contrast, Array.of has more consistent behavior because it doesn¡¯t have the special length case.

Array.of()
// <- []
Array.of(undefined)
// <- [undefined]
Array.of(1)
// <- [1]
Array.of(3)
// <- [3]
Array.of(1, 2)
// <- [1, 2]
Array.of(-1)
// <- [-1]


