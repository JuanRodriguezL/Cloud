import app from "./app.js";

function main() {
  app.listen(app.get("port"), () => {
    console.log(`The companies super web server is running on port ${app.get("port")}`);
  });
}

main();
