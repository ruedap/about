#!/usr/bin/env node
"use strict";
const path = require("path");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const { h, render } = require("ink");

const ui = importJsx("./ui");

const fallback = async () => {
  const image = await terminalImage.file(path.join(__dirname, "avatar.png"));
  console.log(image);
};

termImg(path.join(__dirname, "avatar.png"), {
  width: "10%",
  fallback: fallback
});

render(h(ui));
