export const generateDivider = () => {
  console.info("-------------------------------------------")
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
}
