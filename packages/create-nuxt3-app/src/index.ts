#!/usr/bin/env node
import {getUserInput} from "./prompts"
import {generateWelcomeMessage} from './messages'
// import {dirname, join} from 'path'
import nodePlop from 'node-plop';

(async () => {
  generateWelcomeMessage();
  const answers = await getUserInput()

  /* Get the plop file from the external folder
  const cnaTemplateDir = join(dirname(require.resolve('cn3a-plop-files/package.json')))
  const plopFile = join(cnaTemplateDir, 'plopfile.js')
   */
  const plop = await nodePlop(`/Users/zoey/Documents/Development/SideStream/sidebase/create-nuxt3-app/packages/cn3a-plop-files/plopfile.js`);
  const sidebaseGenerator = plop.getGenerator('sidebase');

  const projectPath = `${process.cwd()}/${answers.projectName}`
  sidebaseGenerator.runActions({ projectPath, ci: answers.ci }).then(function (results) {
    if (results.failures.length !== 0) {
      console.error("An error has occurred while scaffolding your project.")
      return console.log('Errors:', results.failures)
    }
    console.log("Your project has been created.")
    console.log("Next steps:")
    console.log(`cd /${answers.projectName}`)
    console.log("npm install")
    console.log("npm run dev")
  });
})()
