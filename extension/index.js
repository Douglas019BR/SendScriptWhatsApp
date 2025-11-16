window.addEventListener('load', function () {
    console.log("Extension loaded");
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "sendMessages") {
        handleSendMessages(request.scriptText, request.options, sendResponse);
    }
    return true;
});

async function handleSendMessages(scriptText, options, sendResponse) {
    try {
        const lines = processScriptText(scriptText);
        const mainContainer = findMainContainer();

        if (!mainContainer) {
            throw new Error(MESSAGES.ERRORS.NO_MAIN_CONTAINER);
        }

        const textarea = findTextarea(mainContainer);
        if (!textarea) {
            throw new Error(MESSAGES.ERRORS.NO_TEXTAREA);
        }

        await sendAllLines(lines, mainContainer, textarea, options);
        sendResponse({
            status: "success",
            message: `${lines.length} ${MESSAGES.SUCCESS.MESSAGES_SENT}`
        });

    } catch (error) {
        console.error("Error sending messages:", error);
        sendResponse({ status: "error", message: error.message });
    }
}

async function sendAllLines(lines, mainContainer, textarea, options) {
    const messageDelay = (options.delaySend || TIMING.MESSAGE_DELAY) * 0.7;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;

        await sendSingleMessage(line, textarea, mainContainer, i + 1);

        if (i < lines.length - 1) {
            await sleep(messageDelay);
        }
    }
}

async function sendSingleMessage(message, textarea, mainContainer, messageNumber) {
    // Focus and set message
    textarea.focus();
    textarea.innerHTML = '';
    textarea.innerHTML = message;

    // Trigger input event
    textarea.dispatchEvent(new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        inputType: 'insertText',
        data: message
    }));

    await sleep(TIMING.INPUT_DELAY);

    // Find and click send button
    const sendButton = findSendButton(mainContainer);
    if (!sendButton) {
        throw new Error(`${MESSAGES.ERRORS.NO_SEND_BUTTON} ${messageNumber}`);
    }

    sendButton.click();
}
