#!/usr/bin/env node
import initInterface from '../src/cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  initInterface();
};

greeting();
