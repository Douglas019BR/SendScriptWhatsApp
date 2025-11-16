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
Hello, it's me
I was wondering if after all these years you'd like to meet
To go over everything
They say that time's supposed to heal ya, but I ain't done much healing
Hello, can you hear me?
I'm in California dreaming about who we used to be
When we were younger and free
I've forgotten how it felt before the world fell at our feet
There's such a difference between us
And a million miles
Hello from the other side
I must've called a thousand times
To tell you I'm sorry for everything that I've done
But when I call, you never seem to be home
Hello from the outside
At least I can say that I've tried
To tell you I'm sorry for breaking your heart
But it don't matter, it clearly doesn't tear you apart anymore
Hello, how are you?
It's so typical of me to talk about myself, I'm sorry
I hope that you're well
Did you ever make it out of that town where nothing ever happened?
It's no secret that the both of us
Are running out of time
So hello from the other side (other side)
I must've called a thousand times (thousand times)
To tell you I'm sorry for everything that I've done
But when I call, you never seem to be home
Hello from the outside (outside)
At least I can say that I've tried (I've tried)
To tell you I'm sorry for breaking your heart
But it don't matter, it clearly doesn't tear you apart anymore
Ooh (lows, lows, lows, lows), anymore
(Highs, highs, highs, highs)
Ooh (lows, lows, lows, lows), anymore
(Highs, highs, highs, highs)
Ooh (lows, lows, lows, lows), anymore
(Highs, highs, highs, highs)
Anymore (lows, lows, lows, lows)
Hello from the other side (other side)
I must've called a thousand times (thousand times)
To tell you I'm sorry for everything that I've done
But when I call, you never seem to be home
Hello from the outside (outside)
At least I can say that I've tried (I've tried)
To tell you I'm sorry for breaking your heart
But it don't matter, it clearly doesn't tear you apart anymore
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)