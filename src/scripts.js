const apiKey = require('./config');

function fetchActivity() {
	fetch('/activity')
		.then(response => response.json())
		.then(data => {
			const activity = data.activity;
			translateActivity(activity)
				.then(translatedActivity => {
					document.getElementById('activityText').textContent = translatedActivity
					document.getElementById('activityBtn').textContent = 'Nova Atividade'
				})
				.catch(error => {
					console.error(error);
					document.getElementById('activityText').textContent = 'Erro ao traduzir atividade :/' + error
				});
		})
		.catch(error => {
			console.error(error);
			alert('Error fetching activity');
		});
}

function fetchFreeActivity() {
	fetch('/freeActivity')
		.then(response => response.json())
		.then(data => {
			const freeActivity = data.activity;
			translateActivity(freeActivity)
				.then(translatedActivity => {
					document.getElementById('freeActivityText').textContent = translatedActivity
					document.getElementById('freeActivityBtn').textContent = 'Outra Coisa'
				})
				.catch(error => {
					console.error(error);
					document.getElementById('freeActivityText').textContent = 'Erro ao traduzir atividade :/' + error;
				});
		})
		.catch(error => {
			console.error(error);
			alert('Error fetching activity');
		});
}

function fetchQuote() {
	fetch('/fetchQuote')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const quote = data.quote
			const author = data.author
			translateActivity(quote)
				.then(translatedActivity => {
					document.getElementById('quoteText').textContent = translatedActivity
					document.getElementById('quoteBtn').textContent = 'Nova Citação'
					translateActivity(quote)
						.then(translatedActivity => {
							document.getElementById('quoteText').textContent = translatedActivity;
							document.getElementById('quoteBtn').textContent = 'Nova Citação';
							document.getElementById('quoteAuthor').textContent = author
						})
				})
				.catch(error => {
					console.error(error);
					document.getElementById('quoteText').textContent = 'Erro ao traduzir citação :/' + error;
				});
		})
		.catch(error => {
			console.error(error);
			alert('Erro ao buscar citação');
		});
}

async function translateActivity(text) {
	const targetLanguage = 'pt';
	const apiKey = apiKey; // Replace with your Google Translate API key

	const translationResponse = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			q: text,
			target: targetLanguage,
		}),
	});

	const translationData = await translationResponse.json();
	const translatedText = translationData.data.translations[0].translatedText;

	return translatedText;
}