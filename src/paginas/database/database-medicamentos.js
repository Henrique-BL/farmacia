
// Array de objetos representando os dados
var columns = ["ID", "Nome", "Composição", "Dosagem", "Unidade", "Descrição", "Uso", "Genérico", "Controlado", "Laboratório",
    "Categoria", "Bula", "Lote", "Validade", "Data de Compra", "Preço", "Quantidade", "Status"]
var linhas = [
    { id: 1, nome: "Paracetamol", composicao: "Paracetamol", dosagem: 500, unidade: "mg", descricao: "Analgésico e antipirético, utilizado no tratamento de dores leves a moderadas e redução de febre.", uso: "Oral", generico: "Sim", controlado: "Não", laboratorio: "Pfizer", categoria: "Analgésico", bula: '<a href="bula_paracetamol.pdf">Link</a>', lote: "AB12345", validade: "01/2024", dataCompra: "10/01/2023", preco: 10.00, quantidade: 30, status: "Disponivel" },
    { id: 2, nome: "Ibuprofeno", composicao: "Ibuprofeno", dosagem: 400, unidade: "mg", descricao: "Anti-inflamatório não esteroide, utilizado no alívio de dores e inflamações, como artrite e cólicas menstruais.", uso: "Oral", generico: "Sim", controlado: "Não", laboratorio: "Bayer", categoria: "Analgésico", bula: '<a href="bula_ibuprofeno.pdf">Link</a>', lote: "BC23456", validade: "02/2024", dataCompra: "15/01/2023", preco: 15.50, quantidade: 25, status: "Disponivel" },
    { id: 9, nome: "Omeprazol", composicao: "Omeprazol", dosagem: 20, unidade: "mg", descricao: "Inibidor da bomba de prótons, utilizado no tratamento de úlceras gástricas, refluxo gastroesofágico e síndrome de Zollinger-Ellison.", uso: "Oral", generico: "Sim", controlado: "Não", laboratorio: "Medley", categoria: "Antiácido", bula: '<a href="bula_omeprazol.pdf">Link</a>', lote: "MN01234", validade: "09/2024", dataCompra: "25/02/2023", preco: 18.00, quantidade: 115, status: "Disponivel" },
    { id: 10, nome: "Loratadina", composicao: "Loratadina", dosagem: 10, unidade: "mg", descricao: "Antialérgico, utilizado no alívio dos sintomas de rinite alérgica, como espirros, coriza e coceira nasal, e urticária.", uso: "Oral", generico: "Sim", controlado: "Não", laboratorio: "EMS", categoria: "Antialérgico", bula: '<a href="bula_loratadina.pdf">Link</a>', lote: "OP23456", validade: "10/2024", dataCompra: "03/03/2023", preco: 12.50, quantidade: 9, status: "Disponivel" },
    { id: 11, nome: "Simeticona", composicao: "Simeticona", dosagem: 75, unidade: "mg", descricao: "Antiflatulento, utilizado no alívio dos sintomas de excesso de gases no trato digestivo, como inchaço e desconforto abdominal.", uso: "Oral", generico: "Sim", controlado: "Não", laboratorio: "Neo Química", categoria: "Antiflatulento", bula: '<a href="bula_simeticona.pdf">Link</a>', lote: "QR34567", validade: "11/2024", dataCompra: "05/03/2023", preco: 8.00, quantidade: 25, status: "Disponivel" }
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
            <td>${item.composicao}</td>
            <td>${item.dosagem}</td>
            <td>${item.unidade}</td>
            <td>${item.descricao}</td>
            <td>${item.uso}</td>
            <td>${item.generico}</td>
            <td>${item.controlado}</td>
            <td>${item.laboratorio}</td>
            <td>${item.categoria}</td>
            <td>${item.bula}</td>
            <td>${item.lote}</td>
            <td>${item.validade}</td>
            <td>${item.dataCompra}</td>
            <td>${item.preco}</td>
            <td>${item.quantidade}</td>
            <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}
export {criarTabela};