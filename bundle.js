var fs = require("fs");
 
async function readFile(f) {
  return new Promise((r, e) =>
    fs.readFile(f, (err, content) => (err ? e(err) : r(content.toString())))
  );
}

async function saveFile(fname, content) {
  return new Promise((r, e) =>
    fs.writeFile(fname, content, (err) => (err ? e(err) : r()))
  );
}

async function readDir(dirname) {
  return new Promise((r, e) =>
    fs.readdir(dirname, (err, fns) => (err ? e(err) : r(fns)))
  );
}

async function readFiles(dirname, onFileContent, onError) {
  const filenames = await readDir(dirname);
  const data = await Promise.all(filenames.map((f) => readFile(dirname + f)));
  return data;
}

async function bundle() {
  try {
    let template = await readFile("solution/index.html");
    let appjs = await readFile("solution/scripts/app.js");
    const babelScrpits = await readFiles("solution/scripts/components/");

    template = template.replace(
      /.script.*type=.text.babel.*src=.scripts.components.*/g,
      ""
    );

    template = template.replace(
      /.script.*type=.text.babel.*src=.scripts.app.js*/g,
      ""
    );

    await saveFile(
      "solution/output.html",
      template
        .replace(
          "</head>",
          `<script type="text/babel">\n${babelScrpits.join("\n\n")}\n</script>\n</head>`
        )
        .replace(
          "</body>",
          `<script type="text/babel">\n${appjs}\n</script>\n</body>`
        )
    );
  } catch (e) {
    console.log(e);
  }
}

bundle();
