// Desafio 1-2: Lidando com objetos e vetores


const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "programação",
        endereco: {
            rua: "Rua Guilherme Gembala,",
            numero: 260
        }
    }
};

console.log (`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua} ${usuario.empresa.endereco.numero}`);




const programador = {
    nome1: "Carlos",
    idade: 32,
    tecnologia: [
        {nome: "C++", especialidade: "Desktop"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

console.log (`O usuário ${programador.nome1} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[0].nome} com especialidade ${programador.tecnologia[0].especialidade}`)
