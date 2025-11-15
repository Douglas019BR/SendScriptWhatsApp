async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	const main = document.querySelector("#main") || document.querySelector('[data-testid="conversation-panel-body"]');
	const textarea = main.querySelector(`div[contenteditable="true"]`) || 
					 main.querySelector('[data-testid="message-composer"]') ||
					 main.querySelector('[role="textbox"]') ||
					 main.querySelector('div[spellcheck="true"]');
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		textarea.focus();
		textarea.innerHTML = '';
		textarea.innerHTML = line;
		
		textarea.dispatchEvent(new InputEvent('input', {
			bubbles: true,
			cancelable: true,
			inputType: 'insertText',
			data: line
		}));

		await new Promise(resolve => setTimeout(resolve, 50));
	
		const sendButton = main.querySelector(`[data-testid="send"]`) || 
						   main.querySelector(`[data-icon="send"]`) ||
						   main.querySelector(`[data-icon="wds-ic-send-filled"]`)?.closest('[role="button"]') ||
						   main.querySelector('button[aria-label*="Send"]') ||
						   main.querySelector('span[data-icon="send"]').parentElement;
		
		if(sendButton) {
			setTimeout(() => {
				sendButton.click();
			}, 100);
		} else {
			console.warn("Send button not found for line:", line);
		}
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Músicas do Ponte Preta (Macaca)

Hino da Ponte Preta
Estandarte desfraldado
preto e branco é sua cor
Ponte Preta vai pro campo
prá mostrar o seu valor

Ponte Preta inflamante
Ponte Preta emoção
Ponte Preta gigante
raça de campeão

Seu estádio é o Majestoso
seu nome uma glória
Ponte Preta sempre sempre
na derrota ou na vitória

És amada Ponte Preta
O rgulho de nossa terra
Ponte Preta de paz
Ponte Preta de guerra

Ponte Preta de paz
Ponte Preta de guerra


MACACA QUERIDA 

Ponte, macaca querida, amor da minha vida
A Ponte é raça e tradição
Amor que vem do coração
Por isso já não tem mais jeito
O grito sai do peito
O que? O que?
Vamo, vamo lá Ponte
Olê Olê

Ponte, macaca querida
Amor da minha vida
Sou louco por você

Ponte, macaca querida
Amor da minha vida
Sou louco por você

Ponte, eu te amo
Eu sou macaco,
Você é galinha.
Somos a maior,
Maior torcida do interior!

Ponte, eu te amo!
Ponte, eu te amo, meu amor!
Ponte, eu te amo!
Ei galinha, vai tomar no ####

Ponte, macaca querida
Amor da minha vida
Sou louco por você

Ponte, macaca querida
Amor da minha vida
Sou louco por você

Ponte, eu te amo
Eu sou macaco,
Você é galinha.
Somos a maior,
Maior torcida do interior!

Ponte, eu te amo!
Ponte, eu te amo, meu amor!
Ponte, eu te amo!
Ei galinha, vai tomar no ####

Eu sou da Ponte Preta,
Vivo por ela, e vou em qualquer lugar,
Minha maior alegria, 
É ver meu time entrar em campo e massacrar,
Eu sou Torcida Jovem,
Meu santo é forte, ele vai nos ajudar,
Eu sou amor maior,
Se for preciso eu dou porrada até matar,
Olê!
Ê êêêê, Jovem chegou, agora eu quero ver!
Ê êêêê, Jovem chegou, agora eu quero ver...

Galinha me diz como se sente,
Ter que jogar a série C,
Ainda que se passe os anos,
Nunca iremos esquecer,
O Gigena te matou,
O Weldon te enterrou,
12 anos, 9 vezes rebaixou,
O Pão de Açúcar goleou,
O galinheiro penhorou,
E o dérbi pelo jeito acabou…

Eu boto a fúria pra correr,
Na Jovem Guá eu vou bater,
Na minha vida ninguém manda não!
Ô seus babaca,
Eu vou onde vai a macaca!
Eu vou onde vai a macaca...

PONTE PRETA AMOR MAIOR
`);
