let matkad = [
    {
        nimi: 'Jalgsimatk Pärnumaal',
        kirjeldus: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi nam obcaecati unde natus voluptas ex, voluptatum soluta enim dolorem ut blanditiis neque similique impedit ad qui sapiente rem reprehenderit!',
        pildiAadress: './assets/matkaja.png'
    },
    {
        nimi: 'Rattamatk Jõgevamaal',
        kirjeldus: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi nam obcaecati unde natus voluptas ex, voluptatum soluta enim dolorem ut blanditiis neque similique impedit ad qui sapiente rem reprehenderit!',
        pildiAadress: './assets/matkaja.png'
    },
    {
        nimi: 'Süstamatk Kõrvemaal',
        kirjeldus: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sequi nam obcaecati unde natus voluptas ex, voluptatum soluta enim dolorem ut blanditiis neque similique impedit ad qui sapiente rem reprehenderit!',
        pildiAadress: './assets/matkaja.png'
    },
]

function koostaMatkaHTML(matk) {
    return `
    <div class="card">
        <img class="card-img-top" src="${matk.pildiAadress}" alt="">
        <div class="card-body">
            <h4>${matk.nimi}</h4>
            <p>
                ${matk.kirjeldus}
            </p>
        </div>
    </div>    
    `
}

let matkadeHtml = ''

for (let matk of matkad) {
    matkadeHtml += koostaMatkaHTML(matk)
}

document.querySelector('.matkad').innerHTML = matkadeHtml

