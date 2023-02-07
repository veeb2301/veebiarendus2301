const pildiAadressid = [
    './pildid/apelsin.jpg',
    './pildid/banaan.png',
    './pildid/porgand.jpg',
]

function teePildiHTML(pildiAadress) {
    //return '<img src="' + pildiAadress + '">'
    //return `<img src="${pildiAadress}">`
    return `
    <div class="pildiYmbris">
        <img src="${pildiAadress}">
    </div>
    `
}

let pildiGaleriiHTML = ''

for (let yksAadress of pildiAadressid) {
    pildiGaleriiHTML += teePildiHTML(yksAadress)
}

document.getElementById('valjund').innerHTML = pildiGaleriiHTML