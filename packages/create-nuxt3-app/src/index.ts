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
    console.log("YAYYY; MAybe it worked? IDK, please help me")
  });
})()
