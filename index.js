// Função para identificar a bandeira do cartão
function identificarBandeira(numero) {
    const bandeiras = [
        { nome: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { nome: 'MasterCard', regex: /^5[1-5][0-9]{14}$/ },
        { nome: 'American Express', regex: /^3[47][0-9]{13}$/ },
        { nome: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { nome: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { nome: 'Elo', regex: /^(4011(78|79)|431274|438935|451416|457393|504175|5067[0-6][0-9]|509[0-9]{3}|627780|636297|636368|650[4-5][0-9]{2}|6507[1-2][0-9]|6516[5-9][0-9]|6550[0-9]{2})[0-9]{10,12}$/ },
        { nome: 'Hipercard', regex: /^(606282|3841)[0-9]{10,12}$/ }
    ];
    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(numero)) {
            return bandeira.nome;
        }
    }
    return 'Desconhecida';
}

// Função para validar o número do cartão (algoritmo de Luhn)
function validarCartao(numero) {
    let soma = 0;
    let alternar = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let n = parseInt(numero.charAt(i));
        if (alternar) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        soma += n;
        alternar = !alternar;
    }
    return soma % 10 === 0;
}

// Função principal para validar e identificar bandeira
function validarCartaoEBandeira(numero) {
    const valido = validarCartao(numero);
    const bandeira = identificarBandeira(numero);
    return { valido, bandeira };
}


const numero = ('5269722538517412');
const resultado = validarCartaoEBandeira(numero);
 console.log(resultado);
 





