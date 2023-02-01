const ylesanded = [
	"Pesta hambad",
	"Toita kassi",
	"Jaluta koera",
	"Praadida mune",
	"Minna tööle",
];

function valjastaYlesanne(index) {
	return "<li>" + ylesanded[index] + "</li>";
}

function lisaYlesanne() {
	//Lugeda sisestuvälja väärtus
	let uusYlesanne = document.getElementById("uusYlesanne").value;
	//Lisa loetud ülesanne massiivi
	ylesanded.push(uusYlesanne);
    //Loo uuesti kogu väljund
    valjastaYlesanded()
    //tühjenda sisestuskast
    document.getElementById("uusYlesanne").value = ''
}

function valjastaYlesanded() {
	let valjundElement = document.getElementById("valjund");
	let valjundHtml = "";

	valjundHtml += "<ol>";

	for (let i = 0; i < ylesanded.length; i++) {
		valjundHtml += valjastaYlesanne(i);
	}

	valjundHtml += "</ol>";

	valjundElement.innerHTML = valjundHtml;
}

valjastaYlesanded()


