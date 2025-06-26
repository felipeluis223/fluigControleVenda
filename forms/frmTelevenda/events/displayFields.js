function displayFields(form,customHTML){
    // Configuração dos Grupos e Datasets:
    var user = getValue("WKUser");
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST) ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    var groups = [ "grpVendas", "grpFinanceiro" ];
    
    // Percorrendo os grupos do usuário e armazenando conforme a necessidade:
    var userGroup = {};
    for(var index=0; index<groupDataset.rowsCount; index++){
        var groupId = groupDataset.getValue(index, "colleagueGroupPK.groupId");
        for (var i=0; i<groups.length; i++){
            if(groupId == groups[i]){
                userGroup[groups[i]] = groupId;
            };
        };
    };

    // // Desabilitando todos inputs:
    var allFields = ["nomeRespVenda","dataVenda","valorVenda",
        "formaPagamentoVenda","lojaResponsavel","obsVenda","nomeRespFinanceiro",
        "dataFinanceiro","radioTypes","obsFinanceiro", "checkboxVisto"];
    
    for(var index=0; index<allFields.length; index++){
        form.setEnabled(allFields[index], false);
    };

        
    // Se o usuário for do grupo de vendas - habilita os campos de venda:
    if("grpVendas" in userGroup){
        user = getValue("WKUser");
        form.setValue("nomeRespVenda", user);
        form.setEnabled("nomeRespVenda", false);

        form.setEnabled("dataVenda", true);
        form.setEnabled("valorVenda", true);
        form.setEnabled("formaPagamentoVenda", true);
        form.setEnabled("lojaResponsavel", true);
        form.setEnabled("obsVenda", true);
        
        // Verificando se já passou pelo setor do financeiro e habilitando para edição:
        if((form.getValue("radioTypes") == "success") || (form.getValue("radioTypes") == "danger")){
            form.setEnabled("checkboxVisto", true);
            form.setEnabled("dataVenda", false);
            form.setEnabled("valorVenda", false);
            form.setEnabled("formaPagamentoVenda", false);
            form.setEnabled("lojaResponsavel", false);
            form.setEnabled("obsVenda", false);
        }
    }

    if("grpFinanceiro" in userGroup){
        user = getValue("WKUser");
        form.setValue("nomeRespFinanceiro", user);
        form.setEnabled("nomeRespFinanceiro", false);

        form.setEnabled("dataFinanceiro", true);
        form.setEnabled("radioTypes", true);
        form.setEnabled("obsFinanceiro", true);
    }
    
    // Client-side para mostrar/habilitar lembrete do uploadFile com base no radioButton:
    customHTML.append("<script>");
    customHTML.append("$(document).ready(function() {");
    customHTML.append("  function toggleUploadField() {");
    customHTML.append("    var valorSelecionado = $('input[name=radioTypes]:checked').val();");
    customHTML.append("    if (valorSelecionado === 'success') {");
    customHTML.append("      $('#containerUpload').show();");
    customHTML.append("      $('#uploadFile').prop('disabled', false);");
    customHTML.append("    } else {");
    customHTML.append("      $('#containerUpload').hide();");
    customHTML.append("      $('#uploadFile').prop('disabled', true);");
    customHTML.append("    }");
    customHTML.append("  }");
    customHTML.append("  toggleUploadField();");
    customHTML.append("  $('input[name=radioTypes]').on('change', toggleUploadField);");
    customHTML.append("});");
    customHTML.append("</script>");
}