function find(a, o) {
  let len = a.length
  for (let i=0; i<len; i++) {
    if (a[i] === o) return i
  }
  return -1
}

console.log('find([a, d, x, b, g], x)=', find(['a','d','x','b','g'], 'x'))
