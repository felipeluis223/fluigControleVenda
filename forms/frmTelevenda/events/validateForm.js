function validateForm(form){
    var activity = parseInt(getValue("WKNumState")); // converte para número

    if (activity === 1) {
        if(form.getValue("valorVenda") == ""){
            throw "Falta o valor"
        }
    }

    if (activity === 2) {
        if(form.getValue("radioTypes") == ""){
            throw "Falta o status"
        }
    }


    if((activity == 6) || (activity == 13)){
        if(form.getValue("checkboxVisto") == ""){
            throw "Preencha o checkbox, por favor."
        }
    }
}
