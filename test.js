let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let temp = [[]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (temp.length - 1 < j) {
      temp.push([]);
    }
    temp[j].push(matrix[i][j]);
  }
}
console.log(temp)
