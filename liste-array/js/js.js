/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// indkøbsseddel
let minListe = [
    'Kaffe: Lavazzo',
    'Køkkenpapir',
    'Madolie',
    'Rejer',
    'Sølvpapir',
    'Hunden udenfor',
    'Guitar',
    'Ledninger'
]

// konsollen kan vise objekter
console.log( minListe )

// sådan viser vi et enkelt item fra listen
console.log( 'Står der rejer? - ' + minListe[3] )

// udskriv et element
// content.innerHTML = minListe[6]

// få hele listen ud
// content.innerHTML = minListe[0]
// content.innerHTML += minListe[1]
// content.innerHTML += minListe[6]

// et loop er smartere her
// brug et loop sådan

/*
for ( let i = 0; i < 7; i++ ) {
    console.log( minListe[ i ] )
}
*/

// et MEGET bedre loop
for ( let i = 0; i < minListe.length; i++ ) {
    //console.log( minListe[ i ] )
    content.innerHTML += '<li>' + minListe[ i ] + '</li>'
}

// Eksperiment
let mitGalleri = [
    'helloween.jpg',
    'marselis.jpg'
]

console.log( mitGalleri )

for ( let i=0; i < mitGalleri.length; i++  ){
    // galleriet
    galleriet.innerHTML += '<img src="images/' 
        + mitGalleri[i] + '" alt="billede">'
}

// pause : 10 minutter ... 13:10 fortsætter vi

// Kalender
let enUge = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag"
]

let maaneder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
]

 let d = new Date()
 console.log( d.getDay() )

iDag.innerHTML = enUge[ d.getDay() ]

// opgave ... skriv datoen på websiden
// dagens navn
// månedens navn
// hvad klokken er nu

console.log( 
    'Klokken er: ' 
    + d.getHours() 
    + ':' 
    + d.getMinutes() 
    + '.' 
)

console.log( maaneder[ d.getMonth() ] )




























