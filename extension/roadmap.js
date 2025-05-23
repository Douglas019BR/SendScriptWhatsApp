const roadmap = {
    'short.txt': 'short.txt',
    '2Fast2Furious.txt': '2Fast2Furious.txt',
    'adelehelloSendScript.txt': 'adelehelloSendScript.txt',
    'bee_movie.txt': 'bee_movie.txt',
    'clickTheMovieSendScript.txt': 'clickTheMovieSendScript.txt',
    'geralDoGremio.txt': 'geralDoGremio.txt',
    'howToTrainYourDragon.txt': 'howToTrainYourDragon.txt',
    'martinFierroSendScript.txt': 'martinFierroSendScript.txt',
    'MusicasPontePreta.txt': 'MusicasPontePreta.txt',
    'oPaiIOSendScript.txt': 'oPaiIOSendScript.txt',
    'shrek.txt': 'shrek.txt',
    'shrekSendScript.txt': 'shrekSendScript.txt',
    'superMarioBros.txt': 'superMarioBros.txt',
    'terminator2.txt': 'terminator2.txt',
    'terminator2SendScript.txt': 'terminator2SendScript.txt',
    'theSuperMarioBrosSendScript.txt': 'theSuperMarioBrosSendScript.txt',
    'vidaLokaSendScript.txt': 'vidaLokaSendScript.txt'
}

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

