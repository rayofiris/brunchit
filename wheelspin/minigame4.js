let wheel = document.querySelector('.wheel')
let spinbutton = document.querySelector('.spinbutton')
let value = Math.ceil(Math.random() * 3600)

spinbutton.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)"
    value += Math.ceil(Math.random() * 3600)
}