const fs = require('fs-extra'),
  util = require('util'),
  exec = util.promisify(require('child_process').exec);

async function run() {
  try {
    const execLH = `lighthouse --config-path=../js/custom-config.js http://dresdenjs.io --output json --output-path ./report.json`;
    await exec(execLH);

    const report = await fs.readJSON('./report.json');
    console.log(Object.keys(report));

  } catch (e) {
    console.error(e);
  }
}

run();