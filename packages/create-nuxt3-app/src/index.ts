#!/usr/bin/env node
import {getUserInput} from "./prompts"
import {generateWelcomeMessage} from './messages'
import nodePlop from 'node-plop';
import { resolve } from 'path'

(async () => {
  generateWelcomeMessage();
  const plopFileLocation = resolve('cn3a-plop-files', 'plopfile.js')
  const answers = await getUserInput()

  const plop = await nodePlop(plopFileLocation);
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
