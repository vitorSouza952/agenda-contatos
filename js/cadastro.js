const form = document.querySelector("#form");
const nome = document.querySelector("#nome");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const observacoes = document.querySelector("#observacoes");
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

const abrirModal = (msg) => {
	[fundoModal, modal].forEach((el) => {
		el.classList.remove("esconder");
	});

	txtModal.textContent = msg;
};

const limparCampo = (campo) => {
	campo.value = "";
};

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		fecharModal();
	}
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const valNome = nome.value.trim();
	const valTel = tel.value.trim();
	const valEmail = email.value.trim();
	const valObservacoes = observacoes.value.trim();
	const telRegExp = /^\(\d{2}\)\d{5}-\d{4}$/;
	const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;

	if (!valNome || valNome.length > 50) {
		abrirModal("Erro: O nome do contato é obrigatório e deve conter até 50 caracteres.");
		limparCampo(nome);
		return;
	}

	if (!telRegExp.test(valTel)) {
		abrirModal("Erro: O telefone do contato é obrigatório e deve estar no formato correto: (XX)XXXXX-XXXX - X = Números.");
		limparCampo(tel);
		return;
	}

	if (!emailRegExp.test(valEmail) || valEmail.length > 80) {
		abrirModal("Erro: O e-mail do contato é obrigatório, deve conter até 80 caracteres e estar no formato mínimo correto: nome@exemplo.br.");
		limparCampo(email);
		return;
	}

	if (valObservacoes.length > 200) {
		abrirModal("Erro: As observações do contato devem conter até 200 caracteres.");
		limparCampo(observacoes);
		return;
	}

	form.submit();
});

[fundoModal, botaoFecharModal].forEach((el) => {
	el.addEventListener("click", fecharModal);
});