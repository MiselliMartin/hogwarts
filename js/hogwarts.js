let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function startGame() {

    let botongryffindor = document.getElementById("labelgryffindor")
    botongryffindor.addEventListener("click" , vozgryffindor)
    let botonslytherin = document.getElementById("labelslytherin")
    botonslytherin.addEventListener("click" , vozslytherin)
    let botonhufflepuff = document.getElementById("labelhufflepuff")
    botonhufflepuff.addEventListener("click" , vozhufflepuff)
    let botonravenclaw = document.getElementById("labelravenclaw")
    botonravenclaw.addEventListener("click" , vozravenclaw)

    let seleccionCasa = document.getElementById("seleccionCasa")
    seleccionCasa.addEventListener("click", eleccionCasa)
    seleccionCasa.style = "font-size: larger;background-color: grey"

    let expelliarmus = document.getElementById("ataqueExpelliarmus")
    expelliarmus.addEventListener("click", eleccionExpelliarmus)

    let avadaKedavra = document.getElementById("ataqueAvada")
    avadaKedavra.addEventListener("click", eleccionAvada)
    
    let protego = document.getElementById("ataqueProtego")
    protego.addEventListener("click", eleccionProtego)

    let reiniciar = document.getElementById("reinicio")
    reiniciar.addEventListener("click", reinicio)
    reiniciar.style.display = "none"

    let sectionMessages = document.getElementById("messages")
    sectionMessages.style.display = ("none")
    
}

function vozgryffindor () {
    document.getElementById("gryffindorsound").play()
}

function vozslytherin () {
    document.getElementById("slytherinsound").play()
}

function vozhufflepuff () {
    document.getElementById("hufflepuffsound").play()
}

function vozravenclaw () {
    document.getElementById("ravenclawsound").play()
}


function eleccionCasa() {
    
    let inputgryffindor = document.getElementById("gryffindor");
    let inputslytherin = document.getElementById("slytherin");
    let inputhufflepuff = document.getElementById("hufflepuff");
    let inputravenclaw = document.getElementById("ravenclaw");

    if (inputgryffindor.checked) {
        document.getElementById("casaElegida").innerHTML = "Gryffindor 🦁"
        pc = 0
        pc = aleatorio(1,3)
        alert("Tu casa rival es " + eleccionPCGryffindor(pc))
        inputgryffindor.disabled = true
        inputslytherin.disabled = true
        inputhufflepuff.disabled = true
        inputravenclaw.disabled = true
        let seleccionCasa = document.getElementById("seleccionCasa")
        seleccionCasa.disabled = true
        seleccionCasa.style = false
        let sectionAtaque = document.getElementById("attack")
        sectionAtaque.hidden = false
        let reiniciar = document.getElementById("reinicio")
        reiniciar.style.display = "block"
        let sectionMessages = document.getElementById("messages")
        sectionMessages.style.display = ("block")
        let sectionCasas = document.getElementById("house")
        sectionCasas.style.display = ("none")
        let eselboton = document.getElementById("seleccionCasa")
        eselboton.style.display = ("none")
        let elsombrero = document.getElementById("sombrero")
        elsombrero.style.display = "none"
        let sectionGryffindor = document.getElementById("chooseGryffindor")
        sectionGryffindor.hidden = false
        let sacarTitulo = document.getElementById("titulo")
        sacarTitulo.style.display = "none"
        document.getElementById("musica").play()
        let escudohogwarts = document.getElementById("escudohogwarts")
        escudohogwarts.style.display = "none"
    } else if (inputslytherin.checked) {
        document.getElementById("casaElegida").innerHTML = "Slytherin 🐍"
        pc = 0
        pc = aleatorio(1,3)
        alert("Tu casa rival es " + eleccionPCSlytherin(pc))
        inputgryffindor.disabled = true
        inputslytherin.disabled = true
        inputhufflepuff.disabled = true
        inputravenclaw.disabled = true
        let seleccionCasa = document.getElementById("seleccionCasa")
        seleccionCasa.disabled = true
        seleccionCasa.style = false
        let sectionAtaque = document.getElementById("attack")
        sectionAtaque.hidden = false
        let reiniciar = document.getElementById("reinicio")
        reiniciar.style.display = "block"
        let sectionMessages = document.getElementById("messages")
        sectionMessages.style.display = ("block")
        let sectionCasas = document.getElementById("house")
        sectionCasas.style.display = ("none")
        let eselboton = document.getElementById("seleccionCasa")
        eselboton.style.display = ("none")
        let elsombrero = document.getElementById("sombrero")
        elsombrero.style.display = "none"
        let sectionSlytherin = document.getElementById("chooseSlytherin")
        sectionSlytherin.hidden = false
        let sacarTitulo = document.getElementById("titulo")
        sacarTitulo.style.display = "none"
        document.getElementById("musica").play()
        let escudohogwarts = document.getElementById("escudohogwarts")
        escudohogwarts.style.display = "none"
    } else if(inputhufflepuff.checked) {
        document.getElementById("casaElegida").innerHTML = "Hufflepuff 🦡"
        pc = 0
        pc = aleatorio(1,3)
        alert("Tu casa rival es " + eleccionPCHufflepuff(pc))
        inputgryffindor.disabled = true
        inputslytherin.disabled = true
        inputhufflepuff.disabled = true
        inputravenclaw.disabled = true
        let seleccionCasa = document.getElementById("seleccionCasa")
        seleccionCasa.disabled = true
        seleccionCasa.style = false
        let sectionAtaque = document.getElementById("attack")
        sectionAtaque.hidden = false
        let reiniciar = document.getElementById("reinicio")
        reiniciar.style.display = "block"
        let sectionMessages = document.getElementById("messages")
        sectionMessages.style.display = ("block")
        let sectionCasas = document.getElementById("house")
        sectionCasas.style.display = ("none")
        let eselboton = document.getElementById("seleccionCasa")
        eselboton.style.display = ("none")
        let elsombrero = document.getElementById("sombrero")
        elsombrero.style.display = "none"
        let sectionHufflepuff = document.getElementById("chooseHufflepuff")
        sectionHufflepuff.hidden = false
        let sacarTitulo = document.getElementById("titulo")
        sacarTitulo.style.display = "none"
        let escudohogwarts = document.getElementById("escudohogwarts")
        escudohogwarts.style.display = "none"
        document.getElementById("musica").play()
    } else if (inputravenclaw.checked) {
        document.getElementById("casaElegida").innerHTML = "Ravenclaw 🦅"
        pc = 0
        pc = aleatorio(1,3)
        alert("Tu casa rival es " + eleccionPCRavenclaw(pc))
        inputgryffindor.disabled = true
        inputslytherin.disabled = true
        inputhufflepuff.disabled = true
        inputravenclaw.disabled = true
        let seleccionCasa = document.getElementById("seleccionCasa")
        seleccionCasa.disabled = true
        seleccionCasa.style = false
        let sectionAtaque = document.getElementById("attack")
        sectionAtaque.hidden = false
        let reiniciar = document.getElementById("reinicio")
        reiniciar.style.display = "block"
        let sectionMessages = document.getElementById("messages")
        sectionMessages.style.display = ("block")
        let sectionCasas = document.getElementById("house")
        sectionCasas.style.display = ("none")
        let eselboton = document.getElementById("seleccionCasa")
        eselboton.style.display = ("none")
        let elsombrero = document.getElementById("sombrero")
        elsombrero.style.display = "none"
        let sectionRavenclaw = document.getElementById("chooseRavenclaw")
        sectionRavenclaw.hidden = false
        let sacarTitulo = document.getElementById("titulo")
        sacarTitulo.style.display = "none"
        document.getElementById("musica").play()
        let escudohogwarts = document.getElementById("escudohogwarts")
        escudohogwarts.style.display = "none"
    } else {
        alert("Before continue you must pass trough the Sorting Hat 🎩")
        document.getElementById("casaElegida").innerHTML = "Muggle!"
    }
    
}

