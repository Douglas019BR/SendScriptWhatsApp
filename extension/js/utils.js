// Utilitários para seleção de elementos do WhatsApp
function findMainContainer() {
    return document.querySelector(WHATSAPP_SELECTORS.MAIN_CONTAINER) ||
        document.querySelector(WHATSAPP_SELECTORS.MAIN_CONTAINER_ALT);
}

function findTextarea(mainContainer) {
    return mainContainer.querySelector(WHATSAPP_SELECTORS.TEXTAREA) ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.TEXTAREA_ALT) ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.TEXTAREA_ROLE) ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.TEXTAREA_SPELLCHECK);
}

function findSendButton(mainContainer) {
    return mainContainer.querySelector(WHATSAPP_SELECTORS.SEND_BUTTON) ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.SEND_BUTTON_ICON) ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.SEND_BUTTON_NEW)?.closest('[role="button"]') ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.SEND_BUTTON_EN) ||
        mainContainer.querySelector(WHATSAPP_SELECTORS.SEND_BUTTON_PT) ||
        mainContainer.querySelector('span[data-icon="send"]')?.parentElement;
}

function processScriptText(scriptText) {
    return scriptText.split(/[\n\t]+/)
        .map(line => line.trim())
        .filter(line => line);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
