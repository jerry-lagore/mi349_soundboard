var button1 = document.getElementById('first')
var button2 = document.getElementById('second')
var button3 = document.getElementById('third')

button1.addEventListener('mouseenter', playBell)
button2.addEventListener('mouseenter', playRegister)
button3.addEventListener('mouseenter', playCymbals)

button1.addEventListener('click', playBell)
button2.addEventListener('click', playRegister)
button3.addEventListener('click', playCymbals)

function playBell() {
    var audio_bell = new Audio("boxing_bell.wav")
    audio_bell.play()
}

function playRegister() {
    var audio_reg = new Audio("cash_register_x.wav")
    audio_reg.play()
}

function playCymbals() {
    var audio_cym = new Audio("cymbals.wav")
    audio_cym.play()
}