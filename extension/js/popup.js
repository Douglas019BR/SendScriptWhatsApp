document.addEventListener('DOMContentLoaded', initializePopup);

function initializePopup() {
    const elements = getUIElements();
    setupEventListeners(elements);
    loadAvailableScripts(elements.roteiroSelect);
}

function getUIElements() {
    return {
        roteiroSelect: document.getElementById('roteiroSelect'),
        enviarBtn: document.getElementById('enviarBtn'),
        preview: document.querySelector('.preview')
    };
}

function setupEventListeners(elements) {
    elements.roteiroSelect.addEventListener('change', () => showPreview(elements));
    elements.enviarBtn.addEventListener('click', () => sendScript(elements));
}

function loadAvailableScripts(selectElement) {
    selectElement.innerHTML = '<option value="">Selecione um roteiro</option>';

    Object.entries(roadmap).forEach(([filename, displayName]) => {
        const option = document.createElement('option');
        option.value = filename;
        option.textContent = displayName;
        selectElement.appendChild(option);
    });
}

async function showPreview(elements) {
    const { roteiroSelect, preview } = elements;

    if (!roteiroSelect.value) {
        preview.innerHTML = `<p>${MESSAGES.UI.SELECT_SCRIPT}</p>`;
        return;
    }

    try {
        const scriptContent = await getRoadmapInFile(roteiroSelect.value);
        const previewLines = scriptContent.slice(0, 300).split("\n").slice(0, 10);
        const previewText = previewLines
            .map((line, index) => `${index + 1}. ${line}`)
            .join("\n");

        preview.textContent = previewText + "\n...";
    } catch (error) {
        preview.textContent = MESSAGES.UI.PREVIEW_ERROR + error.message;
    }
}

async function sendScript(elements) {
    const { roteiroSelect, enviarBtn } = elements;

    if (!roteiroSelect.value) {
        alert(MESSAGES.ERRORS.NO_SCRIPT_SELECTED);
        return;
    }

    try {
        setButtonState(enviarBtn, true);

        const scriptContent = await getRoadmapInFile(roteiroSelect.value);
        const activeTab = await getActiveTab();

        validateWhatsAppTab(activeTab);

        await sendMessagesToTab(activeTab.id, scriptContent);
        alert(MESSAGES.SUCCESS.SCRIPT_SENT);

    } catch (error) {
        console.error("Error:", error);
        alert("Erro: " + error.message);
    } finally {
        setButtonState(enviarBtn, false);
    }
}

function setButtonState(button, isLoading) {
    button.disabled = isLoading;

    if (isLoading) {
        button.textContent = MESSAGES.UI.SENDING;
    } else {
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="white">
                <path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
            </svg>
            Enviar Roteiro
        `;
    }
}

async function getActiveTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
}

function validateWhatsAppTab(tab) {
    if (!tab.url.includes(WHATSAPP_URL)) {
        throw new Error(MESSAGES.ERRORS.NO_WHATSAPP_TAB);
    }
}

async function sendMessagesToTab(tabId, scriptContent) {
    try {
        const response = await chrome.tabs.sendMessage(tabId, {
            action: "sendMessages",
            scriptText: scriptContent,
            options: Configuration
        });

        if (response?.status !== "success") {
            throw new Error(response?.message || "Erro desconhecido");
        }

    } catch (error) {
        if (error.message.includes(MESSAGES.ERRORS.CONNECTION_FAILED)) {
            await injectContentScript(tabId);
            await sleep(TIMING.SCRIPT_INJECTION_WAIT);

            const response = await chrome.tabs.sendMessage(tabId, {
                action: "sendMessages",
                scriptText: scriptContent,
                options: Configuration
            });

            if (response?.status !== "success") {
                throw new Error(response?.message || "Erro desconhecido");
            }
        } else {
            throw error;
        }
    }
}

async function injectContentScript(tabId) {
    await chrome.scripting.executeScript({
        target: { tabId },
        files: ['js/constants.js', 'js/utils.js', 'index.js']
    });
}
