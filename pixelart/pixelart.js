const container = document.querySelector('.gridcontainer')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')

let draw = false

function toggleGrid(){
container.classList.toggle('nogrid')
let xo = document.querySelector('.xo')
xo.classList.toggle('no')
if (xo.innerHTML === 'o') {
    xo.innerHTML = 'x'
}
else {
    xo.innerHTML = 'o'
}
}

function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('grid')

        div.addEventListener('mouseover', function(){
            
            if(!draw) return;
            div.style.backgroundColor = color.value;
        })

       div.addEventListener('click', function(){
    draw = false
    div.style.backgroundColor = color.value;
})

        container.appendChild(div)
    }
}

window.addEventListener('mousedown', function(){
    draw = true
})



window.addEventListener('mouseup', function(){
    draw = false
})

function reset(){
    container.innerHTML= ''
    populate(size)
}

resetBtn.addEventListener('click', reset)


sizeEl.addEventListener('change', function(){
    size = sizeEl.value
    reset()
})

populate(size)