let nimi = prompt("Sisesta enda nimi")

let valjundElement = document.getElementById('valjund')
valjundElement.innerHTML = "Tähed sinu nimes: <br>"
for (let i = 0; i < nimi.length; i++) {
    let taht = nimi[i]
    // hint: if (nimi[i] == 'õ')
    valjundElement.innerHTML +=  'Täht: ' + (i + 1) + ' - ' +  nimi[i] + '<br>'
}

for (let i = nimi.length - 1; i >= 0; i-- ) {
    let taht = nimi[i]
    // hint: if (nimi[i] == 'õ')
    if ( taht == 'õ') {
        valjundElement.innerHTML +=  'Eriline täht: ' + (i + 1) + ' - ' +  '*' + '<br>'

    } else {
        valjundElement.innerHTML +=  'Täht: ' + (i + 1) + ' - ' +  nimi[i] + '<br>'
    }
}

if (nimi.length <= 6) {
    valjundElement.innerHTML += '<h2>Sul on ilus lühike nimi</h2>'
} else {
    valjundElement.innerHTML += '<h3>Sul on ilus pikk nimi</h3>'
}

function valjastaRuut(x) {
    let ruut = x * x
    console.log( ruut )
    valjundElement.innerHTML +=  x + ' ruut on ' + ruut + '<br>'
}

valjastaRuut(10)
valjastaRuut(100)
valjastaRuut(68)
