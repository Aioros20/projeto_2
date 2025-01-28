function adicionarLinha(){
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha =  document.createElement('tr');

    const celulaNome = document.createElement('td');
    const celulaTelefone = document.createElement('td');

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaTelefone);

    document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0].appendChild(novaLinha);

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}