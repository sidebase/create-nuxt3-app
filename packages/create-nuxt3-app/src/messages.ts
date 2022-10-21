import chalk from "chalk"

export const generateDivider = () => {
  console.info("--------------------------------------------------------------------------------------")
}

export const generateBlankLine = () => {
  console.info("")
}

export const generateWelcomeMessage = () => {
  generateDivider()
  console.info("                     _                              _   _____                         \n" +
    "  ___ _ __ ___  __ _| |_ ___       _ __  _   ___  _| |_|___ /        __ _ _ __  _ __  \n" +
    " / __| '__/ _ \\/ _` | __/ _ \\_____| '_ \\| | | \\ \\/ / __| |_ \\ _____ / _` | '_ \\| '_ \\ \n" +
    "| (__| | |  __/ (_| | ||  __/_____| | | | |_| |>  <| |_ ___) |_____| (_| | |_) | |_) |\n" +
    " \\___|_|  \\___|\\__,_|\\__\\___|     |_| |_|\\__,_/_/\\_\\\\__|____/       \\__,_| .__/| .__/ \n" +
    "                                                                         |_|   |_|    ")
  console.log("                         By sidebase ↝ https://sidebase.io")
  generateDivider()
  generateBlankLine()
  console.info(chalk.yellowBright("WARNING: create-nuxt3-app is in early development."))
  console.info(chalk.italic("Initially it uses https://github.com/sidebase/sidebase as a nuxt 3 fullstack baseline,\nbut should soon support more different configurations."))
  generateBlankLine()
}

export const generateSuccessMessage = (projectName: string) => {
  generateBlankLine()
  console.log(chalk.bold("🎉 Your project has been successfully created!"))
  generateBlankLine()
  console.log("Next steps:")
  console.log(chalk.italic(`  ↪ cd ${projectName}/`))
  console.log(chalk.italic("  ↪ npm install"))
  console.log(chalk.italic("  ↪ npm run dev"))
}
