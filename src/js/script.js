// Local Data
import data from '../../data';

// API Data
/* require('dotenv').config();
const apiKey = process.env.API_KEY;

const fetchJSON = async () => {
	const response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
	const json = await response.json();

	// JSON or Local data
	return json;
};

fetchJSON().then((json) => {
	console.log(json);
	const emojis = json.map((item) => item);

	renderEmojiList(emojis);
}); */

/**
 * Render Emoji List
 * @param {*} emojis
 */

const renderEmojiList = (emojis) => {
	// console.log(emojis.slice(0, 10));
	const emojiListWrapper = document.querySelector('.emoji-list-wrapper');

	const emojiCategory = [...new Set(emojis.map((item) => item.group))];
	const categoryBasedEmoji = emojiCategory.map((cat) => {
		return { [cat]: [...emojis.filter((item) => item.group === cat)] };
	});

	const html = categoryBasedEmoji
		.map((item) => {
			return [
				Object.keys(item)
					.map((value) => {
						return `<div class="emoji-list-category mb-4">
                            <h6 class="text-muted mb-3 fs-5">${value.replace(/-/g, ' ')}</h6>`;
					})
					.join(''),
				Object.values(item)
					.map((emoji) => {
						return `<div class="emoji-list row row-cols-auto g-1">${emoji
							.map((n) => {
								// console.log(n.character);
								return `<div class="col"><span title="${n.slug.replace(
									/-/g,
									' '
								)}" class="emoji d-inline-flex align-items-center justify-content-center">${n.character}</span></div>`;
							})
							.join('')}</div></div>`;
					})
					.join(''),
			].join('');
		})
		.join('');

	emojiListWrapper.innerHTML = `${html}`;
};
renderEmojiList(data);

/**
 * Emoji as favicon
 */

window.addEventListener('DOMContentLoaded', () => {
	// console.log('DOM fully loaded and parsed');

	const linkForFavicon = document.querySelector(`head > link[rel='icon']`);
	const faviconTemplate = (string, icon) => {
		return `
          <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
            <text y=%22.9em%22 font-size=%2290%22>
              ${icon}
            </text>
          </svg>
        `.trim();
	};

	const buttons = document.querySelectorAll(`.emoji-list span.emoji`);
	// console.log(buttons);
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const newFavicon = faviconTemplate`${button.innerText}`;
			linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);

			const copylinkTag = `<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${button.innerText}</text></svg>" />`;

			copyToClipboard(copylinkTag);
		});
	});
});

/**
 * Showing tooltip
 * @param {*} targetEl
 * @param {*} text
 */
const showToolTip = (targetEl, text = 'Copied!') => {
	const toolTip = `<span class=“tutor-tooltip tooltip-wrap”><span class=“tooltip-txt tooltip-top”>${text}</span></span>`;
	targetEl.insertAdjacentHTML('afterbegin', toolTip);
	setTimeout(() => {
		document.querySelector('.tutor-tooltip').remove();
	}, 500);
};

/**
 * copy to clipboard
 * @param {*} text
 */
const copyToClipboard = async (text) => {
	if (text) {
		await navigator.clipboard.writeText(text);
		const clipboardTxt = await navigator.clipboard.readText();
		// console.log(clipboardTxt);
		// showToolTip(e.target, 'Copied');
	}
};

/**
 * Scroll To Top
 */
const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	});
};

document.querySelector('.scroll-to-top-btn').onclick = scrollToTop;

/**
 * Copyright Year
 */
document.querySelector('.copy-right-year').innerText = new Date().getFullYear();
