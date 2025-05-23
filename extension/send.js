function send(scriptText, options=Configuration) {
    window.InputEvent = window.Event || window.InputEvent;
    const TIME_SEND = options.delaySend
    
    const VIEW_ELEMENTS = {
        textbox:  document.querySelector(options.textareaSelector),
        button_send: () => {
            return document.querySelector(options.sendButtonSelector)
        }
    }

    function sendMessage (messagem) {
        const event = new InputEvent('input', { bubbles: true });

        VIEW_ELEMENTS['textbox'].textContent = messagem;
        VIEW_ELEMENTS['textbox'].dispatchEvent(event);

        const buttton_send = VIEW_ELEMENTS['button_send']();
        buttton_send.click();
    }

    const lines = scriptText.split("\n");
    let  i = 0;
    const id = setInterval(frame, TIME_SEND);

    function frame () {
        if (i >= lines.length) {
            clearInterval(id);
        }

        const line = lines[i];
        if(line.trim() != '') {
            sendMessage(line);
        }

        i++;
    }
}