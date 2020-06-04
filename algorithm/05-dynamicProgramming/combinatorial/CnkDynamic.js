// http://mathworld.wolfram.com/PascalsFormula.html
// https://en.wikipedia.org/wiki/Pascal%27s_rule
// https://en.wikipedia.org/wiki/Pascal%27s_triangle
// https://en.wikipedia.org/wiki/Binomial_coefficient
/*
c(n, k) = 1                        , if k = 0 or k = n
        = c(n-1, k-1) + c(n-1, k)  , if k <= n-k
*/

function c(N, K) {
  var C = [];
  for (let n=0; n<=N; n++) {
    C[n] = []
    C[n][0] = 1
    C[n][n] = 1
  }
  for (let n=1; n<=N; n++) {
    for (let k=1; k<n; k++) {
      C[n][k] = C[n-1][k-1] + C[n-1][k]
    }
  }
  for(let n=0; n<=N; n++) {
    console.log("C[%d]=%j", n, C[n])
  }
  return C[N][K];
}

console.log("c(5,2)=", c(5,2))
/*
console.log("c(7,3)=", c(7,3))
console.log("c(12,5)=", c(12,5))
console.log("c(60,30)=", c(60,30))
*/