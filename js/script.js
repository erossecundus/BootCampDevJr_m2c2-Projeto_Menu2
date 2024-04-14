$("#inputPhone").mask("(99) 9 9999-9999");

var prod = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de frango crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 }
]

function calc() {
    var quantities  = document.getElementsByName("quantity");
    var output      = document.getElementById("output");
    var total       = 0;
    var clientName  = document.getElementById("inputNome");
    var outputName  = document.getElementById('outputTitle');
    var clientMsg   = document.getElementById("inputObs");

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    

    outputName.innerHTML = `<h3>Caro <strong>${clientName.value}</strong></h3>`;
    output.innerHTML = '';
    output.innerHTML += `<p>Seguem os dados do seu pedido.</p>Seu pedido é:<ol>`
    
    for (var input of quantities) {
        if (parseFloat(input.value)){
            output.innerHTML += `<li class="fs-5">Prato: ${prod[input.id-1].name}</li>
                                <ul>
                                <li>Preço unitário: ${formatter.format(prod[input.id-1].price)} | 
                                    Quant.: ${input.value} | Total parcial: 
                                    <strong>${formatter.format(parseFloat(input.value) * prod[input.id-1].price)}</strong></li>
                                </ul>`;
            total            += parseFloat(input.value)*prod[input.id-1].price;
        }
    }
    output.innerHTML += "</ol>" ;
    if(clientMsg.value)
        output.innerHTML += `<p class="fst-italic">Observações: ${clientMsg.value}</p>`;
    output.innerHTML += `<h2 class="text-center">Preço final: ${formatter.format(total)}</h2>`;
    

}