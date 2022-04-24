
// https://nodejs.dev/learn/output-to-the-command-line-using-nodejs
// npm install progress



// npm install module_name  #npm 모듈을 로컬 설치한다.
// npm install -g module_name  #npm 모듈을 전역 설치한다.
// npm uninstall module-name #설치된 모듈을 제거한다.

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 30 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
