async function enviarScript(scriptText) {
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	const main = document.querySelector("#main") || document.querySelector('[data-testid="conversation-panel-body"]');
	const textarea = main.querySelector(`div[contenteditable="true"]`) ||
		main.querySelector('[data-testid="message-composer"]') ||
		main.querySelector('[role="textbox"]') ||
		main.querySelector('div[spellcheck="true"]');

	if (!textarea) throw new Error("Não há uma conversa aberta")

	for (const line of lines) {
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

		if (sendButton) {
			setTimeout(() => {
				sendButton.click();
			}, 100);
		} else {
			console.warn("Send button not found for line:", line);
		}

		if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}

	return lines.length;
}

enviarScript(`

*WHISKY A GO GO*

Fui numa festa na Geral do Grêmio
É lá que rola a festa sim senhor
Rapazeada é puro sentimento
A que mais canta pelo Tricolor

Senti na pele aquela energia
Quando entrei naquela multidão
Eles não param em nenhum segundo
É pura alma é pura emoção

Quase no fim da festa
Na avalanche louca você se perdeu
No meio da alegria
Não teve aquele que não bebeu

E dá-lhe, dá-lhe, dá-lhe Tricolor
E dá-lhe, dá-lhe, dá-lhe Tricolor
Tu vais vencer, és um campeão mundial

*NÓS SOMOS DO GRÊMIO*

Nós somos do Grêmio, o clube mais copeiro
Somos campeões do mundo inteiro
Vamos, Tricolores, para ganhar esta noite
Temos que jogar pelas três cores

A imprensa nos chama de delinquentes
Não entendem o que o Grêmio é para a gente
Desde cedo, me ensinaram a te seguir
Uma vitória é o que pedimos para ti

Nós somos do Grêmio, o clube mais copeiro
Somos campeões do mundo inteiro
Vamos, Tricolores, para ganhar esta noite
Temos que jogar pelas três cores

A imprensa nos chama de delinquentes
Não entendem o que o Grêmio é para a gente
Desde cedo, me ensinaram a te seguir
Uma vitória é o que pedimos para ti

*PELO GRÊMIO EU DECIDI VIVER*

Borracho
Pelo Grêmio decidi viver
Faça tudo que puder
Hoje temos que vencer

Borracho
Pelo Grêmio decidi viver
Faça tudo que puder
Hoje temos que vencer

Tudo que eu já deixei
Eu não olho para trás
Sigo sempre ao Tricolor
E não me arrependo jamais

É um amor descontrolado
Que levo no coração
Não importa o que aconteça
Só te quero ver campeão

Não importa o resultado
Não importa aonde for
Vou tomando o meu trago
Com a banda tricolor

Borracho
Pelo Grêmio decidi viver
Faça tudo que puder
Hoje temos que vencer

Borracho
Pelo Grêmio decidi viver
Faça tudo que puder
Hoje temos que vencer

*DESDE PEQUENO EU TE SIGO*

Desde pequeno eu te sigo
Com o Grêmio sempre a todo lado
Sigo sempre cantando não importa qual o resultado

Não me esqueço do dia
Em que meu velho pai me dizia
Que pra mim deixaria a força da nossa torcida
No Rio Grande o copero é só o Grêmio oh oh
O primeiro a conquistar o mundo inteiro oh oh

E a ti vermelho puto eu só te digo
Tu és amargo e nosso filho
Nós já queimamos o beira rio

*EU SÓ QUERO VENCER LA NO CHIQUEIRO*

Eu só quero vencer lá no chiqueiro
Que se foda a torcida do Internacional
Vamos Grêmio, com força vamo em frente
É o que pede a gente uma vitória a mais

Passam-se os anos
Passam-se os jogadores
Geral está presente
Não para de apoiar

Por isso eu quero cantar
(Dá-lhe, dá-lhe) Grêmio de coração
Eu te sigo a toda parte
Tu és sempre o campeão

Inter te conhecemos
Grêmio não és como tu
Colorado é tudo puto
Vai tomar nesse teu cu

*VOU TORCER PRO GRÊMIO BEBENDO VINHO*

Vou torcer pro Grêmio bebendo vinho
E o Mundial é o meu caminho
Vou torcer pro Grêmio bebendo vinho
E o Mundial é o meu caminho

Eu vivo bebendo sempre borracho
E o tele-entulho já foi chamado
O descontrole já está formado
Grêmio, te dou a vida por este campeonato

Vou torcer pro Grêmio bebendo vinho
E o Mundial é o meu caminho
Vou torcer pro Grêmio bebendo vinho
E o Mundial é o meu caminho

Na rádio toca o velho rock 'n' roll
Lembra o Renato, o homem-gol
Nada mais apaga essa história
Grêmio Imortal, amargo chora

Vou torcer pro Grêmio bebendo vinho
E o Mundial é o meu caminho
Vou torcer pro Grêmio bebendo vinho
E o Mundial é o meu caminho

*VENHO DO BAIRRO DA AZENHA*

Venho do bairro da Azenha
Bairro do Monumental
Grêmio é puro sentimento
Somos a banda da Geral

Dale, dale, Tricolor
Dale, dale, Tricolor
Dale, dale, dale, dale, Tricolor!

Dale, dale, Tricolor
Dale, dale, Tricolor
Dale, dale, dale, dale, Tricolor!

*AMOR DESCONTROLADO*

Esse amor descontrolado
Nunca vou deixar de lado
Sempre junto ao Tricolor
Eu te sigo aonde for

Com meu trapo e a bandeira
Venho pela camiseta
Hoje de qualquer maneira
Nós temos que ganhar

Já faz muito tempo que eu venho te apoiar
Contigo na boa e na ruim muito mais
Por isso eu te digo que de coração
Te alentaremos para sair campeão

*PINGOS DE AMOR*

A vida passa, eu telefono
E você já não me atende mais
(Grêmio, Grêmio)
Será que já não temos tempo
E nem coragem de dialogar?
(Grêmio, Grêmio)

Ainda ontem
Pela praia, alguma coisa
Me lembrou você
(Grêmio, Grêmio)
E veio a noite
Namorados se encontrando
E eu estava só
(Grêmio, Grêmio)

Vamos ser outra vez nós dois
Vai chover Pingos de amor

Laia-laia-laia-laia-laiaaa
(Grêmio, Grêmio)
Laia-laia-laia-laia-laiaaa
(Grêmio, Grêmio)

*EU TE SIGO A VIDA INTEIRA*

E vamos, Grêmio, eu te sigo a vida inteira
Estou contigo não importa o que aconteça
Grêmio querido, hoje temos que ganhar
Atrás do gol nós cantaremos sem parar

Quero que saibam
Pelo Grêmio eu dou a vida
Pra quem não entende
O tricolor é minha alegria

Quando eu morrer, não quero nada de flores
Eu quero um trapo que tenha as tuas cores

E dale dale, dale dale tricolor
E dale dale, dale dale tricolor
E dale dale, dale dale tricolor
E dale dale, dale dale tricolor
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
