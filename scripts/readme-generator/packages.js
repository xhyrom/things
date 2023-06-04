import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { markdownTable } from "markdown-table";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const packages = await readdir(join(dirname, "..", "..", "packages"));

const table = [["Package", "Status", "Description"]];

for (const pkg of packages) {
  const path = join(dirname, "..", "..", "packages", pkg);
  const json = JSON.parse(await readFile(join(path, "package.json"), "utf8"));

  const name = json.name;
  const description = json.description;
  const version = json.version;
  const status = json.things?.status ?? "wip";

  table.push([
    `[![${name}](https://img.shields.io/npm/v/@xhyrom/semver?label=%40xhyrom%2Fsemver&style=flat)](https://npmjs.org/${name})`,
    `[![${status}](https://img.shields.io/badge/status-${status}-${statusToColor(
      status
    )}.svg?style=flat)](#status-meaning)`,
    description,
  ]);
}

function statusToColor(status) {
  switch (status) {
    case "stable":
      return "brightgreen";
    case "beta":
      return "orange";
    case "lts":
      return "blue";
    case "wip":
      return "red";
  }
}

export default markdownTable(table);
