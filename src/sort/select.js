const src = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

const swap = (arr, m, n) => {
  const temp = arr[m]
  arr[m] = arr[n]
  arr[n] = temp
  return arr
}

const select = (arr) => {
  for (let i = 0, len = arr.length; i < len; i = i + 1) {
    let min = i
    for (let j = i + 1; j < len; j = j + 1) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}
console.log(select(src))
