function isLocalhost() {
    return false
}

function urlRepository(filename) {
    if (isLocalhost()) {
        return `http://localhost:5500/extension/data/${filename}`
    }

    return `http://raw.githubusercontent.com/Dayanfreitas/SendScriptWhatsApp/refs/heads/feat/update-extension/extension/data/${filename}`
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

