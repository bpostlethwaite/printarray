/*  printArray
 *
 * A small utility for printing 1D and 2D arrays
 * to the browser or terminal.
 *
 * Ben Postlethwaite 2012
 * benpostlethwaite.ca
 */



module.exports = function printArray (arr, digits, dimxy) {

  var i, j, k, c
    , rows = arr.length
    , cols = arr[0].length
  if (dimxy) {
    rows = dimxy[0]
    cols = dimxy[1]
    if (rows * cols !== arr.length)
      dimxy = undefined
  }

  arr = flatten(arr)
// If 2D array, print as 2D array
// array length = x*y, then print as 2D array
  if (cols) {
    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        c = arr[i * cols + j].toPrecision(digits).toString()
        if (c.length > digits)
          c = c.slice(0, digits)
        if (c.length <= digits)
          for(k = c.length; k < digits + 1; k++)
            c += " "
        process.stdout.write( c )
      }
      process.stdout.write("\n")
    }
  }
  // Else 1D array, print as row vector
  else {
    for (i = 0; i < rows; i++) {
      c = arr[i].toPrecision(digits).toString()
      if (c.length > digits)
        c = c.slice(0, digits)
      if (c.length <= digits)
        for(k = c.length; k < digits + 1; k++)
          c += " "
      process.stdout.write( c )
      process.stdout.write("\n")
    }
  }


  function flatten(array){
    var flat = [];
    for (var i = 0, l = array.length; i < l; i++){
      var type = Object.prototype.toString.call(array[i]).split(' ').pop().split(']').shift().toLowerCase();
      if (type) { flat = flat.concat(/^(array|collection|arguments|object)$/.test(type) ? flatten(array[i]) : array[i]); }
    }
    return flat;
  }
}