function send(scriptText, options=Configuration) {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (!tabs[0]) {
                reject(new Error("Nenhuma aba ativa encontrada"));
                return;
            }

            chrome.tabs.sendMessage(tabs[0].id, {
                action: "sendMessages",
                scriptText: scriptText,
                options: options
            }, function(response) {
                if (chrome.runtime.lastError) {
                    reject(new Error("Erro ao enviar mensagem: " + chrome.runtime.lastError.message));
                    return;
                }

                if (response && response.status === "error") {
                    reject(new Error(response.message));
                    return;
                }

                resolve(response);
            });
        });
    });
}