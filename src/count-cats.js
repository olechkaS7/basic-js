module.exports = function countCats(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i+=1) {
    for (let j = 0; j < arr[i].length; j+=1) {
      if (arr[i][j] === "^^") count++;
    }
  }
  return count;
};