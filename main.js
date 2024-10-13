let nome = [];
let contato = [];
let linhas = '';
const form = document.getElementById('form-contact');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda()
});

function adicionaContato() {
    const nomeContato = document.getElementById('name');
    const numeroContato = document.getElementById('number');

    if (nome.includes(nomeContato.value)) {
        alert(`O Contato ${nomeContato.value} já existe na agenda.`);
    } else {
        nome.push(nomeContato.value);
        contato.push(numeroContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaAgenda() {
    const corpoAgenda = document.getElementById('agenda-body');
    corpoAgenda.innerHTML = linhas;
}