# xlsx-encrypter

[![npm version](https://badge.fury.io/js/xlsx-encrypter.svg)](https://badge.fury.io/js/xlsx-encrypter)
![License](https://img.shields.io/badge/license-MIT-green)

Service for generating and encrypting Excel/XLSX files.

## Installation

```bash
npm i xlsx-encrypter
```

or use [Yarn](https://yarnpkg.com/lang/en/)

```bash
yarn add xlsx-encrypter
```

## Usage

Simple usage:

```js
import { XlsxGenerator } from "xlsx-encrypter";

const xlsxGenerator = new XlsxGenerator();
const data = [
  {
    fruit: "Apples",
    quantity: 4,
    price: "£6.86",
  },
];

// Create worksheets
const workSheet = xlsxGenerator.createWorkSheet(data, "Fruit Sales");

// Create XLSX file
void xlsxGenerator.exportWorkSheetsToFile("/file-dir/file-name.xlsx", [
  workSheet,
]);
```

or the older way

```js
const XlsxGenerator = require("xlsx-encrypter");

const data = [
  {
    fruit: "Apples",
    quantity: 4,
    price: "£6.86",
  },
];

// Create worksheets
const workSheet = XlsxGenerator.createWorkSheet(data, "Fruit Sales");

// Create XLSX file
void XlsxGenerator.exportWorkSheetsToFile("/file-dir/file-name.xlsx", [
  workSheet,
]);
```

### Multiple Worksheets

Can handle multiple worksheets.

```js
import { XlsxGenerator } from "xlsx-encrypter";

const xlsxGenerator = new XlsxGenerator();
const data1 = [
  {
    fruit: "Apples",
    quantity: 4,
    price: "£6.86",
  },
];
const data2 = [
  {
    fruit: "Oranges",
    quantity: 2,
    price: "£3.26",
  },
];

// Create worksheets
const workSheet1 = xlsxGenerator.createWorkSheet(data1, "Fruit Sales: May");
const workSheet2 = xlsxGenerator.createWorkSheet(data2, "Fruit Sales: June");

// Create XLSX file
void xlsxGenerator.exportWorkSheetsToFile("/file-dir/file-name.xlsx", [
  workSheet1,
  workSheet2,
]);
```

### Headers

Default headers can be added. **NOTE:** Headers must match data structure exactly.

```js
import { XlsxGenerator } from "xlsx-encrypter";

const xlsxGenerator = new XlsxGenerator();
const data = [
  {
    fruit: "Apples",
    quantity: 4,
    price: "£6.86",
  },
];
const headers = ["fruit", "quantity", "price"];

// Create worksheets
const workSheet = xlsxGenerator.createWorkSheet(data, "Fruit Sales", headers);

// Create XLSX file
void xlsxGenerator.exportWorkSheetsToFile("/file-dir/file-name.xlsx", [
  workSheet,
]);
```

### Cell Origin

The cell origin of the data can be specified in `A1` format.

```js
import { XlsxGenerator } from "xlsx-encrypter";

const xlsxGenerator = new XlsxGenerator();
const data = [];
const headers = ["fruit", "quantity", "price"];
const cellOrigin = "B2";

// Create worksheets
const workSheet = xlsxGenerator.createWorkSheet(
  data,
  "Fruit Sales",
  headers,
  cellOrigin
);

// Create XLSX file
void xlsxGenerator.exportWorkSheetsToFile("/file-dir/file-name.xlsx", [
  workSheet,
]);
```

### Password Encryption

```js
import { XlsxGenerator } from "xlsx-encrypter";

const xlsxGenerator = new XlsxGenerator();
const data = [];
const password = "SuperSecurePassword";

// Create worksheets
const workSheet = xlsxGenerator.createWorkSheet(data, "Fruit Sales");

// Create XLSX file with password
void xlsxGenerator.exportWorkSheetsToFile(
  "/file-dir/file-name.xlsx",
  [workSheet],
  password
);
```

## Getting Started

### Prerequisites

To write and test code you will need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/) installed. If your on a Mac, use [Homebrew](https://docs.brew.sh/Installation) for installation.

```bash
brew install node
brew install yarn
```

### Installing

Install project dependencies

```bash
yarn
```

## Tests

### Unit Tests

Unit tests use [jest](https://facebook.github.io/jest/). Tests can be run globally from the root directory by running `yarn test`

```bash
yarn test
```

### Coding Style Tests

Code style is enforced by using a linter ([eslint](https://eslint.org/)) and [Prettier](https://prettier.io/).

```bash
yarn lint
```

## Deployment

### Automated

Automated deployment is undertaken with CircleCI.

- `main`: Deploy to NPM

## Built With

### Languages / Core Tools

- [Typescript](http://www.typescriptlang.org/) - The primary language

### Secondary Tooling

- [yarn](https://yarnpkg.com/lang/en/) - Typescript package management
- [jest](https://jestjs.io/) - Unit and integration testing framework

## Versioning

You'll need to bump the package version numbers manually for changes to be pushed to the npm registry.

## Contributing

Have a bug? File an issue with a simple example that reproduces this so we can take a look and confirm.

Want to make a change? Submit a PR, explain why it's useful, and make sure you've updated the docs (this file) and the tests.

## Authors

![mrkiplin-icon](docs/mrkiplin-icon.gif)

**Theo Jones** - [MrKiplin](https://github.com/MrKiplin)
