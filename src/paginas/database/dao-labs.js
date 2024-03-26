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
            <button onclick="salvarEdicao()">Salvar</button>
        </div>
    </div>`;

    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    const btnFecharPopUp = popup.querySelector('.popup-btnFechar');
    btnFecharPopUp.addEventListener('click', fecharPopup);
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
            <button onclick="salvarEdicao()">Salvar</button>
        </div>
    </div>`;

    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    const btnFecharPopUp = popup.querySelector('.popup-btnFechar');
    btnFecharPopUp.addEventListener('click', fecharPopup);
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
        <button onclick="confirmarExclusao()">Confirmar</button>
    </div>   
       `;
    // Limpa o conteúdo anterior e adiciona o novo conteúdo ao popup
    popup.innerHTML = '';
    popup.appendChild(popupContent);

    const btnFecharPopUp = popup.querySelector('.popup-btnFechar');
    btnFecharPopUp.addEventListener('click', fecharPopup);
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
export {abrirPopUpAdd,abrirPopUpDel,abrirPopupEdicao,fecharPopup,salvarEdicao};