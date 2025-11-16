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


//peca O pai i o, de marcio meirelles, retirado de https://www.marciomeirelles.com.br/site/wp-content/uploads/2013/10/1995-%C3%93-PAI-%C3%93-OK.pdf


enviarScript(`
Ó PAI, Ó!
de Marcio Meirelles

Banda toca alto os tambores. DONA JOANA anda de um lado para o outro, ansiosa.
Chega a PROFESSORA correndo. Não se ouve o que falam, por causa dos tambores.
PROFESSORA
Dona Joana!... Dona Joana, seus filhos!...
DONA JOANA
Ó paí, ó!
Congelam as duas
TODOS:
Cantam:
Quando o futuro abrir o presente vai encontrar com a gente.
Refrão: Ó paí, ó paí, ó paí, ó
Ó paí, ó!
o que foi que foi feito. O que fizemos.
E o que seremos?
Refrão
Esse é o nosso mundo.
Esse somos nós, ó paí, ó.
Fazendo o novo tempo.
Com a nossa voz, ó paí, ó.
Refrão
Durante a música, entram todos os personagens.

Cenas da rua - tabuleiro da BAIANA, bar de NEUZÃO, loja de seu GEREBA

SEU MATIAS
Atravessa a cena mercando
    • imbu, imbu, imbu! Imbu doce, imbu de barrinha. Oh, mãe! Se sua filha chorar, não bata nela, dê imbu pra ela. Se ela continuar chorando, dê suco de imbu pra ela, que esse imbu aqui a casca é doce e o caroço é mole. Eu tenho de cinco, eu tenho de seis, eu tenho de sete... o saco! E quem vai querer comprar imbu aí...


CARMEM
Chega rindo.
Ôpa, Baiana!

BAIANA

Interrompe a leitura do jornal.
O negócio tá entrando...

CARMEM

Não tá entrando não, Baiana. Já saiu!

BAIANA

Aproveitando! Mostra o jornal. Dois presuntos, parece os filhos de Faustina.

CARMEM

Eu não quero saber de presunto não, Baiana. Me diga uma coisa, Baiana: você não vai fazer aquele trabalhinho para mim não, é?

BAIANA

Você já viu viado virar homem, aonde? Não tem orixá que dê jeito! E você vai pra onde, assim desse jeito, toda enfeitada, parecendo uma árvore de natal?

CARMEM
Vou pra Bênção, Baiana. Comigo é assim: começo de manhã e só saio no lixo.

BAIANA

Antigamente não era assim não, minha filha. Só tinha a primeira e a última terça do mês; agora é Bênção todos os dias. Foi terça-feira, sou negão, caio na Bênção. Antigamente a negrada vinha, tomava seu cravinho, fazia sua reunião e ia embora. Hoje em dia, não. É um tal de rala a tcheca e passa a mão.

LÚCIA

Entra. Oxente, Baiana!

BAIANA

Oh! Minha filha, quem chamou?

LÚCIA

Agora que a Bênção é festa soçaite! Antigamente não: só dava brown. Mas hoje em dia, dia de terça-feira, o Pelourinho está iluminadíssimo; a brancada desceu, gente fina, elegante, perfumada. O homem vai reformar tudo, vai tirar a negrada e entregar à brancada que é de direito. Não, eu digo isso, porque aqui era um dos últimos lugares que servia de quilombo pra essa negrada. Agora o Pelourinho vai ficar impistiado de Geovana Baby. Tudo cor de rosa. Pelourinho agora é – “Ação, Competência e Moralidade”. Eu tenho "orgulho de ser baiana". Aí, já viu, né? A televisão vai vir logo atrás e o Pelourinho agora é só divulgacion. Baiana, tem petisco?

BAIANA

Eu tenho cara de baiana da Graça ou da Barra pra vender petisco?

LÚCIA

Então me dê aí um abará carregado de pimenta que é pra seu Gereba.

BAIANA

Seu Gereba não come pimenta.

LÚCIA

Hoje ele vai comer.

BAIANA

Conhece essa?

CARMEM

Não, nunca ouvi falar.

BAIANA

Trabalha com seu Gereba há um bom tempo. Ela é meio assim.

LÚCIA

O que é que ela faz Baiana?

BAIANA

Aborta!!!

LÚCIA

Tapa o ouvido. Aiii!!

CARMEM
O que foi minha filha? Tá precisando dos meus serviços? Eu ainda atendo a domicílio.

LÚCIA

Eu não, minha filha, que eu ainda tenho mel.

CARMEM

Mel? Eu sei o mel que você tem: é aquele que seu Gereba chupa de canudo depois do expediente.

BAIANA

Sempre olhando o jornal. Abelha! Ah, mas não tem abelha no bicho, então é borboleta!

CARMEM

E ainda tem mais, Augusta Carne-Mole me contou que você já fez quatro abortos e seu útero está todo perfurado.

LÚCIA

Que vocabulário chifrin é esse, minha filha? Você não quer que eu rode a baiana aqui, né? Sua bago mole, apetrecho de jegue. Tá pensando o quê, nega? Todo mundo aqui no Pelourinho sabe que você esqueceu a tesoura de jardinagem na barriga da mulher.

BAIANA

Como é que fala assim da criatura!

CARMEM
Kini, kiluá, kidiângulovango? Que muvuca desgraçada é essa com meu nome? Olha, fecha o seu cú na carreira, que dá sua boca só sai besteira.

LÚCIA

Gritando. Ó paí, ó! Ó paí, ó! Ó paí, ó, Baiana! Tá vendo logo que eu não vou me nivelar, Baiana, eu sou uma mulher de classe. Sabe quando é que vão me ver falando alto, batendo boca e baixando o nível aqui no Pelourinho? Abaixa o volume de voz. Never!

CARMEM

Já fui, Baiana.

LÚCIA

O abará, Baiana?

BAIANA

Tá saindo.

CARMEM

Diga aí, Neuzão!

NEUZÃO
Que batefum é esse aí com o seu nome, hein, Carmão?

CARMEM
Já viu, Neuzão? A mulher querendo bafômetro com meu nome?

NEUZÃO

Num já viu? Mas Carmão, hoje eu acordei nostálgica. Me lembrei do dia que saí de Juazeiro e vim pra Salvador. Logo chegando, procurei me informar. Como eu estava a fim de uma novidade me indicaram logo a porra da Bênção. Quando cheguei no Pelourinho tomei um cravinho com Roupinol. Fiquei enlouquecida. Olha só o tamanho do olho! Era terça-feira de Bênção. Joguei capoeira com um rastafari, dei bênção e tudo mais, caí num sambão que só deu eu. Daí eu resolvi: É aqui que eu vou ficar. Hoje em dia tô saindo até num bloco.

CARMEM
Já sei: as Filhas de Ghandi!

NEUZÃO

Não. Tinha muita nigrinhagem lá dentro e eu me saí. Não deu certo comigo. Hoje saio no bloco de Margareth Menezes: a negona lá de cima só no mega-hair e eu fico doida lá de baixo, me dá uma neuvrogia! Daí resolvi abrir meu estabelecimento, começando devagarinho. E tou fazendo a minha fortuna e tá todo mundo aqui de olho, mas eu não como nada.

CARMEM

Com toda essa neuvrogia vamos lá no seu bar que eu quero tomar uma.

LÚCIA

O abará, Baiana.

BAIANA

Tá saindo.

NEUZÃO

Desce uma!

MENINA DO BAR

Vai de que?

CARMEM

Cachaça.

BAIANA

Olhando o jornal. Jacaré.

DONA MARIA
Entra pra falar com a BAIANA. Hoje eu tive um sonho, comadre. Faça um jogo aí pra mim, me dá um palpite.

BAIANA

Mostra o jornal. Olha comadre dois presuntos. Parece os filhos de Faustina!

DONA MARIA

Ih, comadre! Presunto é defunto e defunto é urso.

BAIANA

Urso o que, comadre! Cobra, duas cobras!

DONA MARIA

Cobra!

PISSILENE

Entra. Maria! Mas não é Maria!

DONA MARIA

Pissi, mulher de Deus!

PISSILENE

Maria, como você está gorda! Ainda está lavando roupa?

DONA MARIA

Eu tô, não é, mulher! E você está mais bonita, mulher!

PISSILENE

Tô, né, minha filha? Mudei de vida; estou vivendo bem, comendo bem, passeando de avião pra lá, avião pra cá, carro do ano, hotel de luxo.

DONA MARIA

Mulher, abafe o caso, mas eu soube que você estava lavando prato por lá, mulher de Deus.

PISSILENE

Eu lavando prato? Ó paí, ó! Mas o povo não pode ver ninguém bem, não é menina? Isso
    • intriga, minha filha, de quem não viajou com gringo, de quem não andou de avião para lá e para cá, de quem não jantou escargot e comeu caviar. De quem ficou aqui no Pelourinho batendo barrela. Isso é intriga.

DONA MARIA

Sim mulher, mudando de assunto, me fala do tal do gringo.

PISSILENE

Me fala de você, quero saber de sua vida, como é que vai, os meninos ...

DONA MARIA

Os meninos estão bem, mulher, todos crescidos, estudando. Já tem até um tocando na Banda do Olodum. Mas agora tem uma menininha que eu peguei pra criar, mulher, tava toda apustemada. Tratei, cuidei... agora que tá boa, a mãe quer tomar, mas você sabe que eu não dou! Marido, você sabe, não é? Eu sou uma mulher que trabalha, sou independente. Dei um bom chute na bunda. Sim, mulher, me fala do gringo.

PISSILENE

Maria, me deu uma saudade do azeite! Que tal um acarajé? Eu pago.

DONA MARIA

Comadre, esta é Pissi. Veio da Austrália.

PISSILENE

Boa tarde, Baiana.

BAIANA

Aproveitando... Mostra o jornal. Dois presuntos, parece os filhos de Faustina.

PISSILENE

Maria, o que é presunto?

DONA MARIA

Você não sabe o que é presunto? Dois meninos que mataram aqui no Pelourinho.

PISSILENE

Se matam crianças aqui no Brasil, Maria?

BAIANA

De montão!

DONA MARIA

Por que, mulher? Aonde você estava não mata não, é?

PISSILENE

Imagine! Lá você só vê carro do ano, hotéis de luxo, executivos - cada um com seu telefone celular - as crianças vão pra escola, não ficam na rua roubando e matando.

DONA MARIA

Mulher, me fala do gringo.

LÚCIA

Que está por ali, ao ouvir a palavra gringo chega mais perto do grupo. Hellô, ainda não fomos apresentadas. How are you? My name is Lúcia. What's you name?

PISSILENE

Relaxe, nega. Eu domino o idioma. Pissilene, a minha graça.

LÚCIA
Piacere. Mas eu estive escutando a senhora... A senhora esteve na Europa?

PISSILENE

Europa não, querida. Austrália.

LÚCIA - Ah, mas tudo é esteites. Você poderia me dar um minutinho do seu particular? Afastam-se. Ah, dona miss Pissilene, eu já fiz de tudo pra conseguir botar meus pés na Europa! Tirei passaporte. Eu já fiz curso de inglês, tomei banho de folha e nada! Não consigo nem botar os pés em Cachoeira que é mais perto.

PISSILENE

Maria, Cachoeira?

DONA MARIA

Mulher! Você, mangueira velha, não sabe aonde é Cachoeira?

PISSILENE

Sim, nêga, fale.

LÚCIA

Estou vendo que a senhora é uma mulher protuberante, requintada, vai me dar uma luz.

PISSILENE

Claro, claro! Mas vou te dizer: pra você ir a Europa não precisa nem falar inglês. Gringo

gosta é de peito, de bunda. Aqui meu cartão: “Pissilene, produtos naturais. Silicone.”

LÚCIA

Silicone, que chique! Vê DONA MARIA se aproximar. I'm sorry, o abará de seu Gereba.
Eu vou te procurar, dona Pissilene, nunca vou dimenticar o que a senhora tá fazendo.

PISSILENE

Maria, que menina mais despreparada essa sua amiga! Sabe o que ela quer? Ir pra Europa. Sabe o que ela vai fazer lá? Lavar prato pro gringo, servir de babá prá os filhos do gringo, abrir as pernas pro gringo! E depois que ele comer, comer e cansar, manda a carcaça de volta pro Brasil! Isso quando manda! Porque às vezes fica anos e anos trabalhando de prostituta pra conseguir um trocado e voltar para o Brasil.

BAIANA

Apois, me diga, nêga: por que tu voltou, hein?

PISSILENE

Baiana, quando o acarajé estiver pronto, mande o menino levar lá no bar. Vamos Maria, tomar um drink. Vão pro bar.

BAIANA

Vai demorar um pouquinho.

DONA MARIA

Neuzão, bota uma pinga aí pra mim e uma cachaça pra Pissi.

PISSILENE

Imagine, eu tomar cachaça. Prefiro um drink.

NEUZÃO

Domecq ou Dreiher?

PISSILENE

Você me vê um Teacher's.

LÚCIA e LORD BLACK se encontram na rua.

LORD BLACK

Dona Lúcia, dona Lúcia, com bons olhos a vejo! Como é que está o nosso Bahia-Night?

LÚCIA

Não está.

LORD BLACK

Como não está, dona Lúcia?

LÚCIA

Love, meu amor, cinismo não! Que você sabe o investimento de vida que eu tenho feito pra colocar meus pés na Europa e quando pinta uma oportunidade como essa, você chama a Lucy lá do Carmo, que eu tô sabendo. Uma desclassificada daquela, Lord Black! Que não sabe a diferença entre polenta e mingau de milho.

LORD BLACK

É todo esse o seu problema, dona Lúcia? Aquela tabacuda nem aceitou viajar!

LÚCIA

Eu tô sabendo! Ela mesma fez questão de me contar, ali no pé da ladeira - "Eu não vou, não. Porque não sei se vou me dar bem. Uma língua diferente, um povo diferente. Eu não vou sair daqui porque aqui é que é terra de meu Deus." Que terra de meu Deus, meu Deus, se até Deus é chique e se mantém lá de cima!

LORD BLACK

Ah! Deixa isso pra lá, vem pra cá, meu bem!

LÚCIA
Que é isso Lord Black! "O Olodum tá hippie", o Olodum tá pop", mas eu ainda não pirei de vez, não!

LORD BLACK

Tudo bem, dona Lúcia. Façamos o seguinte: a senhora sai comigo e os gringos hoje à noite. No meio do caminho, convenço o juízo deles e fica tudo em cima. Até quem sabe a senhora parte desta cidade pra uma outra melhor?

LÚCIA

Not, not e not.

LORD BLACK
    • paí, ó. Tá dando uma de boa do beco, rainha do Carandirú. Fique sabendo de uma coisa, quando você precisar dos meus serviços eu vou te deixar é no chinelo.

LÚCIA

Ah! Lord Black você já era. Saem, um pra cada lado.

MARCELO
Entra e LÚCIA se esbarra nele. Diga aí, negona?

LÚCIA

Feche a cara.

MARCELO

Feche a cara por quê?

LÚCIA

Isso é adjetivo que se use: negona. Você sabe o que diz o artigo 268?

MARCELO

Da Constituição Baiana?

LÚCIA

Essa mesma.

MARCELO

A prática do racismo é crime inafiançável e imprescritível.

LÚCIA

E vou lhe processar por danos morais.

MARCELO

A mim, velho?

LÚCIA

A você, sim senhor! Porque o gringo quando passa aqui pega no meu queixo, e diz - "Diga aí morena".

MARCELO

Porque quer fazer amor gostoso. Fazer um turismo sexual.

LÚCIA

Me poupe.

MARCELO

No momento que você toma essa atitude, você só reforça o que eles andam colocando aí nos jornais.

LÚCIA - O que?

MARCELO

Que agora nas terças-feiras de bênção é que vem gente bonita no Pelourinho.

LÚCIA

Evidente.

MARCELO

Evidente uma porra! Toda vida teve gente bonita aqui no Pelourinho. Afinal de contas somos negros bonitos ou não somos?

LÚCIA

Somos, uma vírgula! Você é negro. Eu sou mestiça.

MARCELO

Vai lá morena achocolatada.

LÚCIA

Vá tirar uma chapa do pulmão. O abará, Baiana?

BAIANA

Mantenha sua fé, tá saindo.

MAICOLGEL

Entra dançando no Bar de Neuzão. Diga aí, Neuzão!

NEUZÃO

Que porra foi essa que tu passou no cabelo meu irmão? Tu passou Wellin foi, Zé? Tá esquisito como quê, rapaz.

MAICOLGEL

Que Wellin o que, Neuzão! Aqui é Maicongel. Você passa, o cabelo fica com esse balanço e esse brilho. Olhe só...

NEUZÃO

Rapaz, tu ficou mais feio ainda. Tá muito esquisito.

MAICOLGEL

Feio o que? Tou é lindo! Mas eu vim aqui foi por outro motivo especial: estou precisando do seu espaço pra fazer um show cover de Michael Jackson. Você abre seu espaço aí e eu faço o show.

NEUZÃO

Você sabe que eu estou começando agora. Meu negócio ainda esta pequenininho, mas a gente pode até conversar. Você entra com o som e a iluminação, toda equipe técnica, a produção, eu cedo o espaço e a gente divide os 50% do couvert, vai?

MAICOLGEL

Qual é, Neuzão? Você está pensando que eu sou Madona? São 70% meu e 30% seu do couvert. E você ainda acha que eu, famoso, faço shows em todos os barzinhos chiques da cidade, quero mostrar meu trabalho nesse seu bar fuleiro. Você ainda tira onda?

NEUZÃO

Como é, meu irmão? Bar fuleiro! Se você não retirar o que disse não tem mais conversa. Vá se saindo, anda! Caminha!... Ainda acha a besta aqui pra dar atenção, vem me ofender. Ah! Nêgo desassuntado!

MAICOLGEL

Tá bom, como você é uma amiga legal, eu retiro.

NEUZÃO

Adianta, meu.

MAICOLGEL

Antigamente, todo mundo aqui no Pelourinho me chamava de Zé Bunda, mas agora sou cover. Estou ficando branco, o meu nariz está afilado: é pigmentação pura. Eu vou pra quadra e as meninas da Graça e da Barra e eu lá encostado. Quando eu olho tou todo melado. Sai marcando passo.

NEUZÃO

Só borracha! O que é mesmo que você está fazendo aí, Zé?

MAICOLGEL

Tou medindo o espaço pra ver se cabe o meu show aqui.

NEUZÃO

Adianta, meu irmão! Não tou aqui pra perder tempo.

MAICOLGEL faz uma paródia do clip "Bad" de Michael Jackson acompanhado por todo o elenco.

Cenas do cortiço.

Chega YOLANDA da rua, vai pro banheiro, abre a torneira do chuveiro, olha pra cima, fecha e vai pro seu quarto. DONA RAIMUNDA está abanando seu fogareiro como se fizesse muita fumaça.

DONA JOANA

Feiticeira! Que fumaceira é essa aí embaixo? Tá fumando maconha?

DONA RAIMUNDA

O que é, língua ferina? Me deixe!

DONA JOANA

Quando Barbozinha chegar aí, dando tiro, fique doida com a bala perdida. Aí a chacina vai ser boa. O prédio vai pegar fogo, sabe aonde a gente vai morar? Cajazeira 50. Aí é que vai ser gostoso.

DONA RAIMUNDA

Vai cagar, cocô!

REGINALDO chega da rua, tira uma escova, entra no banheiro escovando os dentes, abre a torneira, não tem água. Sai do banheiro e entra no quarto escovando os dentes, onde MARIA está sentada, costurando.

MARIA

Bom dia, Reginaldo, bom dia!

REGINALDO

Bom dia, Maria! Maria, tá sabendo que apareceram duas crianças mortas ali do lado?

MARIA

Virgem Senhora da Conceição, será possível que todo dia tem uma criança morta nesse Pelourinho, meu Deus!

REGINALDO

E, pelo jeito, foi extermínio. Com certeza!

MARIA

Mas não venha não, seu Reginaldo. Eu quero saber o que é que o senhor anda aglutinando nessa sua cabeça. É, porque agora é assim: sai num dia de manhã e só me
aparece no outro dia. E agora com tudo arrumado na cabeça, que até o diabo da escova de dente já leva no bolso.

REGINALDO

Pirou! Maria pirou! Eu cheguei aqui tarde da noite, fui na cozinha, fui no banheiro, fiz a maior zoada e você nem acordou, Maria! Eu aí fiquei aqui no meu cantinho.

MARIA

Reginaldo, você pensa que eu sou robô pra comer pilha? Só pode ser!

REGINALDO

Não é nada disso, Maria. Você sabe que é a minha federal, a minha idolatrada ...

MARIA

Que negócio de federal, Reginaldo? Não tem federal, estadual e nem municipal: você
fica aí escorado pelos cantos da casa. O táxi tá lá na oficina, todo acabado e você nem chit.

REGINALDO

Maria, o diabo daquele táxi não serve mais pra nada, tá todo acabado, todo enferrujado. A única coisa que presta é a placa, que por sinal eu vou aproveitar muito bem. Porque tem um camarada, amigo meu, que vai descolar um carro pra mim se dar bem.

MARIA

Minha Nossa Senhora, Reginaldo está envolvido com gangster.

REGINALDO

Que gangster, Maria, que nada! O cara é policial. Policial, Maria. E tem mais...

MARIA

Reginaldo, e que diabo de carro é esse?

REGINALDO

É Quantum, Maria.

MARIA

É o que Reginaldo?

REGINALDO

Quantum. E tem mais: Maria, pra ficar com esse carro definitivamente eu tenho que
pagar uma grana a ele. Aí é que tá o problema, Maria: essa grana é muito alta e eu não tenho esse dinheiro agora. Aí eu tava pensando em passar aquela casa da Urbis que a gente não vê há um bom tempo e pegar o dinheiro...

MARIA

Passar, passar? Não vai passar, não vai vender, não vai fazer nada. Não me interessa Reginaldo, não me interessa. O problema da quantidade do carro foi seu, o crime organizado foi você que organizou. Reginaldo, eu já falei pra todo mundo que a gente ia

sair daqui. O que é que eu vou dizer a esse povo agora, Reginaldo? Não, Reginaldo, eu tenho que sair daqui de qualquer jeito. Eu tenho que ir pra Boca da Mata de qualquer maneira.

DONA JOANA

Agachada, olhando por um buraco no assoa lho. Deixe ela ir sozinha, seu Reginaldo.

MARIA

Olhando pra cima. Ó paí, ó! A mulher fica de lá de cima, olhando a vida dos outros. Eu vou comprar um ferro e vou furar seu olho, viu? Você tá vendo, Reginaldo? Tenho que sair daqui de qualquer jeito.

REGINALDO

Maria, cuidado. Ó a criança, calma.

MARIA

Reginaldo, vá resolver seu problema e desapareça da minha frente.

REGINALDO

Porra, vou pro bar de Neuzão! (Sai)

SEVERINO

Entra, vai ao banheiro, vê que não tem água. Passa pelo corredor e tropeça em MARY que está deitada no chão. Oh! Mulher você vai ficar aí deitada no corredor?

MARY STAR

Você tem outro lugar melhor preu se deitar?

SEVERINO

Mulher, eu passo o dia todo catando lixo na rua, chego em casa cansado, com o corredor escuro desse jeito, ainda encontro você com esse fedor desgraçado no corredor do prédio.

MARY STAR

Olhe, vou dizendo logo que não estou gostando nem um pouquinho da brincadeira, e tem mais, se o corredor tá escuro a culpa não é minha não. É porque não me conhece e daí a pouco vai sair dizendo que eu roubei a luz do prédio e eu não tenho necessidade de roubar luz de lugar nenhum não, pois a única luz que vai brilhar aqui mermo é eu e minha voz. Ave Maria, que emoção!

SEVERINO

Ô Cintilante, florescente, você vai fazer o que pra brilhar desse jeito?

MARY STAR

Eu vim mermo praqui, porque eu quero ser uma cantora famosa e exprodir pelo mundo.
Pronto, já disse.
SEVERINO

Ô meu Deus, a mulher ficou maluca, o fedor subiu pra cabeça e quer ser cantora.

MARY STAR

Tu, conhece o meu show?

SEVERINO

Não, nem quero.

MARY STAR

Ah! Mas vai conhecer, meu filho! Pois, quando eu pego o meu microfone assim e vou chegando até o povo e cantando - Embaixo sim, embaixo não, rebola tia, rebola tio, o passarinho, o papagaio e o peixinho, vai, vai, vai, oh!....

SEVERINO

Mulher, você se oriente na luz das estrelas, se aqueça nos raios do sol, se refresque na chuva que cai sobre a sua cabeça e tome vergonha na sua cara. Saia daqui que isto não vai dar certo no corredor do prédio.

MARY STAR

Por que não vai dar certo? Não diz que aqui no Pelourinho é o palco dos artistas famosos?

SEVERINO

Que toma banho. Aqui no Pelourinho os artistas tudo toma banho.

MARY STAR

Não tem probrema, se não der aqui eu vou para o Rio de Janeiro.

SEVERINO

Vá, fia.

MARY STAR

Vou para Sum Paulo. Ah! Vou pra Grobo.

SEVERINO
Olha, vai pra Grobo. E a Lourinha lá, marcando um X no seu coração.

MARY STAR

E eu marco um Z na cara dela. Quando eu pisar os pés nos palcos Grobais, SBT e tudo mais, e a mulher de lá disser - "Que gracinha!", eu digo: Ave Maria, que emoção!

SEVERINO

Faltou o outro dizer: “Querida, olhe naquela câmara e abra o jogo e diga o segredo do seu fedor”. Mudando. Mas olhe, o que falta é o repertório.

MARY STAR

Agora você falou certo.

SEVERINO

Olhe, eu tenho um amigo que é compositor, ele mora aqui mesmo no Pelourinho, o nome dele é Roberto Pitanga.

MARY STAR

Eu nunca ouvi falar, ninguém fala dele aqui no Pelourinho.

SEVERINO

Vamos fazer um show e colocar assim: Música de Roberto Pitanga, colaboração Severino Lixeiro e qual é o nome da cantora?

MARY STAR

Mary Star.

SEVERINO

A fedorenta, que emoção! Não, ele fez uma música que é a sua cara. A música é assim - "Só nos resta a garrafa de cachaça, um gole após outro gole, enquanto o milho assa, salve a cachaça e sai daqui desgraça, fedorenta, carniça". Sabe aonde que você vai cantar? No depósito de lixo de Canabrava.

MARY STAR

E os urubu sabe dançar reggae, lambada, merengue, sabe? Só... Dança.

SEVERINO

Com o seu fedor não vai ficar rato, não vai ficar urubu, sapo, não vai ficar nada.

SEVERINO

Entrando no quarto de DONA RAIMUNDA. Dona Raimunda!

DONA RAIMUNDA

Oi, seu Severino. Vá entrando.

SEVERINO

Já tô dentro. Dona Raimunda, se não fosse o fedor da mulher que está no corredor, eu dizia que é o cheirinho da sua comida que me trouxe aqui.

DONA RAIMUNDA

Oxente. Seu Severino! Assim o senhor até me ofende.

SEVERINO

A senhora já viu a miséria que está no corredor?

DONA RAIMUNDA

Não já vi? Aquele intojo!

SEVERINO

Já sabe da nova de hoje, né? A mulher desligou a transmissão.

DONA RAIMUNDA

Eu tô gostando muito, viu nigrinha! DONA RAIMUNDA grita, olhando para cima, para insultar DONA JOANA.

SEVERINO

Isso não é nada perto do que vou lhe contar. Esta é daquela de deixar o juízo quente.

DONA RAIMUNDA

Bota umas pedrinhas de gelo, que é pra esfriar.

SEVERINO

Serve não, dona Raimunda. A senhora sabe que o tal do governador quer mudar a Bênção pra de manhã? E se ele fizer isso vai estar fazendo uma malvadeza comigo. Porque a Bênção é a única festa que eu ainda saio pra me divertir, porque quando não é isso, é só lixo que eu encontro na quarta-feira. Mas não tem nada não. Porque· às vezes eu acho umas correntinhas, uns anelzinhos e me enfeito todo que não sou besta.

DONA RAIMUNDA

E o senhor fica é simpático!

SEVERINO

A senhora gosta, né? Mas o pior é que eu já mandei convidar meu fã pra Bênção de noite e agora a Bênção é de manhã. Sem graça!

DONA RAIMUNDA

Pois é, seu Severino, pode não ter graça nenhuma pra o senhor, mas eu adorei.

SEVERINO

De manhã, dona Raimunda?

DONA RAIMUNDA

Isso mesmo. O senhor sabe que terça-feira pra mim é um dia abençoado, desde 2 horas da tarde é um subir e descer de gente nessa ladeira e me aparece é cliente que a fila faz
um caracol. E eu que não sou besta; aproveito pra mais tarde dar uma raladinha na tcheca lá na Quadra

SEVERINO

A senhora gosta, né?

DONA RAIMUNDA

Ah, se gosto! Mas bom mesmo era se ele mudasse a bênção pro domingo. Porque aí, começava no domingo, emendava na segunda, terça-feira e só acabava...

SEVERINO

Na quarta-feira? E haja tcheca ralada, hein, dona Raimunda?

DONA RAIMUNDA

Lisinha, lisinha.

SEVERINO

Mas vá ficando alegrinha que eu já vou te falar também que o homem endoidou: vai tomar tudo e isso aqui vai virar um shopping center.

DONA RAIMUNDA

É, não quero saber não, só sei que daqui não saio, daqui só Deus me tira.

SEVERINO

Não vai sair não? Também não saio não, e sabe por que?

DONA RAIMUNDA

Hum?

SEVERINO

Por causa do cheirinho da sua comida. A senhora não se preocupe porque meu fã vai chegar e toda manhã de manhã vou pedir um café pra nós dois. Olhe, eu vou ali e já volto pra ver esse negócio do sobe-desce.

DONA RAIMUNDA

Não posso, seu Severino. A comida aqui dá trabalho pra mim botá e malmente dá pra mim e meu sobrinho. Até loguinho.

SEVERINO

É né? Miséria ruim, calhambeque bi-bi!

YOLANDA

No quarto, olhando para cima. Dona Joana, tem um balde de água aí?

DONA JOANA

Olhando para baixo. Tem sim Yolanda, venha aqui em cima.

YOLANDA faz que sobe as escadas e anda pelo corredor .

DONA JOANA

Já chegou assim tão rápido?

YOLANDA

Pois, é, The Flash! Dona Joana, eu vim da rua agora, não tem uma gota de água pra tomar banho, tô pôde, pôde, pôde...

DONA JOANA

Acontece que a bóia quebrou e até agora ninguém providenciou dar o dinheiro pra comprar outra.

YOLANDA

A bóia quebrou ou você desligou a transmissão?

DONA JOANA

Também fiz isso, porque quero pirraçar as mulheres lá de baixo.

YOLANDA

Você pirraça daqui e eu vou buscar os moleques do Pelourinho pra tomar banho aqui em sua casa.

DONA JOANA

Moleques aqui não! Vá logo pegar sua água lá dentro. Aliás, venha até aqui, há algum tempo eu ando muito curiosa sobre você. Como é que faz para os peitinhos ficarem assim durinhos?

YOLANDA

Ah! Minha filha, tire o olho, isso aqui é silicone.

DONA JOANA

E será que eu posso botar, hein?

YOLANDA

Mas é claro! Você coloca aqui, no quadril, no bufete, vai ficar uma uva neste vestido de batizado.

DONA JOANA

Você acha que meu Mário ia gostar de um negócio desse?

YOLANDA

O Mário já gostava.

DONA JOANA

Não, meu marido não gosta dessas coisas não e saia logo daqui.
YOLANDA
Ah! Dona Joana, eu estou tão cansada! Por que a senhora não manda os seus filhos levarem a água para mim?

DONA JOANA

Ah! Minhas crianças foram para a escola ontem e não voltaram, agora que eu lembrei.
YOLANDA

Eu sei, as crianças. Deixe que eu pego minha porra.

DONA RAIMUNDA

Tava onde menino? É de hoje que tô te procurando.

RAIMUNDINHO

Tava ali tia, tomando conta dos carros. O gringo tia, não queria me pagar duzentos contos, isso é caro? Isso é caro, tia? Caro é um pão, um é cem, dez é mil e trinta...

quanto é tia?

DONA RAIMUNDA - É trinta mil menino, cadê a tabuada? Agora venha cá fazer um favorzinho pra sua tia; eu quero que você vá lá em cima na casa da beata que desde cedo tá procurando gracejo comigo. Então vá lá, dá um trato nela, que eu quero ver a bicha doida.

RAIMUNDINHO

Tá bom tia.

DONA RAIMUNDA

Olhando pra cima Jú-ú, recado!

No quarto de D. JOANA

RAIMUNDINHO

Olhe, dona Joana, olhe! Faz movimentos eróticos com a língua

DONA JOANA

O que é isso, menino? Bote essa língua pra dentro. Você não viu meus filhos por aí, não?

RAIMUNDINHO

Porra de filho, eu quero é fazer um filho na senhora.

DONA JOANA

E essas pernas amarradas, você é galinha? Não me respeita não, menino?

RAIMUNDINHO

Respeito é babalú.

DONA JOANA

Que diabo é babalú?

RAIMUNDINHO

É meu pau no seu cú aí, dona Joana!

DONA JOANA

Mas criança, eu te vi nascer!

RAIMUNDINHO

(Mete e tira a mão das calças, mostrando a ela) Cheire aqui dona Joana!

DONA JOANA

Socorro, socorro ...

RAIMUNDINHO sai correndo e rindo. Chega no quarto de D. RAIMUNDA. OS dois se cumprimentam pelo que fizeram

YOLANDA

Mas mulher que gritaria é essa?

DONA JOANA

Você não viu isso, não? É assim que você é minha amiga, é?

YOLANDA

Mulher, eu sou a única amiga que você tem aqui.

DONA JOANA

Saia daqui, agora. Pega o banco e vai bater em YOLANDA que sai correndo.

MARIA

Virgem minha Nossa Senhora da Conceição! Isso é cara que se bote no ser humano, meu Deus?

YOLANDA

Olhe e chore. Maria, minha filha, me dê uma panela de água aí, fia, que eu cheguei da rua e tô uma lama, tô um cocô.

MARIA

E que absurdo é esse? Vai invadindo minha casa assim. Pode sair, passe na minha frente.

YOLANDA

Cê tá nervosa, é? Pronto, deixe que eu saio.

MARIA

Se você quer água, vá pedir a de lá de cima que é assim com você, sua vizinha.

YOLANDA
E você não é minha vizinha não, é?

MARIA
E eu lá quero avizinhamento nenhum com você. Olhe, vou logo lhe dizendo: eu vou me mudar.

YOLANDA

Ah, minha filha, não faça isso não.

MARIA

    • Há quinze anos Reginaldo se inscreveu na Urbis. Agora em 99 ele vai receber a casa e agora você pode entrar. Aqui ó: carpete, grade, até pia de banheiro que Reginaldo comprou.

YOLANDA

E ele vai também, é? Eu não tô gostando.

MARIA

Mas é claro que Reginaldo vai, meu filho. E tem mais, o bairro é tão bom que já me disseram até que faz fronteiras com o Paraguai.

YOLANDA

E que bairro é esse?

MARIA

Boca da Mata é o nome do bairro.

YOLANDA

Combina com sua roupa de quadrilha.

MARIA

Pode levantar daí! Levante logo! Eu toco fogo no seu cabelo, hein?

YOLANDA

Tá com despeito, é? Deixe que eu saio. Olhe a classe. Ô nêga, me diga uma coisa, cadê Rege?

MARIA

Rege? O nome dele é José Reginaldo. E você se compreenda, se respeite, que ele é meu devedor e foi ele que me tirou de casa, e desapareça de minha porta.

YOLANDA

Mas você tá nervosa, hein, mulher! Reginaldo só pode tá dormindo de calça jeans com você. Mulher objeto. Sai.

YOLANDA tropeça em MARY STAR, que está deitada no corredor

YOLANDA
Oh! Mulher, você vai ficar aí deitada no corredor fazendo a linha penosa, vai?

MARY STAR

Moço, como tu é bonito, tu é artista, é?

YOLANDA

Sou.

MARY STAR

Ah! Tu trabalha em circo, né?

YOLANDA

É, trabalho. Só se for no circo de Brasília.

MARY STAR

E faz o que lá?

YOLANDA

Ah! Nêga eu faço é coisa: subo rampa, desço rampa, ando de jet ski, trepo com todo mundo lá em Brasília. Mas bom mesmo seria, era se pimpão me desse um ministério, eu ia fazer um rebucetê naquela Brasília lha lha (Canta) "Esse barraco vai cair, eu não me canso de falar ... ",

MARY STAR

A festa tá boa, mas está faltando o principal: música, onde já se viu festa sem música?

YOLANDA

E quem é a cantora?

MARY STAR

Eu mesma, Mary Star.

YOLANDA

Não, não, que eles não gostam de nordestino.

MARY STAR

Não vai me levar não?

YOLANDA
Só se for de fusca. Venha cá, se eu chegar da rua bêbada e você estiver no corredor, eu te piso toda.

MARY STAR

Olha o tamanho do zoio. Êta! Daqui a pouco vai pisar até na minha garganta.

YOLANDA

É o primeiro lugar que eu vou pisar, pra você ficar afônica.

MARY STAR

Quando acabar diz que é artista. Aonde é que fica o respeito do artista pelo artista?

YOLANDA

Aqui ô! Faz gesto mostrando o cú E limpe essa farinha aí, que aqui não é a feira de São Joaquim.

MARY STAR

Vê- i- vi- dê - e - nê - den - viden ... ah! Deixa pra lá. Bate palmas na porta se anunciando.

DONA RAIMUNDA

Fingindo estar em transe. Pode entrar sem cuidado, mãe Raimunda responde tudo:
presente, futuro, e passado...

RAIMUNDINHO

Desarma tia, desarma ...

DONA RAIMUNDA

Ah! É você é, carniça?

MARY STAR

Ô, mulher, não é eu quem tá fedendo não, é o corredor. Se tu souber que passou uma maluca, e um homem do lixo... tá que ninguém mais agüenta passar. Todo mundo que passa fala desse fedor.

DONA RAIMUNDA

E eu sinto, o que é pior.

MARY STAR

Eu vim aqui pra pedir a tú um balde d'água e uma vassoura pra fazer a lavagem do corredor.

DONA RAIMUNDA

Já começou errado, pois água é com a nigrinha lá de cima e eu não sou vassoureira.

MARY STAR

E faz o que com esses olhos fechados, cheia de contas e búzios aí no chão?

DONA RAIMUNDA

E ainda por cima é lerdinha mesmo. Eu sou vidente, minha filha; Raimunda, vidente esotérica, sei tudo: presente, passado, futuro e as próximas encarnações.

MARY STAR

Êta mulher, tu é Deus, é?
DONA RAIMUNDA
Prima!

MARY STAR

Desculpa, mas eu não acredito não. Então bota aí que eu quero saber quando é que eu vou encontrar uma banda, um produtor, um empresário, sair em todas as revistas e televisão. Aparecer...

DONA RAIMUNDA

Quer aparecer, né? Peraí que você vai ver só. Joga os búzios Dá licença meus orixás, xê querê, xê querê bum. Hum, você vai gostar! Tá alegrinha, não tá? E o coração?

MARY STAR

Tum, tum.
DONA RAIMUNDA
Vá ficando alegrinha. Não tá vendo aí tudo espalhadinho desse jeito, é covinha de mandioca que você vai plantar. Já tô vendo tudo, o sol quente, o suor escorrendo e você tuc, tuc, tuc, tuc. Ô, céu! Vai ser a rainha da mandioca.

MARY STAR

Ô, mulher, você olhe direitinho. Você não tá vendo mais nada, não?

DONA RAIMUNDA

Tô vendo a seca chegando e você tum, caindo, morrendo em cima

MARY STAR

Né por nada não, mas da minha maneira de ver, caiu assim tudo espalhado, é que eu vou cantar na Argentina, Cuba, Uruguai, França, Itália, olhe o Alto de Coutos... não é isso mesmo, mulher?

DONA RAIMUNDA

Você vai cantar em lugar nenhum, você vai cantar é nos quintos dos infernos.

MARY STAR

Sabe por que tu tá falando assim? É porque eu sou preta, sou pobre e nordestina, é só por isso.

DONA RAIMUNDA

Adivinhou. Quer pegar meu lugar é? Você vai cantar nos quintos dos infernos, já disse. Isso, se o diabo permitir!

MARY STAR

Quer saber aonde eu vou cantar mesmo?
Canta acompanhada da banda. Todos dançam.
Da África ao Pelô, a Salvador,
Bahia Eu quero o fim da hipocrisia,

Eu quero é liberdade,

Deixe-me lá.
Hoje eu posso falar da burguesia,
Dizer o que antes não podia.
Apesar do preconceito à nossa cor,

Eu sei que os direitos são iguais,
    • por isso que eu peço mais e mais Solução, liberdade, amor e paz.

Cenas da rua. Tabuleiro da BAIANA, loja de GEREBA, bar de NEUZÃO.

GEREBA está conversando com o GUARDA. entra LÚCIA.

LÚCIA

Seu Gereba! Petisco!

GEREBA

Agora que a senhora me aparece dona Lúcia? Desde 10 horas que a senhora saiu pra comprar esse abará. Eu até já almocei, são três horas da tarde.

LÚCIA

E eu com isso, se a Baiana não tem microondas?

GEREBA

Dona Lúcia, já estou cansado da senhora. Já pra porta da loja e fique lá!
LÚCIA sai.

Chega o PINTOR

PINTOR

Dona Lúcia, a blu, blu, blu?

LÚCIA

Stop! Pare! Não venha querendo dizer que isso é língua estrangeira. Isso aí é dialeto, dialeto me lembra África e África na minha vida é um passado milenar.

PINTOR

Não, dona Lúcia. Estou falando em alemão. Que estão exportando todos os moradores do Centro Histórico. Já pensou se a senhora é exportada?

LÚCIA

Ai, Jésus Craist! O Senhor ouviu minhas preces.

PINTOR

Já pensou se a senhora é transportada? Eu não posso realizar o meu sonho que é fazer um painel, nel, nel, com a senhora e colocar ao lado do Cristo Redentor.

LÚCIA

Um painel comigo? E qual é o tema?

PINTOR

Dona Lúcia, eu hoje tomei café com Van Gogh. Menina, o homem se incrisiou, cortou a orelha e comeu broa, comeu, comeu, comeu broa até se acabar.

LÚCIA

Maluco, acho bom que você recupere a sua sanidade mental, que eu não vou fazer propaganda de um biscoito fuleiro como esse: broa. Que é pra depois eu passar no Pelourinho e os moleques ficar me chamando de Maria Bolachona.

PINTOR

Não, dona Lúcia. O tema é sobre a Bahia ia ia.

LÚCIA

Sobre o estado inteiro?

PINTOR

É, é ...

LÚCIA

Eu vou fazer mais sucesso do que Carmen Miranda em Cuba. Ah! Convites para ir a Paris ...

PINTOR
São Cristóvão...

LÚCIA

Londres ...

PINTOR
Beiru, Mata Escura...

LÚCIA

Por que foi mesmo que você me escolheu?

PINTOR

Porque a senhora tem a cara do Pelourinho.

LÚCIA

Indo pra loja
Help! Help! Seu Gereba, o maluco disse que eu tenho a cara do patrimônio em decadência!

GEREBA

Mas será possível, dona Lúcia, que a senhora, ao invés de tá tomando conta da porta da loja, fica aí batendo boca com maluco? Vá logo pra frente antes que eu mande a senhora arrumar caixas no fundo da loja.

LÚCIA volta pra rua

Chega MATIAS

MATIAS

Oi, dona Lúcia, tou aqui com dois umbus grandão, que o gringo mandou a senhora chupar, vai?
Aponta os colhões.

LÚCIA

Negróide! Negróide!

MATIAS sai rindo. LÚCIA senta na beira do palco.

MATIAS chega junto do tabuleiro da BAIANA.

MATIAS

Baiana, você tá sabendo da novidade?

BAIANA

Vá dizendo!

MATIAS

O padre lá da igreja do São Francisco disse que vai fechar a igreja dia de terça -feira, porque tá vindo esse povo todo praqui profanar a igreja dele. Só que ele esqueceu que a galera que vem aqui na bênção não tá nem aí pra igreja, nem pra missa, nem pra nada. Vai é lá pro African Bar, para o Barô dançar o negócio do reggae, tomar o cravinho dele. Tá lá ligando pra igreja, nem missa, rapaz.

BAIANA

Mostrando o jornal Aproveitando, meu filho, dois presuntos, parece os filhos de Faustina.

MATIAS

Ah! Baiana eu não tenho nada com isso não. Eu vou ali, em Neuzão tomar uma, viu?

BAIANA

É, ninguém tem nada com isso, ninguém quer saber.

Chega MAICOLGEL

BAIANA

Hum, hoje não é meu dia!

MAICOLGEL

Harrebô, harrebô!

BAIANA

Axé! Axé! Aproveitando: dois presuntos, meu filho! Parece os filhos de Faustina.

MAICOLGEL

Quero lá saber de presuntos, Baiana! Eu estou preocupado com minha performance.

BAIANA

a que menino?

MAICOLGEL

A minha performance. Você sabe pra que serve isso aqui? Mostra um frasco de remédio.

BAIANA

Pra AIOS.

MAICOLGEL

Isso aqui é remédio de vitiligo. Eu vou ficar branco.

BAIANA

a que menino?

MAICOLGEL

É que eu vou ficar branco da cor de Michael Jackson.

BAIANA

Nunca ouvi falar.

MAICOLGEL

Isso é falta de cultura.

BAIANA

Êpa, não é do meu tempo.

MAICOLGEL

Sabe do mais? Michael Jackson fez plástica para ficar parecido com Diana Ross. Eu vou fazer plástica no nariz. Vai ficar assim fininho, pra cima. Sabe com quem eu vou ficar parecendo?

BAIANA

Pinóquio.

MAICOLGEL

Xuxa! Xuxa Meneghel!

BAIANA

Se compreenda, nêgo. Enquanto a brancada quer virar negão, você tá querendo clarear, ficar branco. XÔ, xô, xô.

A PROFESSORA chega no bar de NEUZÃO.

PROFESSORA

ai, dona Neuza.

NEUZÃO

ai, Professora! Há quanto tempo! Eu queria mesmo bater um plá com a senhora.

PROFESSORA

Olha, Neuzão. Eu estou com esse abaixo assinado que é da Escola Vivaldo Costa Lima.
A senhora precisa ver como está...

NEUZÃO

Nem precisa falar. A senhora sabe que é minha corrente. Pega o papel e assina.

PROFESSORA

Essa dona Neuza é uma pessoa e tanta! Dirige-se a MATIAS Oi, seu Matias.

MATIAS

Oi, Professora.

PROFESSORA

Olha seu Matias, eu estou com esse abaixo-assinado que é da Escola Vivaldo Costa Lima. O senhor precisa ver como está: Toda acabada. Não tem mais condições de ensino. Não tem nem folha de papel para as crianças fazerem os exercícios e nem papel higiênico para as crianças fazer suas necessidades. Então eu vou mandar esse abaixo-assinado amanhã, pra Prefeitura tomar suas providências. E o senhor podia colaborar, assinando aqui.

MATIAS

Só que eu não vou assinar porra nenhuma, porque vocês professores ficam o ano todo fazendo greve. Não tenho culpa se vocês ganham pouco não. Meu filho vai pra escola é pra estudar. O governo paga a senhora é pra dar aula, não é pra senhora ficar no Bar do Reggae tomando cravo com Roupinol e ralando a tcheca. E vai-te pra uma porra, que eu não gosto da senhora.

PROFESSORA

Olha aqui, eu não estou preocupada se o senhor gosta de mim ou não. O que me

preocupa é o senhor falar desse jeito. Eu faço greve! E faço porque é um direito do cidadão. A greve é um instrumento de luta para nós trabalhadores: é com ela que podemos reivindicar melhores condições de trabalho e um salário digno. E se o senhor pensa que estou sendo paga pra estar trabalhando com este abaixo-assinado, eu não estou sendo não! O que eu estou fazendo é pra comunidade. Aliás, há dois meses que não vejo a cara do salário. Hoje, por exemplo, é terça-feira, terça-feira de Bênção, eu poderia estar lá no Bar do Reggae. Só!... Mostra um passo de dança.

MATIAS

É isso que a senhora sabe fazer muito bem.

PROFESSORA

Mas não estou! Eu estou aqui é ouvindo desaforo do senhor que poderia estar unindo forças comigo. O senhor sabe o que o senhor é? Um alienado, um xucro! Um ignorante! Discussão entre os dois, NEUZÃO interfere.

NEUZÃO

Qual é, Matias? Tá querendo brigar com a Pró aqui no meu bar? Calma Professora, eu não gosto de ver a senhora nervosa. Oh! Menina, pega uma Coca-cola pra Pró aí!
Sai abraçando a PROFESSORA. A mão de NEUZÃO desce do ombro e apalpa a bunda da PROFESSORA. A PROFESSORA se afasta.

Entra LORD BLACK

LORD BLACK

Diga aí, Neuzão da Rocha, minha grande amiga!

NEUZÃO

Rapaz, tou abafada! O negócio tá quente aqui dentro!

LORD BLACK

Neuzão, cadê os camarões, o siri catado, a ostra que pedi pra você preparar para a gringada?

NEUZÃO

Só tem pititinga frita hoje, meu velho.

Entra REGINALDO.

LORD BLACK

Assim você quer me sujar com os gringos. Olha quem tá pintando na área, o velho Reginaldo.

REGINALDO

Como vai Lord?
MATIAS

E aí, velho, como vai a força? E o Quantum?

REGINALDO

Tá chegando! Grande Neuzão da Rocha!

NEUZÃO

Pensei que não ia falar com a dona do estabelecimento, agora você está todo metido com esse Quantum. Mas não como nada. Comigo não tem habeas corpos.

REGINALDO

Como eu ia deixar de falar com Neuzão da Rocha? Veio de Juazeiro, como quem não queria nada, abriu um boteco aqui, uma quitanda ali, agora taí, grande Cacete Armado de Neuzão da Rocha! Parabéns, Neuzão, você merece.

NEUZÃO

Qual é Reginaldo? Tá de olho na minha fortuna também, é? É nenhuma, viu, pai?

REGINALDO

Que nada Neuzão, quem é a pivetinha?

NEUZÃO

Aqui é a filha de uma amiga minha lá de Sussuarana que eu estou tomando conta por uns tempos. Ela está me ajudando aqui no bar e vá tirando o olho Reginaldo. Se você se meter com ela a briga é feia.

REGINALDO

Neuzão, o negócio é o seguinte: você sabe que Maria pegou barriga e eu estou precisando de uma garotinha assim pra tomar conta lá de casa dois ou três meses.

NEUZÃO

Não tem negócio, meu irmão, eu já disse. Que cara insistente.

REGINALDO

Só dois, três meses, Neuzão. Chega insinuante no balcão e pega na afilhada de NEUZÃO Não quer ir lá pra casa não, pivetinha?

AFILHADA DE NEUZÃO

Tá me achando com cara de graxeira é Reginaldo? Seu cara de pau. Quer mostrar que é macho, mas, todo mundo aqui sabe que você come o cú do viado.

REGINALDO

Como é?

AFILHADA DE NEUZÃO

É isso mesmo!
Discussão. REGINALDO agride a menina. NEUZÃO pula o balcão pra atacar REGINALDO. Todo mundo que está no bar corre para apartar a briga. Só a PROFESSORA consegue acalmar NEUZÃO.
PROFESSORA

Abraçando NEUZÃO SOU eu, a Professora.

NEUZÃO

Ah! É a Professora, já estou calma. Abraça a PROFESSORA e volta pra trás do balcão.

Loja de GEREBA.

GUARDA

Pois é, seu Gereba. Aquela grana que eu tava lhe devendo. Tou atrasado no aluguel da casa, tenho 5 filhos pra criar... De maneira que...

GEREBA

Tá bom, tá bom, a gente sabe que vocês são fodidos mesmos, ganham mal, não é? Vamos deixar pra lá. Isso aí você me paga com outras obrigações. Vocês são que nem papel higiênico: quando não tão enrolado, tão na merda.

GUARDA

Inclusive eu já fiz um serviço pro senhor. Aqueles pivetes que ficavam aqui perturbando a loja do senhor, eu já dei um jeito neles.

GEREBA

Quer dizer que eles não vão mais voltar e ficar por aí perturbando?

GUARDA

Impossível!

GEREBA

Mas impossível por que?

GUARDA

Foi definitivo.

GEREBA

Meio culpado É, de qualquer jeito eles tavam por aí mesmo na rua... Não tem pai...
Depois foi melhor assim, eles iam crescer, criar mais problemas pra você, pra mim. Foi melhor assim. Se recompondo Não vê que confusão fica dia de terça-feira? Isso aqui fica um inferno! Há mais de quarenta anos que eu trabalho aqui, e a bênção era uma coisa linda de se ver. Era só a primeira e a última do mês. Agora tem bênção toda terça-feira.

GUARDA

Coisa de negro vagabundo, seu Gereba, que não tem o que fazer. Essa festa, seu Gereba, deveria ser de mês em mês e de preferência no domingo, porque eu estava longe dessa desgraça e o senhor com a sua loja fechada.

GEREBA

Boa idéia, mas eu tenho uma melhor: deveria ser de ano em ano! Não vê as festas
populares? Festa do Bonfim, aquela beleza... e é de ano em ano. Todo mundo vai, se diverte. Mas não, toda terça-feira é essa bagunça. Os meninos de fora se juntam com os daqui... aí matam, roubam, estrupam, pintam miséria. Você não vê os filhos daquela que se diz dona daquele cortiço, aí ao lado? Ela tem dois filhos que não são gente, é o satanás em figura.

GUARDA

Sei quem é...

GEREBA

Eu já disse a ela pra tomar uma providência, senão eu vou tomar as minhas.

GUARDA

Fique tranqüilo, as providências já foram tomadas - foram eles.

GEREBA

Eles o que? O que eu disse a você? O que foi que a'gente combinou? pra não pegar os da área. Os da área a gente dá um jeito, fala com o pai, com o tio. Se a comunidade sabe disso, se esse povo do Olodum sabe disso, eu tou fodido, eu tou fodido.

GUARDA

Olha aqui seu Gereba, eu faço esse serviço há mais de dez anos e muito bem feito.

GEREBA

Bem feito desse jeito?

GUARDA

Era ou não era pra limpar a área?

LORD BLACK
Puxa um samba
Te pego, te amasso, te estico. Se remexe toda ô ô ô.
Qual é a sua, meu amor?

Minha paixão, meu bem querer...

REGINALDO dança com GEGE, chega a mulher de REGINALDO e para o samba.

Manda REGINALDO pra casa.

TODOS

Vai apanhar, vai apanhar.
Vai apanhar, vai apanhar, vai apanhar ....

LORD BLACK

Ih! Professora! Esqueci.

PROFESSORA

De que, Lord?

LORD BLACK

    • que apareceram duas crianças mortas lá em baixo, e estas crianças estão fardadas. Estão achando que são alunos da senhora e estão esperando a senhora lá em baixo pra identificar os corpos.

PROFESSORA

Eu vou lá, seu Lord Black, eu vou lá.
Música e coreografia
A Banda do Olodum.
Arrasou na sexta-feira
Com suingue maravilha
Na subida da ladeira

Eu vou, eu vou

Dançar lá no Pelô
Eu vou, eu vou
No Olodum de Salvador...
Ajoelhou, tem que rezar;

Ajoelhou, tem que rezar...

No cortiço

MARY STAR dançando no corredor

DONA JOANA

Que festejo é esse?

MARY STAR

Ah! Mulher, eu estou ensaiando a coreografia do show.

DONA JOANA

Quer dizer que a senhora continua empestiando o corredor do meu prédio, né?

MARY STAR

Chi, esse prédio é teu, é?

DONA JOANA

    • meu, sim senhora, meu e do meu marido. Chegamos aqui primeiro. Isso aqui estava tudo abandonado, caindo aos pedaços. Na entrada só tinha pedras e blocos; Mário chegou aqui, chamou esse povo todo pra vir ajudar...

MARY STAR

Todo mundo veio, foi? Foi um multirão danado!

DONA JOANA

Todo mundo nada, nêga. O homem fez tudo sozinho. Eu me lembro como hoje. Era 17 de dezembro, chovia, mas chovia tanto... E o homem tirando as pedras. O homem tirava os blocos e a chuva caindo. Mas não foi nada, quando acabou, os desocupados todos passaram pra dentro. Em seguida vieram uns homens se dizendo da Prefeitura querendo me tirar daqui. Mas eu sou uma mulher retada, nota mil, não saí e não saio. Só se pegar fogo. Aí não tem jeito mesmo, né?

MARY STAR

Êta mulher, vira essa boca pra lá. A única coisa que vai pegar fogo e incendiar o Pelourinho é eu e minha voz. Ave Maria, que emoção! Tu contando a história do teu prédio me deu uma idéia. Prédio alto?

DONA JOANA

Não me lembra nada.

MARY STAR

Trio elétrico! Eu cantando e todo mundo comigo, na palminha da mão. Pá! Pá! Que violência é essa aí, meu bródi? É você mesmo, de verde, seu ecológico. Vou entregar você à tia. Hei, meu pai! Aqui é a Bahia, é mar, é sol, é cor, espelho da alegria. Se prante, viu? Assim não dá, com violência eu mudo o ritmo. Seu marido carregando os
broco?

DONA JOANA

Ainda não alcancei a compreensão.

MARY STAR

Broco afro.

DONA JOANA

Não gosto. Faço parte da Igreja Voltará, aqui do lado. Inclusive estou purificada, recebi o fôlego de Deus junto com Nelson Ned na Fonte Nova.

MARY STAR

Ave Maria, mulher, eu é que perdi o fôlego! A senhora, morando no Pelourinho não gosta de broco afro? É a coisa mais linda de se ver o broco afro quando chega na avenida, carro todo enfeitado de palha. A rainha vem feito doida na frente, dançando com um torso que não tem mais tamanho na cabeça. Atrás vem os meninos da banda ba-ba-bum. Ave Maria que emoção!

DONA JOANA

Gostei da idéia. Amei de paixão. Estou começando a sentir esta emoção da qual você tanto fala.

MARY STAR

Sentir a emoção é o primeiro passo, mas você disse que gostou e fica de braços cruzados.

DONA JOANA

Eu não sei, minha filha, não sei como se faz, não aprendi ainda o macete.

MARY STAR

Dizia logo! Preste atenção! Você consegue o show e diz: é aqui, é lá e acolá. Eu vou, faço os três shows, nós racha o dinheiro e fica as duas milionárias. Mulher, deixa a carcaça desse prédio e vem comigo pro sucesso! Tudo certo?

DONA JOANA

Tudo certo, nêga. Tudo certinho. Mas antes eu vou chamar a carrocinha pra vim lhe tirar daqui. Vou na farmácia comprar um lactopurga. Porque não é possível: a mulher com um fedor miserável desse, contando histórias no corredor do meu prédio. Não tem vivente que suporte um negócio desse. Afastando-se para a porta de entrada.

Entra PEIXE-FRITO e se esbarra em DONA JOANA.

DONA JOANA

Ei, você aí, não viu os meus filhos por aí, não?

PEIXE FRITO

Filhos! Filhos! Eu sei muito bem aonde eles estão! Eles estão no meu caralho! Olha
aqui! Matei meu pai, minha mãe, os meus filhos e eu sou mais de te matar.

DONA JOANA

Ah! Meu Deus, a morte no corredor do meu prédio! Corre de volta para o quarto.

PEIXE FRITO
E aí, rapaz. Vim buscar o bagulho que você disse que ia me dar, lá na quadra do Olodum.

BRIGADEIRO

Calma, calma, fumacê.

PEIXE FRITO

Fumacê, uma porra! Peixe-Frito, Peixe-Frito! Eu quero o bagulho.

BRIGADEIRO

Fala baixo. Se o Neguinho do Samba escuta... Eu larguei essa vida. Agora tô tocando na Banda...

PEIXE FRITO

Olha aqui, eu quero que você, Neguinho do Samba, vá pro cú do mundo. Rapaz eu quero o bagulho ou então me dá o cigarro! Hollywood, Plaza, Belmonte, Everest cigarro, cigarro!

BRIGADEIRO

Calma Beija a cabeça dele, você quer cigarro Bate palmas na porta do quarto de
YOLANDA.

YOLANDA

De dentro É moleque? Pode entrar.

BRIGADEIRO empurra PEIXE FRITO pra dentro do quarto. Este se esbarra em YOLANDA, que cai do banco com ele por cima.

YOLANDA

O que é isso?

PEIXE FRITO

Cigarro! Eu quero cigarro!

YOLANDA

Tem cigarro não.

PEIXE FRITO

Olha aqui sua bicha fodida, eu quero cigarro. Eu matei meu pai, meus filhos! Segura
YOLANDA.

YOLANDA

Nossa menino! Que força! Eu dou o cigarro. Mas antes você tem que me mostrar o charuto. Ou então vá embora que eu não gosto de bagana.

PEIXE FRITO

Cigarro!

YOLANDA

Charuto.
De costas para o público, PEIXE FRITO abre a braguilha

YOLANDA

Olhando Nossa! Valha-me Deus!
Começam a namorar.

MARIA e REGINALDO entram no cortiço brigando.

MARIA

Não me interessa, Reginaldo, não me interessa. Você saiu daqui dizendo que ia resolver o problema do táxi; eu peguei você com viado em roda de samba, Reginaldo.

REGINALDO

Maria, não é nada disso, eu fui resolver o problema do táxi...

MARIA

Que nada, Reginaldo. É por isso que eu digo: eu tenho que ir pra Boca da Mata de qualquer jeito. Ainda mais que eu vi você e o tal do Yolanda, os dois juntinhos. Ele veio aqui na minha porta e lhe chamou de Rege, Reginaldo. Você, um pai de família, não se dá o respeito!

REGINALDO

Maria é boato. Maria, você vai acreditar no que o povo fala, Maria?

MARIA

Eu, se fosse você, ia resolver seu problema.

REGINALDO

Tá bom. Eu vou lá.

MARIA

Reginaldo, você já viu pai de família sair de casa pra ir resolver problema em casa de viado?

REGINALDO

Eu vou. Fique aí, Maria.

REGINALDO para na porta do quarto enquanto PEIXE FRITO sai do quarto de YOLANDA.

YOLANDA

Iiih, menino, abusei. Agora vai, ousado. Da próxima vez traga seu pai. Eu adoro um coroa.

REGINALDO
Seu Genivaldo, que história é essa de você ir pra porta da minha mulher fazer fuxico, rapaz?

YOLANDA

Eu, Rege? Eu?

REGINALDO

Não, minha mãe! Olha aqui, rapaz, eu vou te avisar: que seja essa a primeira e a última vez que você vai pra minha porta fazer fuxico de mim com minha mulher.

YOLANDA

Olha, Reginaldo, eu não vou me dá. Vai ser o ó.

REGINALDO

Vai ser o ó se você voltar lá de novo, sua bicha.

YOLANDA

O que é, Reginaldo? Tá pensando que eu tenho medo de você? Eu não tenho, não. Eu sou uma mulher emancipada. Tenho peito! Se você vier pra cá com sua encheção de saco, eu pego uma gilete, faço uma buceta na sua cara e um cú na cara de sua mulher.

REGINALDO

Ah! Isso se antes eu não arrancar seus culhões pelo cú.

YOLANDA

Sabe por que? Porque você e seu irmão quando chegam bêbado da rua, travado, dormem aonde? Batem ovo aonde. É aqui olhe! (Mostra a bunda)

REGINALDO

O quê? Sua bicha esclerosada!
Brigam, xingando, todo mundo sai pra ver, DONA MARIA chega com PISSILENE bêbada.

DONA MARIA
Para, para com isso! Que fechação é essa aqui dentro? Fica Reginaldo e a bicha fazendo muvuca aqui dentro, que putaria! Dá licença seu Severino que eu vou dar banho em
Pissi aqui.

SEU SEVERINO

Dona Maria, a senhora pode ficar aí no corredor segurando a Pissi e reclamando com o viado, porque não tem água.

DONA MARIA

Não acredito.

SEU SEVERINO

Então, entre!

DONA MARIA

Vou falar com a mulher.

DONA RAIMUNDA

Então vambora todo mundo.
Todos batem palma na porta de DONA JOANA.

DONA JOANA
Que invasão é essa? Parece até a polícia, só falta me chacinar!

DONA RAIMUNDA

Sabe o que é, nigrinha? Hoje é terça-feira, tá todo mundo doido pra cair no reggae e você, com sua pirraça, trancou de novo a transmissão.

DONA JOANA

Sabe o que é, minha filha? O recibo da água já venceu e ninguém tomou providência do pagamento.

SEU SEVERINO

Dá licença, DONA JUJU do meu coração! Vamos fazer um trato: a senhora abre a transmissão, eu entro, tomo banho, saio, a senhora fecha e fica tudo certo. Depois nós se conversa, que a senhora deve ter muita história pra contar debaixo dos caracóis de seus cabelos, não é, mulher pequena?

DONA JOANA

Tá certo, seu Severino. O senhor merece. O senhor é trabalhador e poeta também.

MARY STAR

Não. Peraí. Falou em trabalho, falou comigo. Eu também sou trabalhadora e preciso ir pra quadra. A festa só começa quando eu chego, porque só eu sei cantar os reggae de Jimmy Cliff.

DONA RAIMUNDA

Abaixa os braços, minha nêga, senão não tem quem guente.

DONA MARIA
Dá licença, meu povo, eu quero falar com essa víbora. Mulher, você sabe que eu trabalho de segunda à domingo, sou independente e pago isso aqui. Hoje eu tirei o dia pra ir a bênção, pra ralar a tcheca, você fecha a transmissão? Está pensando o que? Quer dizer que é só seu Severino e seu Reginaldo que paga?

DONA RAIMUNDA

Vestiu calça tá pra ela.

DONA MARIA

Eu sei muito bem porque! Você está dentro deste vestidinho pensando que vai conquistar a todos, não é? Severino e Reginaldo são os melhorzinhos do pedaço. E o que é mais interessante e me faz ficar aborrecida foram os seus filhos que, foram ontem pra escola e até hoje não voltaram e você não tomou nenhuma providência. E vamos logo que eu quero é tomar banho.

DONA. JOANA

O que é que você está sentindo com esse cabelo, tomando parte da minha vida? Aliás, eu sei muito bem o que é isso, tá de olho no meu patrimônio, na minha indumentária própria e particular. Mas não venha não, que aqui você não vai achar nada, sem chance!

REGINALDO

Pessoal, não é assim que se resolve as coisas. Tudo tem que ser na diplomacia.

DONA JOANA

É isso mesmo seu Reginaldo. Deixe todo mundo aí e vamos conversar.

MARIA

Não vai conversar coisa nenhuma! Quer conversar? Venha conversar comigo!
Reginaldo passe na minha frente. Para YOLANDA E você não se meta!

SEU SEVERINO

Dona Juju, se a senhora quer fazer um bem pra humanidade ligue logo essa transmissão pra essa criatura tomar banho. Referindo-se a MARY STAR.

DONA JOANA

Em consideração a seu Severino e a seu Reginaldo, eu vou abrir.

Todos vão pra fila do banheiro, MARY STAR toma banho primeiro.

DONA JOANA

Eu vou abrir e vou fechar. Vou cuspir na areia e quando secar eu vou fechar.
Fica andando no corredor de um lado para o outro.

DONA RAIMUNDA sai do banho e se encontra com DONA JOANA no corredor.

DONA JOANA

Tá fresca, nêga?
DONA RAIMUNDA

Tou fresquíssima.

DONA JOANA

Você não quer fazer um favor pra mim?

DONA RAIMUNDA

Não devia, mas como eu não gosto de dever a fodido, vamos lá na minha tenda.

DONA JOANA

Você sabe que minhas crianças estão desaparecidas, queria que você desse uma olhada aí nos seus búzios. Faça esse favor para sua vizinha.

DONA RAIMUNDA começa a pegar os búzios. Ela não consegue pegá-los, como se queimasse.

DONA RAIMUNDA

Não posso com isso não, minha filha, meus búzios estão uma brasa. Tou com um troço ruim por dentro. E o que é isso assim no seu vestido? Era branco agora tou vendo ele vermelho, lavado de sangue. E os cabelos? Estão todos emaranhados. Sai daqui! Todos vocês! O que é isso? Será erê?

Possuída, DONA RAIMUNDA psicografa um poema que joga pra DONA JOANA.

DONA JOANA

Que isso? É da porta da esperança, é?

LORD BLACK vem chegando e cantando

LORD BLACK
A Banda do Olodum abalou ...

DONA JOANA

Venha cá, meu filho, que festival é esse no corredor do meu prédio?

LORD BLACK

Qual é a sua, dona Joana?

DONA JOANA

Meu filho, leia isso aqui pra mim, que esqueci meus óculos lá em cima.

LORD BLACK

Qual é a de mesmo dona Joana, tá me achando com cara de Santa Luzia, pra dar luz a cego? Leia a senhora.

DONA JOANA

Leia pra mim, né!

LORD BLACK

Tá bom, eu vou fazer essa caridade.
Lê

Dez negrinhos numa cela,

Um deles não mais se move.
Manhã cedinho eles contam
E só tem nove.

Nove negrinhos fugiram.

Um deles o mais afoito.
Lascou-se, os guardas o pegaram.

Restaram oito.

Oito negrinhos trabalham,

De revólver e canivete.
Roupa cáqui vem chegando,
Correram sete.

Sete negrinhos seguiam

Pela rua de vocês.
Um pai chamou a polícia,
Viraram seis.

Seis negrinhos dão balanço

Anel, relógio, brinco.
Houve erro na partilha,
Sobraram cinco.

Cinco negrinhos de olho

Na saída do teatro.
Um vacilou, deu bobeira,
Fugiram quatro.

Quatro negrinhos trombando,

Todos quatro de uma vez.
Um o transeunte agarra,
Mas não os três.



Três negrinhos batalhando:

Feijão, farinha, arroz.
Um deu-se mal,
A comida dava pra dois.

Dois negrinhos se embebedam
De Brahma, cachaça, rum.

Confusão, briga, navalha
Fica esse um.

Um negrinho vai se embora,

Se mistura à multidão.
Por trás desse derradeiro,

Vem um milhão.

LORD BLACK

Iiih, dona. Joana, essa história de neguinho não é pra mim não. Eu sou meio puxado na cor. Vá ficando com o seu balaio de gato.

LORD BLACK sai. A PROFESSORA chega correndo.

PROFESSORA

Dona Joana, dona Joana! Eu tenho uma notícia pra dar para a senhora - seus filhos ...

DONA JOANA

Ó paí, ó!



Música

Nesse mundo imundo que estamos,

Todas as privações que passamos,
É por falta de amor. (bis)

Se temos que pagar pra nascer,

Dá duro pra viver tão preocupado,
E se morrer,
Tem que pagar pra ser enterrado.

O Olodum protesta ê,

O Olodum protesta. (bis)

A usura toma conta dos homens,

E o povo morrendo de fome,
    • um atentado ao pudor
.
Falta casa, falta pão, falta escola,
Os políticos pisando na bola.
Eles querem nos manter desinformados,
Oh! Meu deus, que país desgovernado.

O Olodum protesta ê,

O Olodum protesta. (bis)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
