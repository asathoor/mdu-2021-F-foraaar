/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// sådan laver jeg et loop
for ( let n = 0; n <= 10; n++ ) {
    //console.log( n )
    document.getElementById('content').innerHTML += '<img src="images/marselis.jpg">'
    document.getElementById('content').innerHTML += '<img src="images/greenman.jpg">'
    
    if (n > 3) {
        document.getElementById('content').innerHTML += '<img src="images/helloween.jpg">'
    }
    
}