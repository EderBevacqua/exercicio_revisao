document.getElementById("imgLogo").addEventListener("click", function () { console.log("Logo Clicado!"); });

function ul_li(vl) {
    var v = vl.getAttribute("data-value");
    alert("Item Desordenado: " + v + ".");
}

function ol_li(vl) {
    var v = vl.getAttribute("data-value");
    alert("Item Ordenado: " + v + ".");
}

var formulario = document.getElementById("form1");
var nome = document.getElementById("nome");
var corfavorita = document.getElementById("corFavorita");
var nascimento = document.getElementById("dNascimento");
var salario = document.getElementById("salario");


function focusInput(a) {
    var attNome = a.getAttribute("name")
    switch (attNome) {
        case "nome":
            if (nome.value == "") {
                alert("Não equeça de preencher o campo com seu nome.");
                break;
            }
            else {
                break;
            }
        case "corFavorita":
            if (corfavorita.value == "") {
                alert("Não equeça de escolher uma cor.");
                break;
            }
            else {
                break;
            }
        case "dNascimento":
            if (nascimento.value == "") {
                alert("Não equeça de informar seu nascimento.");
                break;
            }
            else {
                break;
            }
        case "salario":
            if (salario.value == "") {
                alert("Não equeça de nos dizer seu salário.");
                break;
            }
            else {
                break;
            }
    }

}


function validaform() {
    if (nome.value == "") {
        alert("Informe o seu nome.");
        return false;
    }
    if (corFavorita.value == "") {
        alert("Informe uma cor valida.");
        return false;
    }
    if (dNascimento.value == "") {
        alert("Informe seu nascimento.");
        return false;
    }
    if (salario.value == "") {
        alert("Informe seu Salário.");
        return false;
    }

    var tabela = document.getElementById("tabelaForm");
    var tr1 = document.createElement("tr");
    var conteudoNovoNome = document.createTextNode(nome.value);
    var conteudoNovoCor = document.createTextNode(corfavorita.value);
    var conteudoNovoNasc = document.createTextNode(nascimento.value.split('-').reverse().join('/'));
    var conteudoNovoSalar = document.createTextNode(salario.value);

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var l = document.getElementById("tabelaForm").getElementsByTagName("tr").length;

    if (l <= 5) {
        td1.appendChild(conteudoNovoNome);
        tr1.appendChild(td1);
        td2.appendChild(conteudoNovoCor);
        tr1.appendChild(td2);
        td3.appendChild(conteudoNovoNasc);
        tr1.appendChild(td3);
        td4.appendChild(conteudoNovoSalar);
        tr1.appendChild(td4);
        tabela.appendChild(tr1);
    }
    else {
        alert("Você não pode adicionar mais dados");
    }

    var lexcl = document.getElementById("tabelaForm").getElementsByTagName("tr");
    for (var i = 0; i < lexcl.length; i++) {
        lexcl[i].addEventListener("click", exclRow)
        function exclRow() {
            if (this != lexcl[0]) {
                this.parentNode.removeChild(this);
            }
        }
    }
    
    document.getElementById("form1").reset();
    return false;
}

var lexcl = document.getElementById("tabelaForm").getElementsByTagName("tr");
for (var i = 0; i < lexcl.length; i++) {
    lexcl[i].addEventListener("click", exclRow)
    function exclRow() {
        if (this != lexcl[0]) {
            this.parentNode.removeChild(this);
        }
    }
}

function blockEnterTabForm() {
    return !(window.event && window.event.keyCode == 13 || window.event && window.event.keyCode == 9);
}


