
/**
 * Configuração dos roteiros de mensagens que serão enviados para o WhatsApp Web
 * @type {Object<string, string>} 
 * @description Este objeto mapeia os nomes dos roteiros para seus respectivos arquivos de texto.
 * Cada par chave-valor representa um roteiro disponível para envio.
 * 
 * @property {string} key - Nome do roteiro que será exibido na interface
 * @property {string} value - Nome do arquivo .txt correspondente que contém o conteúdo do roteiro
 * 
 * @example
 * {
 *   'shrek.txt': 'shrek.txt',  // Roteiro do filme Shrek
 *   'bee_movie.txt': 'bee_movie.txt'  // Roteiro do filme Bee Movie
 * }
 */
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

/**
 * Configuração do script para envio de mensagens no WhatsApp Web
 * @description Como web.whatsapp.com é um site dinâmico, as configurações podem mudar a cada atualização.
 * Este objeto contém as configurações necessárias para o funcionamento do script de envio de mensagens.
 * 
 * @type {Object}
 * @property {number} delaySend - Tempo de espera em milissegundos entre o envio de cada mensagem
 * @property {string} sendButtonSelector - Seletor CSS do botão de enviar mensagem
 * @property {string} mainSelector - Seletor CSS do elemento principal do chat
 * @property {string} textareaSelector - Seletor CSS do campo de texto para digitar mensagens
 * @property {Object} roadmap - Objeto contendo os roteiros de mensagens disponíveis
 */
const Configuration = {
	delaySend: 500,
	sendButtonSelector: `[aria-label="Enviar"]`,
	mainSelector: "#main",
	textareaSelector: "#main div[contenteditable='true']",
	roadmap: roadmap
}

console.log("Configuration loaded")
console.log(Configuration)
