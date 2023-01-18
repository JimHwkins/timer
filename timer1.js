const args = process.argv.slice(2);
for (let time of args) {
  if (time < 0 || typeof time !== "number");
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
}
