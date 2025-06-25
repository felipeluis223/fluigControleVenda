function createDataset(fields, constraints, sortFields) {
    
    // Declarando formas de pagamento:
    var data = [
        [ 1001, "Débito" ],
        [ 1002, "Crédito" ],
        [ 1003, "Pix" ]
    ];

    // Declarando Dataset:
    var ds = DatasetBuilder.newDataset();

    // Add colunas dos Datasets:
    ds.addColumn("ID");
    ds.addColumn("Describle");


    // Declarando linhas dos Datasets:
    ds.addRow(data[0]);
    ds.addRow(data[1]);
    ds.addRow(data[2]);
    
    return ds;
}