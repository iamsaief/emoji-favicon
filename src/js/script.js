require('dotenv').config();
// Use the API_KEY
const apiKey = process.env.API_KEY;

const fetchJSON = async () => {
	const response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
	const json = await response.json();

	return json;
};

fetchJSON().then((data) => {
	const emojis = data.map((item) => item.character).slice(0, 100);

	renderEmojiList(emojis);
});

const renderEmojiList = (emojis) => {
	const emojiListWrapper = document.querySelector('.emoji-list-wrapper');

	// const emoji = emojis.trim();

	console.log(emojis.join(''));

	emojiListWrapper.innerHTML = `
        <div>${emojis.join('')}</div>
    `;
};
