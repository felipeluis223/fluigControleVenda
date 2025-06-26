function validateForm(form){
    var activity = parseInt(getValue("WKNumState")); // converte para número

    // Processo do Solicitante - validação dos campos:
    if (activity === 1) {
        if(form.getValue("dataVenda") == ""){
            throw "Informação inválida: é necessário preencher a data."
        }
        if(form.getValue("valorVenda") == ""){
            throw "Informação inválida: é necessário preencher o valor."
        }
    }

    // Processo do Financeiro - validação dos campos:
    if (activity === 2) {
        if(form.getValue("radioTypes") == ""){
            throw "Informação inválida: o status do pagamento não foi informado."
        }
        if(form.getValue("dataFinanceiro") == ""){
            throw "Informação inválida: é necessário preencher a data."
        }
    }

    if((activity == 6) || (activity == 13)){
        if(form.getValue("checkboxVisto") == ""){
            throw "Informação inválida: o checkbox não foi marcado."
        }
    }
}
