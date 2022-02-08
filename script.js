let  Estilos = {
    Musica: "Oceans",
    instrumento: "Clarinete",
    comida: "Empadão"
}

Estilos.time = "flamengo"
delete Estilos.comida

console.log(Estilos)

let cadastro = [{
    nome:"Ana Beatriz",
    idade:17,
    telefone:"(xx)xxxxx-xxxx",
    amigos : ["Lucas","Josiane","Marcos","Isa"]
},{
    nome:"Gabrielle",
    idade:17,
    telefone:"(xx)xxxxx-xxxx",
    amigos : ["Lucas","Josiane","Marcos","Isa"]
},{
    nome:"Gabrila",
    idade:16,
    telefone:"(xx)xxxxx-xxxx",
    amigos : ["Lucas","Josiane","Isa","Marcos"]
},{
    nome:"Diego",
    idade:17,
    telefone:"(xx)xxxxx-xxxx",
    amigos : ["Lucas","Josiane","Marcos","Isa"]
},{
    nome:"Anny",
    idade:17,
    telefone:"(xx)xxxxx-xxxx",
    amigos : ["Lucas","Josiane","Marcos","Isa"]
}]

console.log(cadastro.amigos[1])