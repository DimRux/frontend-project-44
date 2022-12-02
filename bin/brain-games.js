#!/usr/bin/env node
import nameUser from '../src/cli.js';

const User = () => {
  console.log('Welcome to the Brain Games!');
  nameUser();
};

User();