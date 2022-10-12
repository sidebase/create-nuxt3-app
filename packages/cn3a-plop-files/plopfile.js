const { sidebase } = require('./plops');
const fs = require('fs-extra');
const { defu } = require('defu')

module.exports = function (plop) {
  // Create custom Plop Action to copy files without parsing them
  plop.setActionType("copy", (answers, config, plop) => {
    const srcDir = plop.renderString(config.src, answers)
    const destDir = plop.renderString(config.dest, answers)
    fs.copySync(srcDir, destDir, { overwrite: false })
  })

  /*
  Create custom Plop action to merge two package.json files
  Takes primaryJSONFile, secondaryJSONFile and dest as the output
  */
  plop.setActionType('mergeJSON', (answers, config, plop) => {
      fs.readJson(config.primaryJSONFile, {}, (err, primaryJSONFileData) => {
        fs.readJson(config.secondaryJSONFile, {}, (err, secondaryJSONFileData) => {
          const json = defu({...primaryJSONFileData, ...secondaryJSONFileData})

          fs.writeJson(config.dest, json, {spaces: 2}, err => {
            console.error(err);
          });
        })
      });
  })

  // Add generators
  plop.setGenerator('sidebase', sidebase);
}
