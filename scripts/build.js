import { build } from 'esbuild'

const sharedConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  external: ['./node_modules/*'],
}

build({
  ...sharedConfig,
  platform: 'node',
  target: 'node16',
  outfile: 'dist/index.js',
  format: 'esm',
})

build({
  ...sharedConfig,
  outfile: 'dist/browser.js',
  treeShaking: true,
  minify: true,
  platform: 'browser',
  format: 'esm',
})
