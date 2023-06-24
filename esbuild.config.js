const { build } = require("esbuild");
const pkg = require("./package.json");

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

build({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
  external: [...external],
}).catch(() => process.exit(1));
