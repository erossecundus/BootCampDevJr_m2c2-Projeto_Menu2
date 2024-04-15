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

    outputName.innerHTML = `<h3>Caro <strong>${clientName.value}</strong></h3>`;    //aplicando nome no titulo do modal

    output.innerHTML = `<p>Seguem os dados do seu pedido.</p>
                        Seu pedido é:<ul class="list-group">`;
    
    for (var input of quantities) {
        if (parseFloat(input.value)){
            output.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Prato: ${prod[input.id-1].name}</div>
                                        Preço unitário: ${formatter.format(prod[input.id-1].price)} | 
                                        Quant.: ${input.value} | Total parcial:
                                        <spam class="fw-bold">${formatter.format(parseFloat(input.value) * prod[input.id-1].price)}
                                        </spam>
                                    </div>
                                </li>`;
                                
            total            += parseFloat(input.value)*prod[input.id-1].price;
        }
    }
    output.innerHTML += `</ul>`;

    if(clientMsg.value)     //acrescentando as observações no modal, caso existam
        output.innerHTML += `<p class="fst-italic">Observações: ${clientMsg.value}</p>`;
    output.innerHTML += `<h3 class="text-center"><br>Preço final: ${formatter.format(total)}</h3>`;
    

}