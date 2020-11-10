let valorInicial = 0;
const $second = window.document.querySelector(".-second");
$second.addEventListener("click", handleClick);

function handleClick() {
    const $carrinho = window.document.querySelector(".-last");
    $carrinho.textContent = `Cart(${++valorInicial})`;
} 

    // $valorInicial = $valorInicial+1;
    // $valorInicial += 1;
    // $valorInicial++;
    // $carrinho.textContent = $valorInicial++;
    // Nesse caso ele atribui o valor e depois soma pois quem vem primeiro
    // a variável vem primeiro na linha de código.
    // $carrinho.textContent = ++$valorInicial;
    // Nesse caso ele já soma o valor da variavel;
    // Antes do template string:
    // $carrinho.textContent = "Carrinho ("+ ++$valorInicial +")";
    // Depois do template string:
    // $carrinho.textContent = `Carrinho(${++valorInicial})`;



