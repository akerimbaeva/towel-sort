
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr =[];
  let el;
  if (arguments.length ==0 ) {
    return arr
  }
  if (matrix.length === 0) {
    return arr
  }
  for (let i = 0; i <= matrix.length - 1; i++) {  
    if (i%2 === 0) {
        for ( let j = 0; j <= matrix[i].length-1; j++) {
          arr.push(matrix[i][j])
        }
        } else {
        for ( let k = matrix[i].length-1; k >= 0; k--) {
          arr.push(matrix[i][k])
           }
    }
}

return arr  
}
