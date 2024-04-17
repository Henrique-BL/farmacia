import { atualizarTabela, adicionarMed,deletarMed, editarMed} from "./database-medicamentos.js";
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
    <h2>Editar Medicamento</h2><br>
        
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
            <label for="composicao">Composição:</label>
            <input type="text" id="composicao" value="${dadosLinha[2]}">
        </div>
        <div class="form-group">
            <label for="dosagem">Dosagem:</label>
            <input type="text" id="dosagem" value="${dadosLinha[3]}">
        </div>
        <div class="form-group">
            <label for="unidade">Unidade:</label>
            <input type="text" id="unidade" value="${dadosLinha[4]}">
        </div>
        <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" value="${dadosLinha[5]}">
        </div>
        <div class="form-group">
            <label for="uso">Uso:</label>
            <input type="text" id="uso" value="${dadosLinha[6]}">
        </div>
        <div class="form-group">
            <label for="generico">Genérico:</label>
            <input type="text" id="generico" value="${dadosLinha[7]}">
        </div>
        <div class="form-group">
            <label for="controlado">Controlado:</label>
            <input type="text" id="controlado" value="${dadosLinha[8]}">
        </div>
        <div class="form-group">
            <label for="laboratorio">Laboratório:</label>
            <input type="text" id="laboratorio" value="${dadosLinha[9]}">
        </div>
        <div class="form-group">
            <label for="categoria">Categoria:</label>
            <input type="text" id="categoria" value="${dadosLinha[10]}">
        </div>
        <div class="form-group">
            <label for="bula">Bula:</label>
            <input type="text" id="bula" value="${dadosLinha[11]}">
        </div>
        <div class="form-group">
            <label for="lote">Lote:</label>
            <input type="text" id="lote" value="${dadosLinha[12]}">
        </div>
        <div class="form-group">
            <label for="validade">Validade:</label>
            <input type="text" id="validade" value="${dadosLinha[13]}">
        </div>
        <div class="form-group">
            <label for="dataCompra">Recebido em:</label>
            <input type="text" id="dataCompra" value="${dadosLinha[14]}">
        </div>
        <div class="form-group">
            <label for="preco">Preço (R$):</label>
            <input type="text" id="preco" value="${dadosLinha[15]}">
        </div>
        <div class="form-group">
            <label for="quantidade">Quantidade:</label>
            <input type="text" id="quantidade" value="${dadosLinha[16]}">
        </div>
        <div class="form-group">
            <label for="status">Status:</label>
            <input type="text" id="status" value="${dadosLinha[17]}">
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
    btnSalvarPopUp.addEventListener('click', editMed);
    // Exibe o popup na tela
    popup.style.display = 'block';
}


function abrirPopUpAdd() {
    // Obtém o popup de edição
    const popup = document.getElementById('geralPopup');

    // Preenche o popup com os dados da linha
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
    <h2>Adicionar Medicamento</h2><br>
        
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
            <label for="composicao">Composição:</label>
            <input type="text" id="composicao" value="">
        </div>
        <div class="form-group">
            <label for="dosagem">Dosagem:</label>
            <input type="text" id="dosagem" value="">
        </div>
        <div class="form-group">
            <label for="unidade">Unidade:</label>
            <input type="text" id="unidade" value="">
        </div>
        <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" value="">
        </div>
        <div class="form-group">
            <label for="uso">Uso:</label>
            <input type="text" id="uso" value="">
        </div>
        <div class="form-group">
            <label for="generico">Genérico:</label>
            <input type="text" id="generico" value="">
        </div>
        <div class="form-group">
            <label for="controlado">Controlado:</label>
            <input type="text" id="controlado" value="">
        </div>
        <div class="form-group">
            <label for="laboratorio">Laboratório:</label>
            <input type="text" id="laboratorio" value="">
        </div>
        <div class="form-group">
            <label for="categoria">Categoria:</label>
            <input type="text" id="categoria" value="">
        </div>
        <div class="form-group">
            <label for="bula">Bula:</label>
            <input type="text" id="bula" value="">
        </div>
        <div class="form-group">
            <label for="lote">Lote:</label>
            <input type="text" id="lote" value="">
        </div>
        <div class="form-group">
            <label for="validade">Validade:</label>
            <input type="text" id="validade" value="">
        </div>
        <div class="form-group">
            <label for="dataCompra">Recebido em:</label>
            <input type="text" id="dataCompra" value="">
        </div>
        <div class="form-group">
            <label for="preco">Preço (R$):</label>
            <input type="text" id="preco" value="">
        </div>
        <div class="form-group">
            <label for="quantidade">Quantidade:</label>
            <input type="text" id="quantidade" value="">
        </div>
        <div class="form-group">
            <label for="status">Status:</label>
            <input type="text" id="status" value="">
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
    btnSalvarPopUp.addEventListener('click', addMed);
    // Exibe o popup na tela
    popup.style.display = 'block';
}


function abrirPopUpDel() {
    // Obtém o popup de edição
    const popup = document.getElementById('geralPopup');

    // Preenche o popup com os dados da linha
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
    <h2>Excluir Medicamento</h2>
    <div class="form-group">
        <label for="codigo">Código do Medicamento:</label>
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
    const btnDeletarPopUp = popup.querySelector("#popup-btnDeletar");
    btnFecharPopUp.addEventListener('click', fecharPopup);
    btnDeletarPopUp.addEventListener('click', delMed);
    // Exibe o popup na tela
    popup.style.display = 'block';
}

// Função para fechar o popup
function fecharPopup() {
    const popup = document.getElementById('geralPopup');
    popup.style.display = 'none';
}

// Função para salvar edição
function addMed(){
    const medNovo = criarMed();
    adicionarMed(medNovo);
    atualizarTabela();
    fecharPopup();
}
function editMed() { 
    const medEditado = criarMed();
    editarMed(medEditado);
    atualizarTabela();
    fecharPopup();
}
function delMed(){
    const id = document.getElementById('codigo').value;
    deletarMed(id);
    atualizarTabela();
    fecharPopup();
}
function criarMed() {
    var novoMed = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        composicao: document.getElementById('composicao').value,
        dosagem: document.getElementById('dosagem').value,
        unidade: document.getElementById('unidade').value,
        descricao: document.getElementById('descricao').value,
        uso: document.getElementById('uso').value,
        generico: document.getElementById('generico').value,
        controlado: document.getElementById('controlado').value,
        laboratorio: document.getElementById('laboratorio').value,
        categoria: document.getElementById('categoria').value,
        bula: document.getElementById('bula').value,
        lote: document.getElementById('lote').value,
        validade: document.getElementById('validade').value,
        dataCompra: document.getElementById('dataCompra').value,
        preco: document.getElementById('preco').value,
        quantidade: document.getElementById('quantidade').value,
        status: document.getElementById('status').value
    };
    return novoMed;
}
export {abrirPopUpAdd,abrirPopUpDel,abrirPopupEdicao,fecharPopup};