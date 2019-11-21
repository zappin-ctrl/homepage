import { isChrome, isFirefox, getBrowser } from "./browser.js"

function generateStyle() {
  var body = document.getElementById("body")
  body.classList.add("terminal")

  var me = document.getElementById("terminal-me")
  me.style.display = "block"
  me.innerText = `${getBrowser()}@homepage:~$ now --watch`

  var search_form = document.getElementById("formsearch")
  search_form.style.display = "none"
}

export function runTerminal() {
  generateStyle()
}
