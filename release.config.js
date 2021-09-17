module.exports = {
  branches: ['develop'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'index.js',
          'prettier.config.js',
          'README.md',
          'CHANGELOG.md',
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'index.js',
          'prettier.config.js',
          'README.md',
          'CHANGELOG.md',
        ],
      },
    ],
  ],
};
