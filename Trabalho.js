// cadastro de seleções.
// alteração de dados de seleções.
// Cadastro de Jogos de cada grupo.
// Informar o resultado de um jogo.
// Mostrar o calendário de jogos completo com os resultados dos jogos já ocorridos.
// Mostrar o calendário de jogos de uma seleção solicitada pelo usuário com os resultados dos jogos já ocorridos.
// Mostrar os jogos de um grupo com os resultados dos jogos já ocorridos.
// Mostrar oitavas de final.


function cadastrotimes(){
    var times = []
    for (var i = 0; i < 32; i++){
        times.push(prompt('Digite o nome do time: '))
    }
    return times
}
function alteracaoDadosTime(){

    var times = cadastrotimes()
    var time = prompt('Digite o nome do time que deseja alterar: ')
    var indice = times.indexOf(time)
    if (indice == -1){
        alert('Time não encontrado')
    }else{
        var novoTime = prompt('Digite o novo nome do time: ')
        times[indice] = novoTime
    }
    return times
}

function cadastroJogosGrupos(){
    var jogos = []
    var times = cadastrotimes()
    var grupos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (var i = 0; i < grupos.length; i++){
        for (var j = 0; j < times.length; j++){
            for (var k = 0; k < times.length; k++){
                if (j != k){
                    jogos.push(times[j] + ' x ' + times[k] + ' - Grupo ' + grupos[i])
                }
            }
        }
    }
    return jogos
}
function informarResultadodosJogos() {
    var jogos = cadastroJogosGrupos()
    var jogo = prompt('Digite o jogo que deseja informar o resultado: ')
    var indice = jogos.indexOf(jogo)
    if (indice == -1){
        alert('Jogo não encontrado')
    }else{
        var resultado = prompt('Digite o resultado do jogo: ')
        jogos[indice] = resultado
    }
    return jogos
} 

function mostrarCalendarioComJogosJaOcorridos(){
    var jogos = informarResultadodosJogos()
    var calendario = []
    for (var i = 0; i < jogos.length; i++){
        if (jogos[i].indexOf('x') == -1){
            calendario.push(jogos[i])
        }
    }
    return calendario
}
function Mostrarocalendariodejogosdeumaselecaosolicitadapelousuariocomosresultadosdosjogosjaocorridos(){
    var jogos = informarResultadodosJogos()
    var time = prompt('Digite o nome do time: ')
    var calendario = []
    for (var i = 0; i < jogos.length; i++){
        if (jogos[i].indexOf(time) != -1){
            calendario.push(jogos[i])
        }
    }
    return calendario
}

function Mostrarosjogosdeumgrupocomosresultadosdosjogosjaocorridos(){
    var jogos = informarResultadodosJogos()
    var grupo = prompt('Digite o grupo: ')
    var calendario = []
    for (var i = 0; i < jogos.length; i++){
        if (jogos[i].indexOf(grupo) != -1){
            calendario.push(jogos[i])
        }
    }
    return calendario
}

function Mostraroitavasdefinal(){
    var jogos = informarResultadodosJogos()
    var calendario = []
    for (var i = 0; i < jogos.length; i++){
        if (jogos[i].indexOf('Oitavas') != -1){
            calendario.push(jogos[i])
        }
    }
    return calendario
}
