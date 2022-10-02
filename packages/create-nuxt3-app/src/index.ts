#!/usr/bin/env node
import {getUserInput} from "./prompts"
import {generateWelcomeMessage} from './messages'
// import nodePlop from 'node-plop';

(async () => {
  generateWelcomeMessage();

  const answers = await getUserInput()

  /*
    const plop = await nodePlop(`./plopfile.js`);
    Get correct generator depending on what the user chooses
    const basicAdd = plop.getGenerator('sidebase');
   */
  console.log(answers)
})()
