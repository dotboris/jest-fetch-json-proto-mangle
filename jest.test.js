test("jest case", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  expect(Object.getPrototypeOf(json) === Object.prototype).toBe(true);
});
