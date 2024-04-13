$("#phone").mask("(99) 9 9999-9999");

var prod = [
    {id: 1, name: "Bife com batata", price: 30.0},
    {id: 2, name: "Coxa de frango crocante", price: 25.0},
    {id: 3, name: "Carne de panela", price: 22.0},
    {id: 4, name: "Farofa", price: 10.0},
    {id: 5, name: "Salada", price: 8.0},
    {id: 6, name: "Torresmo", price: 12.0}
]

function calc() {
    var quantities  = document.getElementsByName("quantity");
    var output      = document.getElementById("output");
    var total       = 0;
    var clientName      = document.getElementById("name")

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML = `<p>Caro <strong>${clientName.value}</strong></p>`;
    output.innerHTML += `<p></br>Seguem os dados do seu pedido.<br><br>Seu pedido é:</p><ul>`
    
    for (var input of quantities) {
        if (parseFloat(input.value)){
            output.innerHTML += `<li>Prato: ${prod[input.id-1].name} - 
                                Preço unitário: ${formatter.format(prod[input.id-1].price)} - 
                                Quantidade: ${input.value} - 
                                Total: ${formatter.format(parseFloat(input.value)*prod[input.id-1].price)}`;
            total            += parseFloat(input.value)*prod[input.id-1].price;
        }
    }

    output.innerHTML += `</ul><p></br><h2>Preço final: ${formatter.format(total)}</h2>`;

    


}