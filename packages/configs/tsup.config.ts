import { defineConfig, Options } from "tsup";

export function createTsupConfig(
  options = {
    entry: ["src/index.ts"],
    external: [] as string[],
    noExternal: [] as string[],
    platform: "neutral",
    format: ["esm"],
    target: "es2022",
    skipNodeModulesBundle: true,
    clean: true,
    shims: true,
    minify: false,
    splitting: false,
    keepNames: true,
    dts: true,
    sourcemap: true,
    esbuildPlugins: [],
  } as Options
) {
  return defineConfig(options);
}
