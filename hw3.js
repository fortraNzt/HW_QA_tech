function pow(x, y) {
  if (y === 0) return 1;
  if (y === 1) return x;
  if (y < 0) {
    return 1 / pow(x, -y);
  }
  let result = 1;

  for (let i = 0; i < y; i++) {
    result = result*x;
  }

  return result;
}

console.log(pow(2, 3));
console.log(pow(2, 1));
console.log(pow(2, 0));
console.log(pow(2, -1));