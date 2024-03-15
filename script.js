const appState = {
	isMenuOpen: false,
};

const hamburgerEl = document.querySelector(".header__hamburger");
const navEl = document.querySelector(".header__nav");

const closeSvg = `
<i>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
    </svg>
</i>
`;

const openSvg = `
<i>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" d="M3 17h18M3 12h18M3 7h18" />
    </svg>
</i>
`;

hamburgerEl.addEventListener("click", () => {
	switch (appState.isMenuOpen) {
		case false:
			hamburgerEl.innerHTML = closeSvg;
			navEl.classList.add("active");
			appState.isMenuOpen = true;
			break;

		case true:
			hamburgerEl.innerHTML = openSvg;
			navEl.classList.remove("active");
			appState.isMenuOpen = false;
			break;
	}
});
