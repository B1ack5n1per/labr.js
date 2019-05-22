/*
Labr.js Library Written by Taylor Wong
Labr.js is a Node.js module adding linear algebra functions
*/

module.exports = {

  // Dot multiply
  vectorDotProduct: (a, b) => {
    let result = 0;
    let shorter;
    let longer;
    let diff;
    let valid = true

    // Validate vectors
    function check(vector) {
      for (let i = 0; i < vector.length; i++) {
        if (typeof vector[i] != 'number') {
          valid = false;
        }
      }
    }
    check(a);
    check(b);

    if (valid) {

    // Handle different vector length
      if (a.length > b.length) {
        longer = a;
        shorter = b;
      } else {
        longer = b;
        shorter = a;
      }

      diff = longer.length - shorter.length
      for (let i = 0; i < diff; i++) {
        shorter.push(0);
      }
      for (let i = 0; i < longer.length; i++) {
        result += (longer[i] * shorter[i]);
      }
      return result;
    } else {
      return 'invalid vectors';
    }

  },

  // Cross multiply
  vectorCrossProduct: (a, b) => {
    if (a.length === b.length && a.length === 3) {
      let valid = true;
      let resVector = [];
      for (i = 0; i < 3; i++) {
        if (typeof a[i] != 'number' || typeof b[i] != 'number') {
          let valid = false;
        }
      }
      if (valid) {
        resVector.push((a[1] * b[2]) - (a[2] * b[1]));
        resVector.push((a[2] * b[0]) - (a[0] * b[2]));
        resVector.push((a[0] * b[1]) - (a[1] * b[0]));
        return resVector;
      } else {
        return 'invalid verctors';
      }
    }
    return 'invalid vectors';
  },

  // Transpose
  transpose: (matrix) => {
    let temp = [[]];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (temp.length - 1 < j) {
          temp.push([]);
        }
        temp[j].push(matrix[i][j]);
      }
    }
    return temp;
  },

  // Transformation
  transform: (vector, matrix) => {
    let valid = true;
    let resVector = [];
    let transposedMatrix = transpose(matrix);

    // Validate
    if (matrix.length != vector.length) {
      valid = false;
    }

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length != vector.length) {
        valid = false;
      }
      for (let j = 0; j < matrix[i].length; j++) {
        if (typeof matrix[i][j] != 'number') {
          valid = false;
        }
      }
    }
    for (let i = 0; i < vector.length; i++) {
      if (typeof vector[i] != 'number') {
        valid = false;
      }
    }

    // Calculate
    if (valid) {
      for (let i = 0; i < transposedMatrix.length; i++) {
        resVector.push(vectorDotProduct(transposedMatrix[i], vector));
      }
      return resVector;
    } else {
      return 'invalid vector and/or matrix';
    }
  },

  // Find length
  vectorLength: (vector) => {
    let sum = 0;
    for (let i = 0; i < vector.length; i++) {
      if (typeof vector[i] == 'number') {
        sum += vector[i] ** 2;
      } else {
        return 'invalid vector';
      }
    }
    return sum ** 0.5;
  }

}
