function measureExecutionTime(callback) {
  const before = new Date().getTime();
  // callback();
  const after = new Date().getTime();
  const timeTook = (after - before) / 1000;
  console.log("Time it took in seconds: " + timeTook);
}
