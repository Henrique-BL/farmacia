import { criarTabela } from "../database/database-medicamentos.js";
import { abrirPopUpAdd, abrirPopUpDel, abrirPopupEdicao } from "../database/dao-medicamentos.js";


document.getElementById('addButton').addEventListener('click', abrirPopUpAdd);
document.getElementById('delButton').addEventListener('click', abrirPopUpDel);

document.addEventListener("DOMContentLoaded", function () {
    criarTabela();
    addEditListener();

    function tableObserver() {
        addEditListener();
    }
    const observer = new MutationObserver(tableObserver);

    // Configurações para observar mudanças no DOM
    const config = {
        childList: true,
        subtree: true
    };
    // Começa a observar mudanças no DOM
    observer.observe(document.body, config);
});

//Adicionando popup de edição as linhas
function addEditListener() {
    // Obtém todas as linhas da tabela
    const rows = document.querySelectorAll('.data-table tbody tr');

    // Para cada linha, adiciona um event listener de clique
    rows.forEach(row => {
        row.addEventListener('click', () => {
            // Abre o popup de edição com os dados da linha selecionada
            abrirPopupEdicao(row);

        });
    });
}