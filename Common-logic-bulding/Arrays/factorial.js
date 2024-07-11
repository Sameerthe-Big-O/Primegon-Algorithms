function factorial(n) {
  // Base case: if n is 0, return 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: return n multiplied by the factorial of (n-1)
  return n * factorial(n - 1);
}
