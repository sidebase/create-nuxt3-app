#!/usr/bin/env node
import {getUserInput} from "./prompts"
import {generateSuccessMessage, generateWelcomeMessage} from "./messages"
import nodePlop from "node-plop"
import addTemplates from "./plop"

(async () => {
  generateWelcomeMessage()
  const answers = await getUserInput()

  const plop = await nodePlop()
  const plopWithTemplates = addTemplates(plop)
  const sidebaseGenerator = plopWithTemplates.getGenerator("sidebase")

  const projectPath = `${process.cwd()}/${answers.projectName}`
  sidebaseGenerator.runActions({ projectPath, ci: answers.ci, server: false }).then(function (results) {
    if (results.failures.length !== 0) {
      console.error("An error has occurred while scaffolding your project.")
      return console.log("Errors:", results.failures)
    }
    generateSuccessMessage(answers.projectName)
  })
})()
