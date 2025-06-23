const fundoModal = document.querySelector("#fundo-modal");
const modal = document.querySelector("#modal");
const txtModal = document.querySelector("#txt-modal");
const botaoFecharModal = document.querySelector("#botao-fechar-modal");

const fecharModal = () => {
	[fundoModal, modal].forEach((el) => {
		el.classList.add("esconder");
	});

	txtModal.textContent = "";
};

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		fecharModal();
	}
});

[fundoModal, botaoFecharModal].forEach((el) => {
	el.addEventListener("click", fecharModal);
});