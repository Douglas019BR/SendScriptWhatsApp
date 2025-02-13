function enviarScript(scriptText) {
	const lines = scriptText.split('\n');

	let i = 0;

	setInterval(() => {
		if (i >= lines.length) return;

		if (lines[i].trim() != '') {
			console.log(lines[i]);

			window.InputEvent = window.Event || window.InputEvent;

			const event = new InputEvent('input', { bubbles: true });

			const textbox = document.querySelector('div._2_1wd[data-tab="6"]');

			textbox.textContent = lines[i];

			textbox.dispatchEvent(event);

			document.querySelector('button._1E0Oz').click();
		}
		i++;
	}, 250);
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
