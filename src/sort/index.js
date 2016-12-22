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

const insert = (arr) => {
  for (let i = 0, len = arr.length; i < (len - 1); i = i + 1) {
    for (let j = i + 1; j < 1; j = j - 1) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j)
      }
    }
  }
  return arr
}

console.log(bubble(src))
console.log(select(src))
console.log(insert(src))
