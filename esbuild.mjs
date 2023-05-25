import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { copy } from 'esbuild-plugin-copy';

const parseArg = () => {
  const args = {};
  process.argv.forEach((arg, index) => {
    if (/--/.test(arg)) {
      const argKey = arg.split('--')[1];
      args[argKey] = process.argv[index + 1];
    }
  });
  return args;
}

const { mode } = parseArg();

const IS_DEV = mode === 'development';

build({
  format: 'cjs',
  platform: 'node',
  entryPoints: IS_DEV ? ['./src/server/dev.ts'] : ['./src/server/prod.ts'],
  minify: false,
  bundle: true,
  outfile: 'dist/server.js',
  sourcemap: true,
  plugins: [
    copy({
      assets: {
        from: ['./src/server/public/**/*'],
        to: ['public'],
      },
      watch: true,
    }),
    nodeExternalsPlugin(),
  ],
}).catch(() => process.exit(1));    // Exit with non-zero status code on build failure