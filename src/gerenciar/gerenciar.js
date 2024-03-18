// Obtém todas as linhas da tabela
const rows = document.querySelectorAll('.data-table tbody tr');
const addButton = document.querySelectorAll('#addButton');


// Para cada linha, adiciona um event listener de clique
rows.forEach(row => {
    row.addEventListener('click', () => {
        // Abre o popup de edição com os dados da linha selecionada
        abrirPopupEdicao(row);
    });
});

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
            <label for="nome">Nome:</label>
            <input type="text" id="nome" value="${dadosLinha[1]}">
        </div>
        <div class="form-group">
            <label for="composicao">Composição:</label>
            <input type="text" id="composicao" value="${dadosLinha[2]}">
        </div>
        <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" value="${dadosLinha[3]}">
        </div>
        <div class="form-group">
            <label for="uso">Uso:</label>
            <input type="text" id="uso" value="${dadosLinha[4]}">
        </div>
        <div class="form-group">
            <label for="generico">Genérico:</label>
            <input type="text" id="generico" value="${dadosLinha[5]}">
        </div>
        <div class="form-group">
            <label for="controlado">Controlado:</label>
            <input type="text" id="controlado" value="${dadosLinha[6]}">
        </div>
        <div class="form-group">
            <label for="laboratorio">Laboratório:</label>
            <input type="text" id="laboratorio" value="${dadosLinha[7]}">
        </div>
        <div class="form-group">
            <label for="categoria">Categoria:</label>
            <input type="text" id="categoria" value="${dadosLinha[8]}">
        </div>
        <div class="form-group">
            <label for="bula">Bula:</label>
            <input type="text" id="bula" value="${dadosLinha[9]}">
        </div>
        <div class="form-group">
            <label for="lote">Lote:</label>
            <input type="text" id="lote" value="${dadosLinha[10]}">
        </div>
        <div class="form-group">
            <label for="validade">Validade:</label>
            <input type="text" id="validade" value="${dadosLinha[11]}">
        </div>
        <div class="form-group">
            <label for="dataCompra">Data de Compra:</label>
            <input type="text" id="dataCompra" value="${dadosLinha[12]}">
        </div>
        <div class="form-group">
            <label for="preco">Preço (R$):</label>
            <input type="text" id="preco" value="${dadosLinha[13]}">
        </div>
        <div class="button-popup">
            <span class="popup-btnFechar" onclick="fecharPopup()">&times;</span>
            <button onclick="salvarEdicao()">Salvar</button>
        </div>
    </div>`;



    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    // Exibe o popup na tela
    popup.style.display = 'block';
}
function abriPopUpAdd() {
    // Obtém o popup de edição
    const popup = document.getElementById('geralPopup');

    // Preenche o popup com os dados da linha
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
    
        
    <h2>Adicionar Medicamento</h2><br>
        
    <div class="popup-content">
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" value="">
        </div>
        <div class="form-group">
            <label for="composicao">Composição:</label>
            <input type="text" id="composicao" value="">
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
            <label for="dataCompra">Data de Compra:</label>
            <input type="text" id="dataCompra" value="">
        </div>
        <div class="form-group">
            <label for="preco">Preço (R$):</label>
            <input type="text" id="preco" value="">
        </div>
        <div class="button-popup">
            <span class="popup-btnFechar" onclick="fecharPopup()">&times;</span>
            <button onclick="salvarEdicao()">Salvar</button>
        </div>
    </div>`;

    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    // Exibe o popup na tela
    popup.style.display = 'block';
}


function abriPopUpDel() {
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
        <span class="popup-btnFechar" onclick="fecharPopup()">&times;</span>
        <button onclick="confirmarExclusao()">Confirmar</button>
    </div>   
       `;
    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    // Exibe o popup na tela
    popup.style.display = 'block';
}

// Função para fechar o popup
function fecharPopup() {
    const popup = document.getElementById('geralPopup');
    popup.style.display = 'none';
}

// Função para salvar a edição (necessário implementar)
function salvarEdicao() {
    // Lógica para salvar a edição
    // Por exemplo, você pode obter os novos valores dos campos de entrada no popup
    // e atualizar os dados da linha na tabela ou enviar uma solicitação para o servidor
    // Aqui você pode adicionar a lógica adequada de acordo com suas necessidades
}
