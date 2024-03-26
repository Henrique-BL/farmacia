document.getElementById('card-estoque').addEventListener('click', function (event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault();
    window.location.href = '/src/paginas/gerenciar/gerenciar.html';
});
document.getElementById('card-consulta').addEventListener('click', function (event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault();
    window.location.href = '/src/paginas/consultar/consultar.html';
});

document.getElementById('card-relatório').addEventListener('click', function (event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault();
window.location.href = '/src/paginas/relatorio/relatorio.html';
});

document.getElementById('card-laboratorio').addEventListener('click', function (event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault();
window.location.href = '/src/paginas/laboratorios/gerLab.html';
});


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
        <div class="form-group">
            <label for="quantidade">Quantidade:</label>
            <input type="text" id="quantidade" value="">
        </div>
        <div class="form-group">
            <label for="status">Status:</label>
            <input type="text" id="status" value="">
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
    <h2>Retirada Medicamento</h2>
    <div class="form-group">
        <label for="paciente-codigo">Código do Paciente:</label>
        <input type="text" id="paciente-codigo" placeholder="Digite o código do paciente">

        <label for="produto-codigo">Código do Produto:</label>
        <input type="text" id="produto-codigo" placeholder="Digite o identificador do produto">

        <label for="quantidade-medicamento">Código do Produto:</label>
        <input type="number" id="quantidade-medicamento" placeholder="Digite a quantidade:">
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
