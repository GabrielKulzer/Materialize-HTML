
/*Criando as validações */


/*verificando se o campo foi preenchido*/
		/* Função Validar */
		function validar() {
			// pegando o valor do nome pelos names
			var nome = document.getElementById("nome");
			var sobrenome = document.getElementById("sobrenome");
			var email = document.getElementById("email");
			var mensagem = document.getElementById("mensagem");

			// verificar se o nome está vazio
			if (nome.value == "") {
				alert("Por favor, digite seu nome");

				// Deixa o input com o focus
				document.form.nome.focus();
				// retorna a função e não olha as outras linhas
				return false;
			}
			if (sobrenome.value == "") {
				alert("Por favor, digite seu sobrenome");
				document.form.sobrenome.focus();
				return false;
			}
			if (email.value == "") {
				alert("Por favor, digite seu email");
				document.form.email.focus();
				return false;
			}
			if (mensagem.value == "") {
				alert("Por favor, digite sua mensagem");
				document.form.mensagem.focus();
				return false;
			}
		}
		function enviar() {
		/* criando variáveis para armazenar os dados e mostra-los em um alert */
		/* buscando o id de cada campo e retornando o valor em um alert  */
		var nome = document.getElementById("nome").value;
		var email = document.getElementById("email").value;
		var sobrenome = document.getElementById("sobrenome").value;
		var mensagem = document.getElementById("mensagem").value;
		alert('Obrigado sr(a) ' + nome + ', seus dados foram encaminhados com sucesso!');

		alert('DADOS\nNome: '+nome+'\nSobrenome: '+sobrenome+'\nEmail: '+email+'\nMensagem: '+mensagem);
	 }


// Exemplos de Estruturas Condicionais - realizam um teste entre uma ou duas ou mais
// condições.

/*

    if(media >= 6) {
        "Aprovado!"
    } else {
        "Reprovado!"
    }



    if - else: se e senao

    switch - case: escolha e caso

    ---------------------------------------------------------------

    Operadores Matemáticos: +,-, /, *
    Operadores Relacionais:  < menor
                             > maior
                             <= menor ou igual
                             >= maior ou igual
                             == igual a
                             != diferente de

    Operadores Lógicos:
                            && - e - afirmação
                            || - ou
                            ! - não

     if(media >= 4) && (media <= 5.9){

     }


*/
