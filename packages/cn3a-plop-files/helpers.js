module.exports = function combinePackageJson(primaryJSON, secondaryJSON) {
  const fileData = primaryJSON;

  // Add dependencies
  Object.keys(secondaryJSON.dependencies).forEach((packageName) => {
    if (fileData.dependencies[name]) {
      return;
    }
    fileData.dependencies[name] = secondaryJSON.dependencies[packageName]
  })
  // Add devDependencies
  Object.keys(secondaryJSON.devDependencies).forEach((packageName) => {
    if (fileData.devDependencies[name]) {
      return;
    }
    fileData.devDependencies[name] = secondaryJSON.devDependencies[packageName]
  })
  return fileData
}
