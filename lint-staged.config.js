module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // This will lint and format TypeScript
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
};
