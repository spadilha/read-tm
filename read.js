function reddenPage() {
	console.log("This is a popup!");

	document
		.querySelectorAll(
			'[data-premium], [data-google-query-id], [id="popup-_*"], [id="denakop-auto-under-*"], .ad-single-container, #commentArea, .pp-paywall__container, .pp-paywall__background, iframe'
		)
		.forEach((el) => el.remove());
	document.querySelectorAll(".tbl-read-more-btn").forEach((el) => el.click());
	document.body.classList.remove("pp-paywall");
}

chrome.action.onClicked.addListener((tab) => {
	if (!tab.url.includes("chrome://")) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: reddenPage,
		});
	}
});
