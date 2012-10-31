var aprint = require('../printArray')

//////////////////////////////////////////////////
var ex = "Example 1: Vectors printed as vector"
var digits = 10
var dum = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10 ,11, 12].map(Math.sqrt)
show(ex)
aprint(dum, digits)
//////////////////////////////////////////////////
ex = "Example 2: 1D array printed as nxm array"
show(ex)
aprint(dum, digits, [4, 3])
//////////////////////////////////////////////////
ex = "Example 3: 1D array printed as mxn array"
show(ex)
aprint(dum, digits, [3, 4])
//////////////////////////////////////////////////
ex = "Example 4: 2D array printed as 2D array"
digits = 6
var dum2 = [
  [1, 2, 3, 4, 5, 6].map(Math.cos)
, [2, 3, 4, 5, 6, 7].map(Math.cos)
, [3, 4, 5, 6, 7, 8].map(Math.cos)
, [4, 5, 6, 7, 8, 9].map(Math.cos)
]
show(ex)
aprint(dum2, digits)
//////////////////////////////////////////////////
ex = "Example 5: 2D array printed row-wise as 1D row vector"
show(ex)
aprint(dum2, digits, [21, 1])
//////////////////////////////////////////////////
ex = "Example 6: 2D array printed as column vector"
show(ex)
aprint(dum2, digits, [1, 21])
//////////////////////////////////////////////////

function show(ex) {
  console.log("----------------------")
  console.log(ex)
  console.log()
}
