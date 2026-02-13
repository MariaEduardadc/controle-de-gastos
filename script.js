let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
calcularTotais();
function adicionarGasto(){
    console.log("clicou no botao");
    let nome = document.getElementById("nome").value.toLowerCase();
    let produto = document.getElementById("produto").value;
    let valor = parseFloat(document.getElementById("valor").value);

    gastos.push({
        nome: nome,
        produto: produto,
        valor: valor
    });
     calcularTotais();
     localStorage.setItem("gastos", JSON.stringify(gastos));
}


function calcularTotais() {

    let totalmaria = 0;
    let totalariana = 0;
     
    let listaMaria = document.getElementById("listamaria");
    let listaAriana = document.getElementById("listaariana");

    listaMaria.innerHTML = "";
    listaAriana.innerHTML = "";


    gastos.forEach((gasto, index) =>  {

        
      if(gasto.nome === "maria"){
        totalmaria += gasto.valor;

        listaMaria.innerHTML +=
     `<li>${gasto.produto} - R$  ${gasto.valor} <button onclick="removerGasto(${index})"></button></li>`;
         }
        
         if(gasto.nome === "ariana"){
        totalariana += gasto.valor;

        listaAriana.innerHTML +=
         `<li>${gasto.produto} - R$ ${gasto.valor } <button onclick="removerGasto(${index})"></button></li>`;
        }
        
});


document.getElementById("totalmaria").innerText = totalmaria;
document.getElementById("totalariana").innerText = totalariana;
document.getElementById("totalgeral").innerText = totalmaria + totalariana;
}
function removerGasto(index){

    gastos.splice(index, 1);

    localStorage.setItem("gastos", JSON.stringify(gastos));

    calcularTotais();
}

function limparDados(){
    localStorage.removeItem("gastos");
    gastos = [];
    calcularTotais();
} 
