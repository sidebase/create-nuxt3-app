module.exports = {
  description: 'Scaffold a new sidebase project',
  prompts: [
    {
      type: 'list',
      name: 'actions',
      message: 'Would you like to use Github Actions?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should the project be called?',
    },
  ],
  actions: (data) => {
    let actions = [];

    // Import basic files
    actions = actions.concat(
      {
        type: 'addMany',
        destination: '{{name}}/',
        base: 'plop-templates/sidebase-main/',
        templateFiles: 'plop-templates/sidebase-main/**/**',
        abortOnFail: false,
      });

    // Import hidden GitHub files
    actions = actions.concat(
      {
        type: 'addMany',
        destination: '{{name}}/',
        base: 'plop-templates/sidebase-main/',
        templateFiles: 'plop-templates/sidebase-main/.github/**',
        abortOnFail: false,
      });

    if (data.actions === 'Yes') {
      actions = actions.concat({
        type: 'add',
        path: `{{name}}/.github/workflows/ci.yaml`,
        templateFile: 'plop-templates/github-actions/.github/workflows/ci.yaml',
        abortOnFail: false,
      });
    }
    return actions;
  }
};
