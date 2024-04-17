// Array de objetos representando os dados
var columns = ["ID", "Nome", "Localização", "Telefone"];
var linhas = [
    { id:'1', nome: "Pfizer", localizacao: "Rua A, 123", telefone: "123456789" },
    { id: '2', nome: "Bayer", localizacao: "Rua B, 456", telefone: "987654321" },
    { id: '3', nome: "Medley", localizacao: "Rua C, 789", telefone: "111222333" }
];

var tableHead = document.querySelector(".data-table thead");
var tableBody = document.querySelector(".data-table tbody");

var head = document.createElement("tr");

export function criarTabela() {
    criarColunas();
    criarLinhas();
}
export function atualizarTabela(){
    tableBody.innerHTML = '';
    criarLinhas();
}

export function criarColunas(){
    // Itera sobre os dados e preenche a tabela
    columns.forEach(function (item) {
        var th = document.createElement("th");
        th.innerText = item;
        head.appendChild(th);

    });
    tableHead.appendChild(head);    
}
export function criarLinhas(){

    linhas.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.localizacao}</td>
            <td>${item.telefone}</td>
        `;
        tableBody.appendChild(row);
    });
}

export function adicionarLab(elemento) {
    linhas.push(elemento);
}

// Função para remover um elemento da estrutura com base no ID
export function deletarLab(id) {
    linhas = linhas.filter(function (elemento) {
        return elemento.id !== id;
    });
}


// Função para buscar um elemento da estrutura com base no ID
export function buscarLab(id) {

    return linhas.findIndex(function (elemento) {
        console.log('id:', elemento.id)
        return elemento.id === id;
    });
}

export function editarLab(elemento) {
    // Encontrar o índice do elemento na estrutura `linhas`
    const index = buscarLab(elemento.id);
    
    if (index !== -1) {
        linhas[index] = elemento;
        console.log("Elemento editado:", elemento);
        return true; // Retornar true se o elemento foi editado com sucesso
    } else {
        console.log("Elemento não encontrado para edição.");
        return false; // Retornar false se o elemento não foi encontrado
    }
}
