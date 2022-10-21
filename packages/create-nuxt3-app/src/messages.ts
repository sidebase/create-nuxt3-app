import chalk from "chalk";

export const generateDivider = () => {
  console.info("-------------------------------------------")
}

export const generateBlankLine = () => {
  console.info("")
}

export const generateWelcomeMessage = () => {
  generateDivider()
  console.info("       _     _      _                    \n" +
    "   ___(_) __| | ___| |__   __ _ ___  ___ \n" +
    "  / __| |/ _` |/ _ \\ '_ \\ / _` / __|/ _ \\\n" +
    "  \\__ \\ | (_| |  __/ |_) | (_| \\__ \\  __/\n" +
    "  |___/_|\\__,_|\\___|_.__/ \\__,_|___/\\___|")
  console.log("              By SIDESTREAM")
  generateDivider()
  generateBlankLine()
}

export const generateSuccessMessage = (projectName: string) => {
  generateBlankLine()
  console.log(chalk.bold("🎉 Your project has been successfully created!"))
  generateBlankLine()
  console.log("Next steps:")
  console.log(chalk.italic(`  ↪ cd /${projectName}`))
  console.log(chalk.italic("  ↪ npm install"))
  console.log(chalk.italic("  ↪ npm run dev"))
}
