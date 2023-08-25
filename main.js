document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    const table = document.getElementById('contatos').getElementsByTagName('tbody')[0];
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        
        adicionarContato(nome, telefone);
        
        form.reset();
    });
    
    function adicionarContato(nome, telefone) {
        const row = table.insertRow();
        const cellNome = row.insertCell(0);
        const cellTelefone = row.insertCell(1);
        
        cellNome.innerHTML = nome;
        cellTelefone.innerHTML = telefone;
    }
});