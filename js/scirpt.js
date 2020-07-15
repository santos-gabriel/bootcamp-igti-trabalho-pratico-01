window.addEventListener('load', start)

const r      = document.querySelector('#r')
const g      = document.querySelector('#g')
const b      = document.querySelector('#b')
const color  = document.querySelector('#color')
const r_text = document.querySelector('#r-text')
const g_text = document.querySelector('#g-text')
const b_text = document.querySelector('#b-text')

function start(){
  toggleColor()
  r.addEventListener('change', toggleColor)
  g.addEventListener('change', toggleColor)
  b.addEventListener('change', toggleColor)
}

function toggleColor(){
  color.innerHTML = `<div id="contentColor" style="background-color: rgb(${r.value}, ${g.value}, ${b.value});"></div>`
  r_text.value   = r.value
  g_text.value   = g.value
  b_text.value   = b.value
}
