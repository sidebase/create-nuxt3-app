import type {NodePlopAPI} from "node-plop"
import url from "url"
import addActions from "./actions"

// determine absolute path to the template file location
const templateRoot = url.fileURLToPath(new URL("../templates", import.meta.url))

const addTemplates = function (basePlop: NodePlopAPI) {
  // Inject plop with custom actions
  const plop = addActions(basePlop)

  // Add sidebase generator
  plop.setGenerator("sidebase", {
    description: "Scaffold a new sidebase project",
    prompts: [
      {
        type: "input",
        name: "projectPath",
        message: "Where should the project be created?",
      },
      {
        type: "confirm",
        name: "server",
        message: "Would you like to use a server?",
        default: false,
      },
      {
        type: "list",
        name: "ci",
        message: "Which CI would you like to use?",
        choices: ["github-actions", "none"],
      },
    ],
    actions: (data) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let actions: any[] = []

      // Import basic files
      actions = actions.concat(
        {
          type: "copy",
          src: `${templateRoot}/sidebase-main/`,
          dest: `${data?.projectPath}/`
        })

      if (data?.server) {
        actions = actions.concat(
          {
            type: "copy",
            src: `${templateRoot}/with-server/`,
            dest: `${data?.projectPath}/`
          },
          {
            type: "mergeJSON",
            primaryJSONFile: `${templateRoot}/sidebase-main/package.json`,
            secondaryJSONFile: `${templateRoot}/with-server/package.json`,
            dest: `${data?.projectPath}/package.json`
          }
        )
      }

      // Import CI
      if (data?.ci === "github-actions") {
        actions = actions.concat({
          type: "add",
          path: "{{projectPath}}/.github/workflows/ci.yaml",
          templateFile: `${templateRoot}/github-actions/.github/workflows/ci.yaml`,
          abortOnFail: false,
        })
      }
      return actions
    }
  })

  return plop
}

export default addTemplates
