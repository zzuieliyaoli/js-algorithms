const src = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

const swap = (arr, m, n) => {
  const temp = arr[m]
  arr[m] = arr[n]
  arr[n] = temp
  return arr
}

const sort = (arr, low, high) => {
  if (high < low) { return false }
  let lt = low
  let i = low + 1
  let gt = high
  let v = arr[low]
  while (i <= gt) {
    const target = arr[i]
    if (target < v) {
      swap(arr, lt++, i++)
    } else if (target > v) {
      swap(arr, i, gt--)
    } else {
      i++
    }
  }
  sort(arr, low, lt - 1)
  sort(arr, gt + 1, high)
}

const main = () => {
  sort(src, 0, src.length - 1)
  return src
}

console.log(main(src))
