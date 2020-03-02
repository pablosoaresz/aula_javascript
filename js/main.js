function clicked() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar </b>"
        //console.log(document.getElementById("agradecimento"))
        //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://www.google.com.br") //abre em nova janela
    window.location.href = "https://www.uol.com.br" //Abre o endereço na mesma janela
}

function trocar(elemento) {

    elemento.innerHTML = "Mouse passou!"
        //document.getElementById("mousemove").innerHTML = "Mouse passou, Obrigado"
        //alert("Torcar texto")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
        //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.   "
}

function load() {
    alert("Pagina carregou!")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*function soma(n1, n2) {
    return n1 + n2
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10))
alert(setReplace("Vai VGê", "VGê", "Cuiabá"))
*/

/*
var validar; //variável global
function validaIdade(idade) {
    var validar; //variável local
    if (idade >= 18) {
        validar = true

    } else {
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))
*/

/*
var d = new Date()
alert(d.getMonth() + 1) //Adicionado o +1 para mostrar o mes atual
alert(d.getDay())
alert(d.getFullYear())
alert(d.getHours())
*/

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count)
}
*/

/*
var count = 0

while (count < 5) {
    console.log(count)
    alert(count)
    count++
}
*/

/*
var idade = prompt("Qual a sua idade")
    //var idade = 18
if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}
*/

/*
var nome = "Pablo Bachega Soares"
var idade = 35
var idade2 = 10
n1 = 5
n2 = 3
var frase = "Cuiab'a 'e o melhor time do mundo!"
    //alert(nome + " tem " + idade);
    //alert(idade + idade2)
console.log(nome)
console.log(idade + idade2)
console.log(frase.replace("Cuiab'a", "V'arzea Grande"))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(n1 * n2)
    //console.log(n1 / n44444)

var lista = ["Ma'c~a", "P^era", "Laranja"];
lista.push("Uva")
    //lista.pop()
console.log(lista.reverse());
console.log(lista[0])
console.log(lista.toString()[0])
console.log(lista.join(" |-| "))

var fruta = { nome: "maca", cor: "vermelha" }
console.log(fruta.nome)
alert(fruta.cor)

var frutas = [{ nome: "maca", cor: "vermelhra" }, { nome: "uva", cor: "roxa" }]
console.log(frutas)
alert(frutas[1].nome)
*/