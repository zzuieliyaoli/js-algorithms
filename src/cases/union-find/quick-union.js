let number
let id

const create = (len) => {
  number = len
  const result = []
  for (let i = 0; i < len; i = i + 1) {
    result[i] = i
  }
  return result
}

const count = () => {
  return number
}

const connected = (p, q) => {
  return (find(p) === find(q))
}

const find = (p) => {
  // 是否等于本身
  while (p !== id[p]) {
    // 更新当前值
    p = id[p]
  }
  return p
}

const union = (p, q) => {
  const pRoot = find(p)
  const qRoot = find(q)
  if (pRoot === qRoot) { return }
  id[pRoot] = qRoot
  console.log(id[pRoot])
  number = number - 1
}

const main = () => {
  id = create(10)
  const values = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9], [5, 0], [7, 1], [6, 1], [1, 0], [6, 7]];
  for (let i = 0, len = values.length; i < len; i = i + 1) {
    const item = values[i]
    const p = item[0]
    const q = item[1]
    if (connected(p, q)) { continue }
    union(p, q)
  }
  console.log(`${number} components`);
}

main()
