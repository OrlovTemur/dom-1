let boxLeft = document.querySelector('.box-left')
let green = document.querySelector('.green')
let silver = document.querySelector('.silver')
let gold = document.querySelector('.gold')
let graphite = document.querySelector('.graphite')
let blue = document.querySelector('.blue')
let boxLeft2 = document.querySelector('.box-left-2')
let boxLeft3 = document.querySelector('.box-left-3')
let boxLeft4 = document.querySelector('.box-left-4')
let boxLeft5 = document.querySelector('.box-left-5')

green.onclick = () => { 
    boxLeft.classList.add('box-left')
    boxLeft.classList.remove('box-left-5')
}

silver.onclick = () => { 
    boxLeft.classList.add('box-left-2')
    boxLeft.classList.remove('box-left')
}

gold.onclick = () => { 
    boxLeft.classList.add('box-left-3')
    boxLeft.classList.remove('box-left-2')
}


graphite.onclick = () => { 
    boxLeft.classList.add('box-left-4')
    boxLeft.classList.remove('box-left-3')
}

blue.onclick = () => { 
    boxLeft.classList.add('box-left-5')
    boxLeft.classList.remove('box-left-4')
}