function eleccionExpelliarmus () {
sonido = 0
sonido = aleatorio(1, 6)
if (sonido == 1) {
    document.getElementById("expelliarmusHP").play()
} else if (sonido == 2) {
    document.getElementById("expelliarmusHG").play()
} else if (sonido == 3) {
    document.getElementById("expelliarmusAD").play()
} else if (sonido == 4) {
    document.getElementById("expelliarmusCD").play()
} else if (sonido == 5) {
    document.getElementById("expelliarmusLL").play()
} else {
    document.getElementById("expelliarmusRL").play()
}
ataqueJugador = "Expelliarmus"
ataquePC()
}

function eleccionAvada() {
sonido = 0
sonido = aleatorio(1, 4)
if (sonido == 1) {
    document.getElementById("avadakedavraAM").play()
} else if (sonido == 2) {
    document.getElementById("avadakedavraBL").play()
} else if (sonido == 3) {
    document.getElementById("avadakedavraLV").play()
} else {
    document.getElementById("avadakedavraSS").play()
}
ataqueJugador = "Avada Kedavra"
ataquePC()
}


function eleccionProtego() {
var audio = document.getElementById("protegoHG")
audio.play()
ataqueJugador = "Protego"
ataquePC()
} 

function eleccionPCGryffindor(azar) {
    let resultado = ""
    if (azar == 1) {
        resultado = "Slytherin 🐍" 
    } else if (azar == 2) {
        resultado = "Hufflepuff 🦡"
    }else if (azar == 3) {
        resultado = "Ravenclaw 🦅"}
    return (resultado, document.getElementById("casaAleatoria").innerHTML = resultado)
}

function eleccionPCSlytherin(azar) {
        let resultado = ""
        if (azar == 1) {
            resultado = "Gryffindor 🦁" 
        } else if (azar == 2) {
            resultado = "Hufflepuff 🦡"
        } else if (azar == 3) {
            resultado = "Ravenclaw 🦅"}
        
        return (resultado, document.getElementById("casaAleatoria").innerHTML = resultado)
}

