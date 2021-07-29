Array.prototype.binarySerch = function (item) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (this[mid] > item) {
      high = mid - 1
    } else if (this[mid] < item) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}


const arr = [1,2,3,4,5]

console.log(arr.binarySerch(3))