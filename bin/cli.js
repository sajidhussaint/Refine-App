#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};



const reponame = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/sajidhussaint/Refine-App ${reponame}`;
// const installDepsCommand = `cd ${reponame} && npm install`;

console.log(`Cloning repository with ${reponame}`);

const checkout = runCommand(gitCheckoutCommand);

if (!checkout) process.exit(-1);

console.log(`Installing dependencies in ${reponame}`);

// const installedDeps = runCommand(installDepsCommand);

// if (!installedDeps) process.exit(-1);

console.log('Congratulations, you are ready ');
