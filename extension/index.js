window.addEventListener('load', function() {
    console.log("Extension loaded...")
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {    
    if (request.action === "sendMessages") {
        const scriptText = request.scriptText;
        const options = request.options;
        
        try {
            window.InputEvent = window.Event || window.InputEvent;
            const TIME_SEND = options.delaySend || 1000;
            
            const VIEW_ELEMENTS = {
                textbox: () => {
                    return document.querySelector(options.textareaSelector);
                },
                button_send: () => {
                    return document.querySelector(options.sendButtonSelector);
                }
            };

            function sendMessage(messagem) {
                const textarea = VIEW_ELEMENTS['textbox']();

                if (!textarea) {
                    throw new Error("Elementos textarea do WhatsApp não encontrados");
                }

                textarea.focus();
                document.execCommand('insertText', false, messagem);
                textarea.dispatchEvent(new Event('change', {bubbles: true}));

                setTimeout(()=>{
                    const buttton_send = VIEW_ELEMENTS['button_send']();
                    
                    if (!buttton_send) {
                        throw new Error("Elementos buttton_send do WhatsApp não encontrados");
                    }

                    buttton_send.click();
                }, 100)
                
            }

            const lines = scriptText.split("\n");
            let i = 0;
            const id = setInterval(frame, TIME_SEND);

            function frame() {
                if (i >= lines.length) {
                    clearInterval(id);
                    sendResponse({ status: "success", message: "Mensagens enviadas com sucesso" });
                    return;
                }

                const line = lines[i];
                if(line.trim() != '') {
                    sendMessage(line);
                }

                i++;
            }
        } catch (error) {
            sendResponse({ status: "error", message: error.message });
        }
    }
    return true; // Mantém a conexão aberta para respostas assíncronas
}); 