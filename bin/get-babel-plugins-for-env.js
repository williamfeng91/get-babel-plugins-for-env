#! /usr/bin/env node
"use strict";

const pluginList = require("@babel/compat-data/plugins");
const {
  default: getTargets,
  filterItems
} = require("@babel/helper-compilation-targets");
const {
  proposalPlugins,
  pluginSyntaxMap
} = require("@babel/preset-env/data/shipped-proposals");
const { filterStageFromList } = require("@babel/preset-env/lib/utils");

const pluginListWithoutProposals = filterStageFromList(
  pluginList,
  proposalPlugins
);

function main(argv) {
  const targets = getTargets({
    browsers: argv[2]
  });
  const plugins = filterItems(
    pluginList,
    new Set(),
    new Set(),
    targets,
    null,
    null,
    pluginSyntaxMap
  );
  plugins.forEach(plugin => console.log(plugin));
}

main(process.argv);
