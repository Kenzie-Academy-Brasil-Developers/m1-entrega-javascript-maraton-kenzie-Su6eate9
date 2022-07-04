/* 
    1 -  Crie uma array que contenha os nomes de Rafael, Manoel e Daniel
    2 = Crie uma função chamada positions. Esta função deverá receber como parâmetro o array contendo os nomes dos atletas.
    A posição do elemento no array representa sua posição na corrida.
    3 - O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição.
    Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.
    4 - Verifique se a posição do elemento 'Daniel' no array é diferente de 0, caso seja,
    ele deverá trocar de lugar com quem está à sua frente. Caso contrário retorne; 'Daniel é o vencedor'
    5 - Retorne o array resultante concatenado com a frase: 'Este é o pódio'.
    6 - Chame a função usando o console.log(), para conseguir ler seu retorno.
*/

let players = [
    'Rafael',
    'Daniel',
    'Manoel'    //OBTEVE BÔNUS E SEMPRE VAI SUBIR POSIÇÃO => position +1
]
//console.log(players.indexOf('Daniel'))

function positions(playersPositions){
    let podio = []
    let danielPos = playersPositions.indexOf('Daniel')

        if((danielPos) - 1 > 0){
            podio = playersPositions[(danielPos - 1)]
            playersPositions[(danielPos - 1)] = 'Daniel'
            playersPositions[danielPos] = podio
            return `Este é o pódio: 1º - ${playersPositions[0]}, 2º - ${playersPositions[1]} e 3º - ${playersPositions[2]}`
        }
        return 'Daniel é o vencedor!'
}
console.log(positions(players))