function eleccionPCHufflepuff(azar) {
    let resultado = ""
    if (azar == 1) {
        resultado = "Slytherin 🐍" 
    } else if (azar == 2) {
        resultado = "Gryffindor 🦁"
    } else if (azar == 3) {
        resultado = "Ravenclaw 🦅"}
    
    return (resultado, document.getElementById("casaAleatoria").innerHTML = resultado)
}

function eleccionPCRavenclaw(azar) {
    let resultado = ""
    if (azar == 1) {
        resultado = "Slytherin 🐍" 
    } else if (azar == 2) {
        resultado = "Gryffindor 🦁"
    } else if (azar == 3) {
        resultado = "Hufflepuff 🦡"}
    return (resultado, document.getElementById("casaAleatoria").innerHTML = resultado)
}

function ataquePC () {
    let alea = aleatorio(1, 3)
    if (alea == 1) {
        ataqueEnemigo = "Expelliarmus"
    } else if (alea == 2) {
        ataqueEnemigo = "Avada Kedavra"
    } else {
        ataqueEnemigo = "Protego"
    } 
    
    batallar()
}

function aleatorio(min, max) {
    return Math.floor (Math.random()*(max-min+1) + min)
}

function batallar() {
    
    let spanvidasJugador = document.getElementById("vidasPropias")
    let spanvidasEnemigo = document.getElementById("vidasAjenas")  

    if (ataqueJugador == "Expelliarmus" && ataqueEnemigo == "Expelliarmus") {
        crearMensaje("Empate, lanza otro hechizo!")
        window.scrollTo(0,document.body.scrollHeight)
    } else if (ataqueJugador == "Avada Kedavra" && ataqueEnemigo == "Avada Kedavra") {
        crearMensaje ("Empate, lanza otro hechizo!")
        window.scrollTo(0,document.body.scrollHeight)
    } else if (ataqueJugador == "Protego" && ataqueEnemigo == "Protego") {
        crearMensaje("Empate, lanza otro hechizo!")
        window.scrollTo(0,document.body.scrollHeight)
    } else if (ataqueJugador == "Expelliarmus" && ataqueEnemigo == "Avada Kedavra") {
        crearMensaje("Triunfo! 🪄")
        window.scrollTo(0,document.body.scrollHeight)
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo 
    } else if (ataqueJugador == "Avada Kedavra" && ataqueEnemigo == "Protego") {
        crearMensaje("Triunfo! 🪄")
        window.scrollTo(0,document.body.scrollHeight)
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo 
    } else if (ataqueJugador == "Protego" && ataqueEnemigo == "Expelliarmus") {
        crearMensaje("Triunfo! 🪄")
        window.scrollTo(0,document.body.scrollHeight)
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo 
    } else {
        crearMensaje("Derrota 😨")
        window.scrollTo(0,document.body.scrollHeight)
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador 
    
    }
    revisarVidas()

}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicidades! Ganaste la Copa de las Casas de Hogwarts 🥳 eres El Elegido")
        alert("GANASTE! Toca el botón reinciar para iniciar un nuevo duelo.")
        window.scrollTo(0,document.body.scrollHeight)
     } else if (vidasJugador == 0) {
        crearMensajeFinal("Perdiste la Copa de las Casas de Hogwarts 😔 eres el Indeseable N°1")
        alert("PERDISTE! Toca el botón reinciar para cobrar venganza en un nuevo duelo.")
        window.scrollTo(0,document.body.scrollHeight)
    }
}

function crearMensaje(resultadoBatalla) {
    let sectionBatalla = document.getElementById("batalla") 
   let parrafo = document.createElement("p") 
   parrafo.id = "batallacrear"
   parrafo.innerHTML = ("Atacaste a tu rival con " + ataqueJugador + ", el enemigo atacó con " + ataqueEnemigo + " la batalla resultó en " + resultadoBatalla)
   sectionBatalla.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionFinal = document.getElementById("resultadoFinal") 
   let parrafo = document.createElement("p") 
  parrafo.id = "finalcrear"
   parrafo.innerHTML = resultadoFinal
   sectionFinal.appendChild(parrafo)

   let reiniciar = document.getElementById("reinicio")
    reiniciar.style ="font-size: xx-large; background-color: purple"
   
   let expelliarmus = document.getElementById("ataqueExpelliarmus")
    expelliarmus.disabled = true

    let avadaKedavra = document.getElementById("ataqueAvada")
    avadaKedavra.disabled = true
    
    let protego = document.getElementById("ataqueProtego")
    protego.disabled = true

    let casaRavenclaw = document.getElementById("chooseRavenclaw")
    casaRavenclaw.hidden = true

    let casaGryffindor = document.getElementById("chooseGryffindor")
    casaGryffindor.hidden = true

    let casaSlytherin = document.getElementById("chooseSlytherin")
    casaSlytherin.hidden = true

    let casaHufflepuff = document.getElementById("chooseHufflepuff")
    casaHufflepuff.hidden = true

    let casaStop = document.getElementById("stop")
    casaStop.hidden = true
   
    let casaHow = document.getElementById("how")
    casaHow.hidden = true
}

function reinicio() {
    location.reload()
}


window.addEventListener("load", startGame)