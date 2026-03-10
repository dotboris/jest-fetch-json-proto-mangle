async function main() {
  const httpRes = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await httpRes.json();
  const pass = Object.getPrototypeOf(json) === Object.prototype;
  if (pass) {
    console.log("PASS");
    process.exitCode = 0;
  } else {
    console.log("FAIL");
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 2;
});
