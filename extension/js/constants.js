// Constantes compartilhadas para WhatsApp Web
const WHATSAPP_SELECTORS = {
    MAIN_CONTAINER: "#main",
    MAIN_CONTAINER_ALT: '[data-testid="conversation-panel-body"]',

    TEXTAREA: 'div[contenteditable="true"]',
    TEXTAREA_ALT: '[data-testid="message-composer"]',
    TEXTAREA_ROLE: '[role="textbox"]',
    TEXTAREA_SPELLCHECK: 'div[spellcheck="true"]',

    SEND_BUTTON: '[data-testid="send"]',
    SEND_BUTTON_ICON: '[data-icon="send"]',
    SEND_BUTTON_NEW: '[data-icon="wds-ic-send-filled"]',
    SEND_BUTTON_EN: 'button[aria-label*="Send"]',
    SEND_BUTTON_PT: 'button[aria-label*="Enviar"]'
};

const TIMING = {
    INPUT_DELAY: 50,
    MESSAGE_DELAY: 350,
    SCRIPT_INJECTION_WAIT: 1000
};

const MESSAGES = {
    ERRORS: {
        NO_CONVERSATION: "Não há uma conversa aberta",
        NO_MAIN_CONTAINER: "WhatsApp main container not found - make sure you're in a conversation",
        NO_TEXTAREA: "WhatsApp textarea not found - make sure you're in an active conversation",
        NO_SEND_BUTTON: "Send button not found for message",
        NO_WHATSAPP_TAB: "Por favor, abra o WhatsApp Web primeiro!",
        NO_SCRIPT_SELECTED: "Por favor, selecione um roteiro primeiro!",
        CONNECTION_FAILED: "Could not establish connection"
    },
    SUCCESS: {
        MESSAGES_SENT: "messages sent successfully",
        SCRIPT_SENT: "Roteiro enviado com sucesso!"
    },
    UI: {
        SENDING: "Enviando...",
        SELECT_SCRIPT: "Selecione um roteiro para ver a prévia",
        PREVIEW_ERROR: "Erro ao carregar prévia: "
    }
};

const WHATSAPP_URL = 'web.whatsapp.com';
