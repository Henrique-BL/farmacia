import { atualizarTabela, adicionarLab,editarLab,deletarLab } from "./database-labs.js";
// Função para abrir o popup de edição com os dados da linha selecionada
function abrirPopupEdicao(row) {
    // Obtém os dados da linha selecionada
    const cells = row.querySelectorAll('td');
    const dadosLinha = [];
    cells.forEach(cell => {
        dadosLinha.push(cell.textContent);
    });

    // Obtém o popup de edição
    const popup = document.getElementById('geralPopup');

    // Preenche o popup com os dados da linha
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
    <h2>Editar Laboratório</h2><br>
        
    <div class="popup-content">
        <div class="form-group">
            <label for="id">ID:</label>
            <input type="text" id="id" value="${dadosLinha[0]}">
        </div>
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" value="${dadosLinha[1]}">
        </div>
        <div class="form-group">
            <label for="localizacao">Localização:</label>
            <input type="text" id="localizacao" value="${dadosLinha[2]}">
        </div>
        <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" value="${dadosLinha[3]}">
        </div>
        <div class="button-popup">
            <span class="popup-btnFechar">&times;</span>
            <button id="popup-btnSalvar">Salvar</button>
        </div>
    </div>`;

    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    const btnFecharPopUp = popup.querySelector('.popup-btnFechar');
    const btnSalvarPopUp = popup.querySelector('#popup-btnSalvar');
    btnFecharPopUp.addEventListener('click', fecharPopup);
    btnSalvarPopUp.addEventListener('click', editLab);
    // Exibe o popup na tela
    popup.style.display = 'block';
}


function abrirPopUpAdd() {
    // Obtém o popup de edição
    const popup = document.getElementById('geralPopup');

    // Preenche o popup com os dados da linha
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
        
    <h2>Adicionar Laboratório</h2><br>
        
            
    <div class="popup-content">
        <div class="form-group">
            <label for="id">ID:</label>
            <input type="text" id="id" value="">
        </div>
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" value="">
        </div>
        <div class="form-group">
            <label for="localizacao">Localização:</label>
            <input type="text" id="localizacao" value="">
        </div>
        <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" value="">
        </div>
        <div class="button-popup">
            <span class="popup-btnFechar">&times;</span>
            <button id="popup-btnSalvar">Salvar</button>
        </div>
    </div>`;

    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    const btnFecharPopUp = popup.querySelector('.popup-btnFechar');
    const btnSalvarPopUp = popup.querySelector('#popup-btnSalvar');
    btnFecharPopUp.addEventListener('click', fecharPopup);
    btnSalvarPopUp.addEventListener('click', addLab);
    // Exibe o popup na tela
    popup.style.display = 'block';
}


function abrirPopUpDel() {
    // Obtém o popup de edição
    const popup = document.getElementById('geralPopup');

    // Preenche o popup com os dados da linha
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
    <h2>Excluir Laboratório</h2>
    <div class="form-group">
        <label for="codigo">Código do Laboratório:</label>
        <input type="text" id="codigo" placeholder="Digite o código">
    </div>
    <div class="button-popup">
        <span class="popup-btnFechar">&times;</span>
        <button id="popup-btnDeletar">Confirmar</button>
    </div>   
       `;
    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    const btnFecharPopUp = popup.querySelector('.popup-btnFechar');
    const btnDeletarPopUp = popup.querySelector('#popup-btnDeletar');

    btnFecharPopUp.addEventListener('click', fecharPopup);
    btnDeletarPopUp.addEventListener('click', delLab);
    // Exibe o popup na tela
    popup.style.display = 'block';
}

// Função para fechar o popup
function fecharPopup() {
    const popup = document.getElementById('geralPopup');
    popup.style.display = 'none';
}


// Função para salvar edição
function editLab() { 
    const labEditado = criarLab();
    editarLab(labEditado);
    atualizarTabela();
    fecharPopup();
}
function addLab(){
    const labNovo = criarLab();
    adicionarLab(labNovo);
    atualizarTabela();
    fecharPopup();
}
function delLab(){
    const id = document.getElementById('codigo').value;
    deletarLab(id);
    atualizarTabela();
    fecharPopup();
}
function criarLab() {
    var novolab = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        localizacao: document.getElementById('localizacao').value,
        telefone: document.getElementById('telefone').value
    };
    return novolab;
}
export {abrirPopUpAdd,abrirPopUpDel,abrirPopupEdicao,fecharPopup};