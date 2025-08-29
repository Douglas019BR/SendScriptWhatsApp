function urlRepository(filename) {
    return `http://raw.githubusercontent.com/Douglas019BR/SendScriptWhatsApp/refs/heads/main/extension/data/${filename}`
}

async function getRoadmapInFile(filename) {
    try {
        const response = await fetch(urlRepository(filename));
        const texto = await response.text();
        return texto
    } catch (error) {
        console.error('Erro ao ler arquivos:', error);
        return {};
    }
}

