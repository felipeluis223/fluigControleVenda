function displayFields(form,customHTML){
    // Configuração dos Grupos e Datasets:
    var user = getValue("WKUser");
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST) ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    var groups = [ "grpLoja1", "grpLoja2", "grpLoja3", "grpTI", "grpFinanceiro", "grpVendas"];
    
    // Percorrendo os grupos do usuário e armazenando conforme a necessidade:
    var userGroup = {};
    for(var index=0; index<=groupDataset.rowsCount; index++){
        var groupId = groupDataset.getValue(index, "colleagueGroupPK.groupId");
        for (var i=0; i<groups.length; i++){
            if(groupId == groups[i]){
                userGroup[groups[i]] = groupId;
            };
        };
    };

    // Desabilitando todos inputs:
    var allFields = ["nomeRespVenda","dataVenda","valorVenda",
        "formaPagamentoVenda","lojaResponsavel","obsVenda","nomeRespFinanceiro",
        "dataFinanceiro","radioTypes","obsFinanceiro","checkboxVisto"];
    
    for(var index=0; index<allFields.length; index++){
        form.setEnabled(allFIelds[index], false);
    };
        
    // Se o usuário for do grupo de vendas - habilita os campos de venda:
    if("grpVendas" in userGroup){
        user = getValue("WKUser");
        form.setValue("nomeRespVenda", user);
        form.setEnabled("nomeRespVenda", false);

        form.Enabled("dataVenda", true);
        form.Enabled("valorVenda", true);
        form.Enabled("formaPagamentoVenda", true);
        form.Enabled("lojaResponsavel", true);
        form.Enabled("obsVenda", true);
        
        // Verificando se já passou pelo setor do financeiro e habilitando para edição:
        if((form.getValue("radioTypes") =="success") || (form.getValue("radioTypes") =="danger")){
            form.setEnabled("obsVenda", true);
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
}