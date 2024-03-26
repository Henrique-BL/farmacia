
// Array de objetos representando os dados
var columns = ["ID", "Nome", "Localização", "Telefone"];
var linhas = [
    { id: 1, nome: "Pfizer", localizacao: "Rua A, 123", telefone: "123456789" },
    { id: 2, nome: "Bayer", localizacao: "Rua B, 456", telefone: "987654321" },
    { id: 3, nome: "Medley", localizacao: "Rua C, 789", telefone: "111222333" }
];

var tableHead = document.querySelector(".data-table thead");
var tableBody = document.querySelector(".data-table tbody");

var head = document.createElement("tr");

function criarTabela() {

    // Itera sobre os dados e preenche a tabela
    columns.forEach(function (item) {
        var th = document.createElement("th");
        th.innerText = item;
        head.appendChild(th);

    });
    tableHead.appendChild(head);


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
export { criarTabela };
