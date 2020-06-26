function acontece(alunosDaSegunda, qAn){
    var a=0;
    for(var i =0; i<alunosDaSegunda.length;i++){
        if(alunosDaSegunda[i]<=0){
            a = a + 1;
        }
    }
    if(a>=qAn){
        return true;
    }else{
        return false;
    }
     
}

function aberturas(todosAlunos, qAnT){
    var matrix = []
    for(var i = 0; i<todosAlunos.length;i++){
        matrix.push(acontece(todosAlunos[i], qAnT));
    }
    return matrix;
}
