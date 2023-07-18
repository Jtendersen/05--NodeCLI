const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let params = data.toString().trim().split(" ");
  let cmd = params[0];
  let args = params.slice(1);
  commands[cmd](args, done);
});

function done(result) {
  process.stdout.write(result + "\n");
  process.stdout.write("\nprompt > ");
}
