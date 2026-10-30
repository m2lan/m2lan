const IDENTIFIER = 'df51b626a79cdad95c'
const HANDLE = ''

const cta = document.getElementById('cta')
const ctaText = document.getElementById('cta-text')
const hint = document.getElementById('hint')
const status = document.getElementById('status')

if (HANDLE) {
  cta.href = 'https://knocket.ai/' + HANDLE
  cta.target = '_blank'
  cta.rel = 'noopener'
  ctaText.textContent = '打开我的联系页'
  hint.textContent = '也可以直接点右下角的聊天气泡。'
}

cta.addEventListener('click', function (event) {
  if (HANDLE) return
  event.preventDefault()
  hint.textContent = '气泡在右下角 👉 点一下就能发消息'
  hint.style.color = '#3fd06a'
  setTimeout(function () {
    hint.style.color = ''
  }, 2600)
})

function widgetReady() {
  const w = window.contactWidget
  return Boolean(w && (w.emit || w.__options))
}

let tries = 0
const timer = setInterval(function () {
  tries += 1
  if (widgetReady()) {
    clearInterval(timer)
    ctaText.textContent = '开始聊天'
    status.textContent = '在线 · 通常几分钟内回复'
    hint.textContent = '点按钮或右下角的气泡都可以。'
    return
  }
  if (tries > 20) {
    clearInterval(timer)
    ctaText.textContent = '聊天暂时没加载出来'
    status.textContent = '稍后刷新再试'
    hint.textContent = '可能是网络拦截了脚本，刷新一次通常就好。'
  }
}, 500)