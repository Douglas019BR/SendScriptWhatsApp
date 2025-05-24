document.addEventListener('DOMContentLoaded', function() {
    const roteiroSelect = document.getElementById('roteiroSelect');
    const enviarBtn = document.getElementById('enviarBtn');
    const preview = document.querySelector('.preview');

    roteiroSelect.onchange = () => previewRoteiro();

    async function textScript() {
        const roteiroSelecionado = roteiroSelect.value;
        const roteiro = await getRoadmapInFile(roteiroSelecionado);

        return roteiro
    }
    
    async function previewRoteiro() {
        const roteiro = await textScript();

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
    }


    async function enviarRoteiro() {
        const text = await textScript();
        const response = await send(text)

        console.log("[Send script] - ", response)
    }

    carregarRoteiros();

    // Adicionar evento de clique no botão
    enviarBtn.addEventListener('click', enviarRoteiro);
}); 