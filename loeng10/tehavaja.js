//Järgnevad standardsed ülesanded mida on vaja on teha igal hommikul
const ylesanne1 = {
    kirjeldus: 'Lugeda head raamatut',
    olulisus: 3,
    kasTehtud: false,
    kategooria: 'heaolu'
}
const ylesanne2 = {
    kirjeldus: 'Käia teatris või kinos',
    olulisus: 3,
    kasTehtud: true,
    kategooria: 'heaolu'
}
const ylesanne3 = {
    kirjeldus: 'Jookse kolm korda nädalas 3 kilomeetrit',
    olulisus: 4,
    kasTehtud: true,
    kategooria: 'heaolu'
}

const ylesanded = [
    ylesanne1,
    ylesanne2,
    ylesanne3
]

function muudaKasTehtudVaartusVastupidiseks(index) {
    const ylesanne = ylesanded[index]
    ylesanne.kasTehtud = !ylesanne.kasTehtud
    valjastaYlesanded()
}

// parameeter  - objekt ylesanne
// tagastab - teksti kujul ühe ülesande html-i
function koostaYlesandeHTML(ylesanne, index) {
    let margitud = ''
    let tehtud = ''

    if (ylesanne.kasTehtud) {
        margitud = 'checked'
        tehtud = 'tehtud'
    }
    
    const ylesanneHtml = `
    <div class="ylesanne row ${tehtud}">
        <div class="kasTehtud col-1"><input onclick="muudaKasTehtudVaartusVastupidiseks(${index})" type="checkbox" name="kasTehtud" ${margitud} ></div>
        <div class="kirjeldus col-6">${ylesanne.kirjeldus}</div>
        <div class="kategooria col-3">${ylesanne.kategooria}</div>
        <div class="oluisus col-2">${ylesanne.olulisus}</div>
    </div>
    `
    return ylesanneHtml
}

function valjastaYlesanded() {
    let koguValjundHtml = ''

    let index = 0
    for (let ylesanne of ylesanded) {
        koguValjundHtml += koostaYlesandeHTML(ylesanne, index)
        index++
    }
    
    document.getElementById('valjund').innerHTML =  koguValjundHtml
}


function lisaUusYlesanne() {
    const ylesandeTekst = document.getElementById('ylesanne').value
    const olulisus = document.getElementById('olulisus').value
    const ylesanne = {
        kirjeldus: ylesandeTekst,
        olulisus: olulisus,
        kasTehtud: false,
        kategooria: 'heaolu'
    }

    ylesanded.push(ylesanne)
    valjastaYlesanded()

}

 //vajalik esmase väljund joonistamiseks
 valjastaYlesanded()

