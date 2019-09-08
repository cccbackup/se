function power2(n) {
  if (n === 0) return 1
  return power2(n-1) + power2(n-1)
}

console.log('power2(10)=', power2(10))
console.log('power2(100)=', power2(100))