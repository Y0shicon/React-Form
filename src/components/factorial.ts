//write a fucntion to calculate the factorial of a number n
//do not use recursion
function factorial(n: number): number {
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}