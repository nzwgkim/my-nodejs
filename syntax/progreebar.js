
// https://nodejs.dev/learn/output-to-the-command-line-using-nodejs
// npm install progress

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 30 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
