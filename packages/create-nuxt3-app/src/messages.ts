import chalk from 'chalk'

export const generateDivider = () => {
  console.info('--------------------------------------------------------------------------------------')
}

export const generateBlankLine = () => {
  console.info('')
}

export const generateWelcomeMessage = () => {
  generateDivider()
  console.info("                     _                              _   _____                         \n" // eslint-disable-line @typescript-eslint/quotes
    + "  ___ _ __ ___  __ _| |_ ___       _ __  _   ___  _| |_|___ /        __ _ _ __  _ __  \n" // eslint-disable-line @typescript-eslint/quotes
    + " / __| '__/ _ \\/ _` | __/ _ \\_____| '_ \\| | | \\ \\/ / __| |_ \\ _____ / _` | '_ \\| '_ \\ \n" // eslint-disable-line @typescript-eslint/quotes
    + "| (__| | |  __/ (_| | ||  __/_____| | | | |_| |>  <| |_ ___) |_____| (_| | |_) | |_) |\n" // eslint-disable-line @typescript-eslint/quotes
    + " \\___|_|  \\___|\\__,_|\\__\\___|     |_| |_|\\__,_/_/\\_\\\\__|____/       \\__,_| .__/| .__/ \n" // eslint-disable-line @typescript-eslint/quotes
    + "                                                                         |_|   |_|    ") // eslint-disable-line @typescript-eslint/quotes
  console.info('                         By sidebase ↝ https://sidebase.io')
  generateDivider()
  generateBlankLine()
  console.info(chalk.yellowBright('WARNING: create-nuxt3-app is in early development.'))
  console.info(chalk.italic('Initially it uses https://github.com/sidebase/sidebase as a nuxt 3 fullstack baseline,\nbut should soon support more different configurations.'))
  generateBlankLine()
}

export const generateSuccessMessage = (projectName: string) => {
  generateBlankLine()
  console.info(chalk.bold('🎉 Your project has been successfully created!'))
  generateBlankLine()
  console.info('Next steps:')
  console.info(chalk.italic(`  ↪ cd ${projectName}/`))
  console.info(chalk.italic('  ↪ npm install'))
  console.info(chalk.italic('  ↪ npm run dev'))
}
