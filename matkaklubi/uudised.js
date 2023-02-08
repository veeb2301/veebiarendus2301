const uudised = [
    {
        autor: 'Mina Ise',
        pealkiri: 'Esimene uudis',
        pildiUrl: './assets/Hills.png',
        sisu: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic soluta praesentium tempore minima sint, dicta ipsum consequuntur in! Hic cumque totam suscipit unde neque quisquam reiciendis cum animi aspernatur!'
    },
    {
        autor: 'Mina Ise',
        pealkiri: 'Teine uudis',
        pildiUrl: './assets/Hills.png',
        sisu: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic soluta praesentium tempore minima sint, dicta ipsum consequuntur in! Hic cumque totam suscipit unde neque quisquam reiciendis cum animi aspernatur!'
    },
    {
        autor: 'Kolmas Ise',
        pealkiri: 'Esimene uudis',
        pildiUrl: './assets/Hills.png',
        sisu: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic soluta praesentium tempore minima sint, dicta ipsum consequuntur in! Hic cumque totam suscipit unde neque quisquam reiciendis cum animi aspernatur!'
    },
]


function koostaUudiseHtml(uudis) {
    return `
    <div class="card">
        <img class="card-img-top" src="${uudis.pildiUrl}" alt="">
        <div class="card-body">
            <h4>${uudis.autor}: ${uudis.pealkiri}</h4>
            <p>
                ${uudis.sisu}
            </p>
        </div>
    </div>    
    `
}

let uudisteHtml = ''

for (let uudis of uudised) {
    uudisteHtml += koostaUudiseHtml(uudis)
}

document.querySelector('.uudised').innerHTML = uudisteHtml