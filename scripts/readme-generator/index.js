import { readFile, writeFile } from "node:fs/promises";
import packages from "./packages.js";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const README = await readFile(join(dirname, "..", "..", "README.md"), "utf8");

function parseHeadings(content) {
  const headings = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#+)\s+(.+)$/);

    if (match) {
      headings.push({
        depth: match[1].length,
        text: match[2],
      });
    }
  }

  return headings;
}

const headings = parseHeadings(README);

const newReadme = [
  README.slice(
    0,
    README.indexOf(headings[0].text) + headings[0].text.length + 1
  ),
  packages,
  README.slice(README.indexOf(headings[1].text) - 4),
].join("\n");

await writeFile(join(dirname, "..", "..", "README-new.md"), newReadme);
