/**
 * Função para exibir um diálogo com uma mensagem específica.
 * @param {string} message - A mensagem a ser exibida no diálogo.
 * Exemplo de uso da função showDialog: 
 *     showDialog('Esta é uma mensagem de teste.');
 */
function showDialog(message) {
    // Cria o elemento <dialog>
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';

    // Define o conteúdo do diálogo
    dialog.innerHTML = `
        <div>${message}</div>
        <button onclick="closeModal()">Fechar</button>
    `;

    // Adiciona o diálogo ao corpo do documento
    document.body.appendChild(dialog);

    // Exibe o diálogo
    dialog.showModal();
}

/**
 * Função para fechar o diálogo.
 * @param {string} dialogSelector - O seletor do diálogo a ser fechado.
 */
function closeModal() {
    if (dialog) {
        _('#dialog').close();
        _('#dialog').remove(); // Remove o diálogo do DOM
    }
}

