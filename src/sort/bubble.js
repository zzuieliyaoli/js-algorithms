const src = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

const swap = (arr, m, n) => {
  const temp = arr[m]
  arr[m] = arr[n]
  arr[n] = temp
  return arr
}

const bubble = (arr) => {
  for (let i = 0, len = arr.length; i < len; i = i + 1) {
    for (let j = 0; j < (len - i - 1); j = j + 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log(bubble(src))
