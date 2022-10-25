#!/usr/bin/env node
import nodePlop from 'node-plop'
import { getUserInput } from './prompts'
import { generateSuccessMessage, generateWelcomeMessage } from './messages'
import addTemplates from './plop'

(async () => {
  generateWelcomeMessage()
  const answers = await getUserInput()

  const plop = await nodePlop()
  const plopWithTemplates = addTemplates(plop)
  const sidebaseGenerator = plopWithTemplates.getGenerator('sidebase')

  const projectPath = `${process.cwd()}/${answers.projectName}`
  const generatorResults = await sidebaseGenerator.runActions({ projectPath, ci: answers.ci, server: false })

  if (generatorResults.failures.length !== 0) {
    console.error('An error has occurred while scaffolding your project.')
    return console.info('Errors:', generatorResults.failures)
  }

  generateSuccessMessage(answers.projectName)
})()
