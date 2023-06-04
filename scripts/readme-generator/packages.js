import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { markdownTable } from "markdown-table";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const packages = (
  await Promise.all(
    (
      await readdir(join(dirname, "..", "..", "packages"))
    ).map(async (n) => {
      const path = join(dirname, "..", "..", "packages", n);
      const json = JSON.parse(
        await readFile(join(path, "package.json"), "utf8")
      );

      return json;
    })
  )
).sort(sortByStatus);

const table = [["Package", "Status", "Description"]];

for (const pkg of packages) {
  table.push([
    `[![${pkg.name}](https://img.shields.io/npm/v/${
      pkg.name
    }?label=${encodeURIComponent(pkg.name)}&style=flat)](https://npmjs.org/${
      pkg.name
    })`,
    `[![${pkg.things.status}](https://img.shields.io/badge/status-${
      pkg.things.status
    }-${statusToColor(pkg.things.status)}.svg?style=flat)](#status-meaning)`,
    pkg.description,
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

function sortByStatus(a, b) {
  const statusOrder = {
    stable: 0,
    lts: 1,
    beta: 2,
    wip: 3,
  };

  if (statusOrder[a.things.status] < statusOrder[b.things.status]) {
    return -1;
  }

  if (statusOrder[a.things.status] > statusOrder[b.things.status]) {
    return 1;
  }

  return a.name.localeCompare(b.name);
}

export default markdownTable(table);
