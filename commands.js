const fs = require("fs");
const request = require("request");

function pwd(args, done) {
  let path = process.argv[1];
  // process.stdout.write(path + "\n");
  // process.stdout.write("\nprompt > ");
  done(path);
}

function date(args, done) {
  let date = new Date();
  // process.stdout.write(date + "\n");
  // process.stdout.write("\nprompt > ");
  done(date);
}

function ls(args, done) {
  let result = "";
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      result += file.toString() + "\n";
    });
    done(result);
  });
}

function echo(args, done) {
  let resultado = "";
  args.forEach((arg) => {
    if (process.env[arg.slice(1)]) {
      resultado += process.env[arg.slice(1)] + " ";
    } else {
      resultado += arg + " ";
    }
  });
  done(result);
}

function cat(arg, done) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    done(data);
  });
}

function head(arg, done) {
  fs.readFile(`./${arg}`, "utf-8", (err, data) => {
    if (err) throw err;
    let lines = data.split("\n");
    let response = lines.slice(0, 5).join("\n");
    done(response);
  });
}

function tail(arg, done) {
  fs.readFile(`./${arg}`, "utf-8", (err, data) => {
    if (err) throw err;
    let lines = data.split("\n");
    let response = lines.slice(lines.length - 11, lines.length).join("\n");
    done(response);
  });
}

function curl(url, done) {
  request(url.toString(), (err, response, body) => {
    if (err) throw err;
    done(body);
  });
}

module.exports = { pwd, date, ls, echo, cat, head, tail, curl };
