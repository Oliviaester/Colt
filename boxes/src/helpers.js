function choice(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export { choice };
