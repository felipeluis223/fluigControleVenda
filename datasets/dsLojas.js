function createDataset(fields, constraints, sortFields) {
    var data = [
        [ 3001, "Loja 1", "Indaiatuba" ],
        [ 3002, "Loja 2", "Campinas" ],
        [ 3003, "Loja 3", "São Paulo" ]
    ];
    
    var ds = DatasetBuilder.newDataset();
    ds.addColumn("ID");
    ds.addColumn("Nome");
    ds.addColumn("Cidade");

    ds.addRow(data[0]);
    ds.addRow(data[1]);
    ds.addRow(data[2]);

    return ds;
}