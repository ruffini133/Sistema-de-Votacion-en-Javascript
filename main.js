class Preguntas{
    constructor(pregunta, votos,respuestas, respuestaCorrecta){
        this.pregunta = pregunta;
        this.votos = votos;
        this.respuestas = respuestas;
        this.respuestaCorrecta = respuestaCorrecta;
    }

    votarOp1(){
        this.votos.push(1);
    }
    votarOp2(){
        this.votos.push(2);
    }
    votarOp3(){
        this.votos.push(3);
    }
    votarOp4(){
        this.votos.push(4);
    }
    countVotes(opcion) {
        return this.votos.reduce((count, item) => (item === opcion ? count + 1 : count), 0);
    }
}

const pregunta1 = new Preguntas("¿Quien fue el creador de JS?",
[],
["AMLO", "Yo mero", "Brendan Eich", "van Rossum"],
"Brendan Eich");

const pregunta2 = new Preguntas(
    "¿Que lenguaje se utiliza para dar estilo a las paginas web?",
    [],
    ["php", "javascript", "CSS", "HTML"],
    "CSS"
)


// Dejé este pedazo de codigo asi porque primero lo hice desde la consola pero decidí implementar botones basicos
// Esa es la razon por la que el contador de votos no inciaba en 0, sin embargo los dejaré comentados por cualquier cosa 

// pregunta1.votarOp1();
// pregunta1.votarOp2();
// pregunta1.votarOp3();
// pregunta1.votarOp4();
// pregunta1.votarOp2();

// pregunta2.votarOp1();
// pregunta2.votarOp2();
// pregunta2.votarOp3();
// pregunta2.votarOp4();
// pregunta2.votarOp2();

const totalVotes = (num) => {
    console.log(pregunta1.countVotes(num), pregunta1.respuestas[num - 1])
}

const totalVotes2 = (num) => {
    console.log(pregunta2.countVotes(num), pregunta2.respuestas[num - 1])
}



// Implementar una base de datos y configurar botones para que solo se pueda votar una vez (Luego)
console.log(pregunta1.pregunta);
totalVotes(1);
totalVotes(2);
totalVotes(3);

console.log(pregunta1.pregunta);
totalVotes2(1);
totalVotes2(2);
totalVotes2(3);

function votar(opcion, pregunta) {
    pregunta['votarOp' + opcion]();
    mostrarResultados(pregunta, opcion);
}

function mostrarResultados(pregunta) {
    const resultadosElement = document.getElementById('resultado' + (pregunta === pregunta1 ? '1' : '2'));
    resultadosElement.innerHTML = "Resultados:<br>";
    
    for (let i = 1; i <= pregunta.respuestas.length; i++) {
        const total = pregunta.countVotes(i);
        resultadosElement.innerHTML += `Opción ${i}: ${total} votos<br>`;
    }
}

document.getElementById('pregunta1').textContent = pregunta1.pregunta;
document.getElementById('pregunta2').textContent = pregunta2.pregunta;