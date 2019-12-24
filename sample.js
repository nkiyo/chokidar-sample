// - [x] ignoreの使い方
// - [ ] 検出するファイルパターン

const chokidar = require('chokidar')

const watcher = chokidar.watch(['./sample', './sample2', ], {
  ignored: '**/*.txt', // https://github.com/micromatch/anymatch 互換の定義
  persistent: true,
  ignoreInitial: true,
})

watcher.on('add', (path, stats) => console.log(`${path} added. size = ${stats.size}`))
watcher.on('change', (path, stats) => console.log(`${path} changed. size = ${stats.size}`))
watcher.on('unlink', (path) => console.log(`${path} unlinked`))
watcher.on('addDir', (path, stats) => console.log(`${path} directory added. size = ${stats.size}`))
watcher.on('unlinkDir', (path) => console.log(`${path} directory unlinked`))
