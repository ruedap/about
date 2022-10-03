"use strict";
const { h, Text } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: "Website",
    url: "http://ruedap.com"
  },
  {
    label: "Blog",
    url: "http://blog.ruedap.com"
  },
  {
    label: "GitHub",
    url: "https://github.com/ruedap"
  },
  {
    label: "Twitter",
    url: "https://twitter.com/ruedap"
  },
  {
    label: "Quit",
    action() {
      process.exit();
    }
  }
];

module.exports = () => (
  <div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
