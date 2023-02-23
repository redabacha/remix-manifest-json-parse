import { baseline, bench, run } from 'mitata';
import { runInNewContext } from 'node:vm';

const ROUTE_COUNT = Number(process.argv[2]) || 1000;

console.log(`Creating test manifest with ${ROUTE_COUNT} route(s)`);
const testManifest = {
  version: 'TEST',
  entry: {
    module: '/build/entry.client-TEST.js',
    imports: [
      '/build/_shared/chunk-TEST1.js',
      '/build/_shared/chunk-TEST2.js',
      '/build/_shared/chunk-TEST3.js',
    ],
  },
  routes: new Array(ROUTE_COUNT)
    .fill(0)
    .map((_, i) => ({
      id: `routes/test${i + 1}`,
      parentId: 'root',
      module: '/build/routes/test-TEST.js',
      imports: ['/build/_shared/chunk-TEST.js'],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    }))
    .reduce((routes, route) => ({ ...routes, [route.id]: route }), {}),
  url: '/build/manifest-TEST.js',
};
const testManifestString = JSON.stringify(testManifest);

const withJsonParseCode = `test = JSON.parse('${testManifestString}')`;
const withoutJsonParseCode = `test = ${testManifestString}`;

baseline('with JSON.parse', () => {
  runInNewContext(withJsonParseCode, { test: undefined });
});
bench('without JSON.parse', () => {
  runInNewContext(withoutJsonParseCode, { test: undefined });
});

await run();
