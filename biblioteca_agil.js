const acervo = [
    {
        numero: 1,
        titulo: "Como fazer sentido e bater o martelo",
        autor: "Alexandro Aolchique",
        ano: 2017,
        status: "Disponível",
        emprestado: ""
    },
    {
        numero: 2,
        titulo: "Sejamos todos feministas",
        autor: "Chimamanda Ngozi Adichie",
        ano: 2015,
        status: "Disponível",
        emprestado: ""
    },
    {
        numero: 3,
        titulo: "Basquete 101",
        autor: "Hortência Marcari",
        ano: 2010,
        status: "Disponível",
        emprestado: ""
    }
];

const menu = "Bem-vinde ao sistema da Biblioteca Ágil! \n\nDigite o número da operação desejada: \n 1 - Retirar um livro; \n 2 - Devolver um livro; \n 3 - Doar um livro; \n 0 - Sair.";

let opcao = 1;
let opcaoLivro = 0;
let numeroDoacao = 4;

for(; ;){
console.log(menu);
opcao = prompt("");
  
//RETIRAR LIVRO
if(opcao==1){
console.log("\nDigite o número referente ao livro que deseja retirar de acordo com o acervo abaixo:\n");
  for (let valor of acervo){
    console.log("Número: " + valor.numero + "\nTítulo: " + valor.titulo + "\nAutor(a): " + valor.autor + "\nAno: " + valor.ano + "\nStatus: " + valor.status + "\nEmprestado para: " + valor.emprestado + "\n");
  }

opcaoLivro = prompt("Número: ");  
  for (let valor of acervo){
    if (valor.numero==opcaoLivro){
      if(valor.status=="Disponível"){
        console.log("\nO livro está disponível. Por favor, digite o seu nome para finalização do empréstimo:")
        valor.emprestado = prompt("");
        valor.status = "Indisponível";
        console.log("\nEmpréstimo finalizado com sucesso.\n\n");
      }else if(valor.status =="Indisponível"){
        console.log("O livro solicitado está indisponível.\n\n");
      }
    }
  }
}

//DEVOLVER LIVRO
else if (opcao==2){
  console.log("Digite o número referente ao livro que deseja devolver de acordo com o acervo abaixo:\n");
  for (let valor of acervo){
    console.log("Número: " + valor.numero + "\nTítulo: " + valor.titulo + "\nAutor(a): " + valor.autor + "\nAno: " + valor.ano + "\nStatus: " + valor.status + "\nEmprestado para: " + valor.emprestado + "\n");
  }
  
opcaoLivro = prompt("Número: ");  
  for (let valor of acervo){
    if (valor.numero==opcaoLivro){
      if(valor.status=="Indisponível"){
        valor.emprestado = "";
        valor.status = "Disponível";
        console.log("O livro foi devolvido com sucesso.");
      }else if(valor.status=="Disponível"){
        console.log("O livro solicitado já está no acervo.\n\n");
      }
    }
  }
}

//DOAR LIVRO
else if (opcao==3){
const novoLivro = {
        numero: numeroDoacao,
        titulo: "",
        autor: "",
        ano: 000,
        status: "Disponível",
        emprestado: ""
    };
  novoLivro.titulo = prompt("Informe o título do livro:");
  novoLivro.autor = prompt("Informe o(a) autor(a) do livro:");
  novoLivro.ano = prompt("Informe o ano de publicação do livro:");

  acervo.push(novoLivro);
  numeroDoacao++;
  
  console.log("\nObrigada! Sua doação foi finalizada e o livro foi adicionado ao acervo com sucesso.");
  
  }

//SAIR
else if(opcao==0){break;}

//VALOR INVÁLIDO
else{
  console.log("Operação inválida.\n");
}  

}
