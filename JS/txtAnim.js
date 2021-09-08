const txtAnim = document.querySelector('h2');

new Typewriter(txtAnim, {
    deleteSpeed: 20 
})
.typeString('Voyager en toute simplicité')
.pauseFor(1000)
.deleteChars(28)
.typeString('Réservé')
.typeString(' rapidement')
.pauseFor(1000)
.deleteChars(10)
.typeString(' facilement')
.pauseFor(1000)
.deleteChars(10)
.typeString(' en toute sécurité')
.pauseFor(1000)
.deleteChars(27)
.typeString('Télécharger l\'application')
.start()