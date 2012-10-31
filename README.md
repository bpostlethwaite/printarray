# printArray

A quick implementation to visualize arrays for prototyping and development. Right now it works only for 1D and 2D arrays.

## How to use

The API is simple. Just `aprint(array, numOfDigits, [shapex, shapey])` or to reshape as well as print

```javascript

var ex = "Example 1: Vectors printed as vector"
var digits = 10
var dum = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10 ,11, 12].map(Math.sqrt)
show(ex)
aprint(dum, digits)

ex = "Example 2: 1D array printed as nxm array"
show(ex)
aprint(dum, digits, [4, 3])

ex = "Example 3: 1D array printed as mxn array"
show(ex)
aprint(dum, digits, [3, 4])

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

ex = "Example 5: 2D array printed row-wise as 1D row vector"
show(ex)
aprint(dum2, digits, [21, 1])

ex = "Example 6: 2D array printed as column vector"
show(ex)
aprint(dum2, digits, [1, 21])

function show(ex) {
  console.log("----------------------")
  console.log(ex)
  console.log()
}


```
which outputs
```bash
----------------------
Example 1: Vectors printed as vector

1.00000000
1.41421356
1.73205080
2.00000000
2.23606797
2.44948974
2.64575131
2.64575131
2.82842712
3.00000000
3.16227766
3.31662479
3.46410161
----------------------
Example 2: 1D array printed as nxm array

1.00000000 1.41421356 1.73205080
2.00000000 2.23606797 2.44948974
2.64575131 2.64575131 2.82842712
3.00000000 3.16227766 3.31662479
----------------------
Example 3: 1D array printed as mxn array

1.00000000 1.41421356 1.73205080 2.00000000
2.23606797 2.44948974 2.64575131 2.64575131
2.82842712 3.00000000 3.16227766 3.31662479
----------------------
Example 4: 2D array printed as 2D array

0.5403 -0.416 -0.989 -0.653 0.2836 0.9601
-0.416 -0.989 -0.653 0.2836 0.9601 0.7539
-0.989 -0.653 0.2836 0.9601 0.7539 -0.145
-0.653 0.2836 0.9601 0.7539 -0.145 -0.911
----------------------
Example 5: 2D array printed row-wise as 1D row vector

0.5403
-0.416
-0.989
-0.653
0.2836
0.9601
-0.416
-0.989
-0.653
0.2836
0.9601
0.7539
-0.989
-0.653
0.2836
0.9601
0.7539
-0.145
-0.653
0.2836
0.9601
----------------------
Example 6: 2D array printed as column vector

0.5403 -0.416 -0.989 -0.653 0.2836 0.9601 -0.416 -0.989 -0.653 0.2836 0.9601 0.7539 -0.989 -0.653 0.2836 0.9601 0.7539 -0.145 -0.653 0.2836 0.9601
```

