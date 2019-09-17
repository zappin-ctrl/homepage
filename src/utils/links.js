// Bowser65 made this, yes
export function makeLinks(items) {
  var screenH = document.getElementById('js-bg').getBoundingClientRect().height - 65
  var links = items.links.split('\n').slice(0, Math.floor((window.innerHeight - 65) / 40))
  if (links.length * 52 > screenH) {
    document.getElementById('quicklinks').classList.add('compact')
  }

  for (var i = 0; i < links.length; i++) {
    (function (lnk) {
      if (lnk.length) {
        setTimeout(async function () {
          var link = document.createElement('a')
          var img = document.createElement('img')
          var txt = document.createElement('span')

          link.classList.add('quicklink')
          link.classList.add('load')
          setTimeout(function () {
            link.classList.remove('load')
          }, 810)
          link.setAttribute('href', lnk)

          img.classList.add('quicklink-icon')
          img.setAttribute('src', 'https://cdn.bowser65.xyz/i/web.png')

          txt.classList.add('quicklink-txt')
          txt.innerText = lnk

          link.appendChild(img)
          link.appendChild(txt)
          document.getElementById('quicklinks').appendChild(link)

          const resp = await fetch(`https://api.bowser65.xyz/favicon/${encodeURIComponent(lnk)}`)
          const json = await resp.json()
          if (json.icon) {
            img.setAttribute('src', json.icon)
          }
        }, i * 200)
      }
    })(links[i])
  }
}
