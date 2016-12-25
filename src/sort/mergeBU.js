const src = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

const swap = (arr, m, n) => {
  const temp = arr[m]
  arr[m] = arr[n]
  arr[n] = temp
  return arr
}

const shell = (arr) => {
  const len = arr.length
  let h = Math.floor(len / 2)
  while (h > 0) {
    for (let i = h; i < len; i = i + 1) {
      for (let j = i; j > 0; j = j - h) {
        if (arr[j] < arr[j - h]) {
          swap(arr, j, j - h)
        }
      }
    }
    h = Math.floor(h / 2)
  }
  return arr
}

console.log(shell(src))
