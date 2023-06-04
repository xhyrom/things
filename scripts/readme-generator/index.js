import { readFile, writeFile } from "node:fs/promises";
import packages from "./packages.js";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const README = await readFile(join(dirname, "..", "..", "README.md"), "utf8");

await writeFile(
  join(dirname, "..", "..", "README.md"),
  README.replace(
    /<!-- START-PACKAGES-TABLE -->[\s\S]*<!-- END-PACKAGES-TABLE -->/,
    `<!-- START-PACKAGES-TABLE -->\n${packages}\n<!-- END-PACKAGES-TABLE -->`
  )
);
