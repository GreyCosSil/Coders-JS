function alturaArvoreUtopica(ciclos){
    var inicio = 1;
    for(var i = 1;i<=ciclos;i++){
        if(i==0){
            inicio = inicio;
        }
        if(i % 2 != 0){
            inicio = inicio*2;
        }
        else{
            inicio = inicio+1;
    }
    }
    return inicio;
}
