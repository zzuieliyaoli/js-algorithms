const src = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

const merge = (arr, low, middle, high) => {
  const aux = []
  const len = arr.length
  let j = middle + 1
  let i = low
  for (let m = 0; m < len; m = m + 1) {
    aux[m] = arr[m]
  }
  for (let k = low; k <= high; k = k + 1) {
    if (i > middle) {
      arr[k] = aux[j]
      j = j + 1
    } else if (j > high) {
      arr[k] = aux[i]
      i = i + 1
    } else if (aux[j] < aux[i]) {
      arr[k] = aux[j]
      j = j + 1
    } else {
      arr[k] = aux[i]
      i = i + 1
    }
  }
  return arr
}

const sort = (arr, low, high) => {
  if (low >= high) { return false }
  let mid = Math.floor((low + high) / 2)
  sort(arr, low, mid)
  sort(arr, mid + 1, high)
  merge(arr, low, mid, high)
  return arr
}

const main = (src) => {
  return sort(src, 0, src.length - 1)
}

console.log(main(src))
