document.getElementById('manage-button').addEventListener('click', function(event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault(); 
    window.location.href = '/farmacia/src/gerenciar/gerenciar.html'; 
});
document.getElementById('search-button').addEventListener('click', function(event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault(); 
    window.location.href = '/farmacia/src/database/medicamentos.html'; 
});
