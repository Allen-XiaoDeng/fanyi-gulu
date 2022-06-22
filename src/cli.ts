#! /usr/bin/env node
import * as Commander from "commander";
import { translate } from "./main";

const program = new Commander.Command();

program
  .version('0.0.1')
  .name('fanyi')
  .usage('<English>')
  .arguments('<English>')
  .action((english) => {
    translate(english);
  });



program.parse(process.argv);
