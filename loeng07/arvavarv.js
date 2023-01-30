
let varv = prompt('Arva ära minu lemmikvärv')
while ( varv !== 'roheline' ) {
    varv = prompt('Vale! Arva uuesti mis on minu lemmikvärv')
}

document.getElementById('valjund').innerHTML = '<h2>Jah - minu lemmikvärv on roheline</h2>'

