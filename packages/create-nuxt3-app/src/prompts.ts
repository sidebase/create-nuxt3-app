import prompts, { type PromptObject } from 'prompts'

const PROMPT_QUESTIONS: PromptObject[] = [
  {
    type: 'text',
    name: 'projectName',
    message: 'What should the project be called?',
  },
  {
    type: 'select',
    name: 'ci',
    message: 'Which CI would you like to use?',
    choices: [
      { title: 'GitHub Actions', description: 'Run your CI with GitHub actions.', value: 'github-actions' },
      { title: 'No CI', description: 'Scaffold a project without any CI pipeline', value: 'none' },
    ],
    initial: 0,
  },
]

const onCancel = () => {
  console.info('Aborting execution, bye bye 👋')
  process.exit()
}

export const getUserInput = async function () {
  const response = await prompts(PROMPT_QUESTIONS, { onCancel })
  return {
    projectName: response.projectName,
    server: response.server,
    ci: response.ci,
  }
}
