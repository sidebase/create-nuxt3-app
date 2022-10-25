import type { NodePlopAPI } from 'node-plop'
import fs from 'fs-extra'
import defu from 'defu'

const addActions = function (plop: NodePlopAPI) {
  plop.setActionType('copy', (answers, config, plop) => {
    const srcDir = plop.renderString(config.src, answers)
    const destDir = plop.renderString(config.dest, answers)
    fs.copySync(srcDir, destDir, { overwrite: false })
    return 'success'
  })

  plop.setActionType('mergeJSON', async (answers, config, plop) => {
    const primaryJSONFile = plop.renderString(config.primaryJSONFile, answers)
    const secondaryJSONFile = plop.renderString(config.secondaryJSONFile, answers)

    const primaryJSON = await fs.readJson(primaryJSONFile)
    const secondaryJSON = await fs.readJson(secondaryJSONFile)

    const combinedJSON = defu(primaryJSON, secondaryJSON)
    await fs.writeJson(config.dest, combinedJSON)
    return 'success'
  })

  return plop
}

export default addActions
