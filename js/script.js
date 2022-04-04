let bordaComida;
let bordaBebida;
let bordasobremesa;

function selecionarComida(opcao){
    bordaComida = document.querySelector(".bordaComida");
    if(bordaComida !== null){
        bordaComida.classList.remove("bordaComida");
    }
    opcao.classList.add("bordaComida");
    bordaComida = true;

    const check = document.querySelector(".check");
    if(check !== null){
        check.classList.remove("esconde");
    }
    check.classList.add("esconde");
    pedidofeito();
}
function selecionarBebida(opcao){
    bordaBebida = document.querySelector(".bordaBebida");
    if(bordaBebida !== null){
        bordaBebida.classList.remove("bordaBebida");
    }    
    opcao.classList.add("bordaBebida");
    bordaBebida = true;
    pedidofeito();

}
function selecionarSobremesa(opcao){
    bordasobremesa = document.querySelector(".bordasobremesa");
    if(bordasobremesa !== null){
        bordasobremesa.classList.remove("bordasobremesa");
    }
    opcao.classList.add("bordasobremesa");
    bordasobremesa = true;
    pedidofeito();
}
function pedidofeito(){
    if(bordaComida & bordaBebida & bordasobremesa){
        const botao = document.querySelector("button");
        botao.innerHTML = "<a herf='https://wa.me/5592995074770?text=' + fixedEncodeURIComponent(str)>Finalizar pedido</a>";
        botao.style.backgroundColor = "#32B72F";
    }
    fixedEncodeURIComponent(str);
    botao.innerHTML.onclick =` https://wa.me/5592995074770?text= ${fixedEncodeURIComponent(str)}`;
}
function check(selecionado){
    if(bordaComida == true){
        const check = document.querySelector(".check").classList.remove("esconde");
    }
}
str = "Olá, gostaria de fazer o pedido: - Prato: Frango Yin Yang - Bebida: Coquinha Gelada - Sobremesa: Pudim Total: R$ 27.70"
function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
}
fixedEncodeURIComponent(str);
console.log(str);
