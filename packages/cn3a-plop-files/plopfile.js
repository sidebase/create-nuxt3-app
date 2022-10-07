const { sidebase } = require('./plops');
const fs = require('fs-extra');
const {combinePackageJson} = require("./helpers");

module.exports = function (plop) {
  // Create custom Plop Action to copy files without parsing them
  plop.setActionType("copy", (answers, config, plop) => {
    const srcDir = plop.renderString(config.src, answers)
    const destDir = plop.renderString(config.dest, answers)
    fs.copySync(srcDir, destDir, { overwrite: false })
  })

  // Create custom Plop action to merge two package.json files
  plop.setActionType('mergePackageJSON', (answers, config, plop) => {
      fs.readJson(config.mainJSONFile, {}, (err, fileData) => {
        fs.readJson(config.secondJSONFile, {}, (err, secondFileData) => {
          const json = combinePackageJson(fileData, secondFileData)

          fs.writeJson(config.JSONFile, json, {spaces: 2}, err => {
            console.error(err);
          });
        })
      });
  })

  // Add generators
  plop.setGenerator('sidebase', sidebase);
}
