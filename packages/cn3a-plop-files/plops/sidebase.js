module.exports = {
  description: 'Scaffold a new sidebase project',
  prompts: [
    {
      type: 'input',
      name: 'projectPath',
      message: 'Where should the project be created?',
    },
    {
      type: 'list',
      name: 'ci',
      message: 'Would you like to use Github Actions?',
      choices: ['Yes', 'No'],
    },
  ],
  actions: (data) => {
    let actions = [];

    // Import basic files
    actions = actions.concat(
      {
        type: 'addMany',
        destination: '{{projectPath}}/',
        base: 'plop-templates/sidebase-main/',
        templateFiles: 'plop-templates/sidebase-main/**/**',
        abortOnFail: false,
      });

    // Import hidden GitHub files
    actions = actions.concat(
      {
        type: 'addMany',
        destination: '{{projectPath}}/',
        base: 'plop-templates/sidebase-main/',
        templateFiles: 'plop-templates/sidebase-main/.github/**',
        abortOnFail: false,
      });

    if (data.ci === 'github-actions') {
      actions = actions.concat({
        type: 'add',
        path: `{{projectPath}}/.github/workflows/ci.yaml`,
        templateFile: 'plop-templates/github-actions/.github/workflows/ci.yaml',
        abortOnFail: false,
      });
    }
    return actions;
  }
};
