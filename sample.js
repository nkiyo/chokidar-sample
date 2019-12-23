const chokidar = require('chokidar');

const watcher = chokidar.watch('./sample/*.txt', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
})

watcher.on('add', (path, stats) => console.log(`${path} added. size = ${stats.size}`))
watcher.on('change', (path, stats) => console.log(`${path} changed. size = ${stats.size}`))
watcher.on('unlink', path => console.log(`${path} unlinked`))
watcher.on('addDir', (path, stats) => console.log(`${path} directory added. size = ${stats.size}`))
watcher.on('unlinkDir', path => console.log(`${path} directory unlinked`))

