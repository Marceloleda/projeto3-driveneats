let bordaComida;
let bordaBebida;
let bordasobremesa;
let precoComida;
let precoBebida;
let precoSobremesa;
let preco;

function converter(preco){
    preco = preco.replace("R$ ","").replace(",",".");
    preco = Number(preco).toFixed(2) * 100; 
    return preco;
}
function selecionarComida(opcao){
    bordaComida = document.querySelector(".bordaComida");
    if(bordaComida !== null){
        bordaComida.classList.remove("bordaComida");
    }
    opcao.classList.add("bordaComida");
    preco = opcao.querySelector(".overflow .opcoes-comida .prato .valor").innerHTML;
    precoComida = converter(preco);
    console.log(precoComida)

    // const check = document.querySelector(".check");
    // if(check !== null){
        //     check.classList.remove("esconde");
        // }
        // check.classList.add("esconde");
    bordaComida = true;
    pedidofeito();
}
function selecionarBebida(opcao){
    bordaBebida = document.querySelector(".bordaBebida");
    if(bordaBebida !== null){
        bordaBebida.classList.remove("bordaBebida");
    }    
    opcao.classList.add("bordaBebida");
    preco = opcao.querySelector(".overflow .opcoes-comida .prato .valor").innerHTML;
    precoBebida = converter(preco);
    console.log(precoBebida)
    bordaBebida = true;
    pedidofeito();

}
function selecionarSobremesa(opcao){
    bordasobremesa = document.querySelector(".bordasobremesa");
    if(bordasobremesa !== null){
        bordasobremesa.classList.remove("bordasobremesa");
    }
    opcao.classList.add("bordasobremesa");
    preco = opcao.querySelector(".overflow .opcoes-comida .prato .valor").innerHTML;
    precoSobremesa = converter(preco);
    console.log(precoSobremesa)
    bordasobremesa = true;
    pedidofeito();
}
function pedidofeito(){
    if(bordaComida & bordaBebida & bordasobremesa){
        const botao = document.querySelector("footer button");
        botao.innerHTML = "Finalizar pedido</a>";
        botao.style.backgroundColor = "#32B72F";
    }
}
//Tem que aceitar o pop-up da página
function enviar(){
    let nome = prompt("Qual seu nome?")
    let endereco = prompt("Qual seu endereço?")
    if(bordaComida & bordaBebida & bordasobremesa){
    let total = precoComida + precoBebida + precoSobremesa;
    const descricao = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n
    - Sobremesa: Pudim\nTotal: R$ ${(
        total / 100).toFixed(2)}\n\n 
        Nome:${nome}\n
        Endereço:${endereco}`;
      const linkZap = `https://wa.me/5592995074770?text=${encodeURIComponent(descricao)}`;
    
      window.open(linkZap);//Tem que aceitar o pop-up da página

}
}