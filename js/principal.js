const botaoAbrirNavbarLateral = document.querySelector("#botao-abrir-navbar-lateral");
const fundoNavbarLateral = document.querySelector("#fundo-navbar-lateral");
const navbarLateral = document.querySelector("#navbar-lateral");
const botaoFecharNavbarLateral = document.querySelector("#botao-fechar-navbar-lateral");

const fecharNavbarLateral = () => {
	[fundoNavbarLateral, navbarLateral].forEach((el) => {
		el.classList.add("esconder");
	});
};

const abrirNavbarLateral = () => {
	[fundoNavbarLateral, navbarLateral].forEach((el) => {
		el.classList.remove("esconder");
	});
};

window.addEventListener("pageshow", fecharNavbarLateral);

window.addEventListener("resize", () => {
	if (window.innerWidth >= 576) {
		fecharNavbarLateral();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		fecharNavbarLateral();
	}
});

botaoAbrirNavbarLateral.addEventListener("click", abrirNavbarLateral);

[fundoNavbarLateral, botaoFecharNavbarLateral].forEach((el) => {
	el.addEventListener("click", fecharNavbarLateral);
});