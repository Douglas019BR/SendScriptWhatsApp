document.addEventListener('DOMContentLoaded', function() {
    const roteiroSelect = document.getElementById('roteiroSelect');
    const enviarBtn = document.getElementById('enviarBtn');
    const preview = document.querySelector('.preview');

    roteiroSelect.onchange = () => previewRoteiro();


    async function previewRoteiro() {
        const roteiroSelecionado = roteiroSelect.value;
        const roteiro = await getRoadmapInFile(roteiroSelecionado);
        const lines = roteiro.slice(0, 200).split("\n");
        const previewText = lines.map((line, index) => `${index + 1}. ${line}`).join("\n");

        preview.textContent = previewText;
    }

    // Função para carregar os roteiros no select
    async function carregarRoteiros() {
        roteiroSelect.innerHTML = '';
        
        Object.keys(roadmap).forEach((roteiro) => {
            const option = document.createElement('option');
            option.value = roteiro;
            option.textContent = roteiro.replace('_', ' ').toUpperCase();
            roteiroSelect.appendChild(option);
        });

        Object.assign(roadmap, roteirosData);
    }

    // Função para enviar o roteiro
    function enviarRoteiro() {
        const roteiroSelecionado = roteiroSelect.value;
        if (!roteiroSelecionado) {
            alert('Por favor, selecione um roteiro');
            return;
        }

        // Enviar mensagem para o content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'enviarRoteiro',
                roteiro: roadmap[roteiroSelecionado]
            });
        });
    }

    // Carregar roteiros quando a popup abrir
    carregarRoteiros();

    // Adicionar evento de clique no botão
    enviarBtn.addEventListener('click', enviarRoteiro);
}); 