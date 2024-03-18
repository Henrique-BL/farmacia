document.getElementById('farmacia-card').addEventListener('click', function(event) {
    // Evita o comportamento padrão do formulário que é atualizar a página
    event.preventDefault();
    window.location.href = `src/geral/geral.html`;
});
