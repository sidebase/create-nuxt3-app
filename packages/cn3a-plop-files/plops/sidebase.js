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
      message: 'Which CI would you like to use?',
      choices: ['github-actions', 'none'],
    },
  ],
  actions: (data) => {
    let actions = [];

    // Import basic files
    actions = actions.concat(
      {
        type: "copy",
        src: "plop-templates/sidebase-main/",
        dest: "{{projectPath}}"
      });

    // Import CI
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
