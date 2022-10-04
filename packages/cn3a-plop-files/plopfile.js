const { sidebase } = require('./plops');
const fs = require('fs-extra');

module.exports = function (plop) {
  // Create custom Plop Action to copy files without parsing them
  plop.setActionType("copy", (answers, config, plop) => {
    const srcDir = plop.renderString(config.src, answers)
    const destDir = plop.renderString(config.dest, answers)
    fs.copySync(srcDir, destDir, { overwrite: false })
  })

  // Add generators
  plop.setGenerator('sidebase', sidebase);
}
