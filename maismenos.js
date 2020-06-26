function maisMenos(array){
    var posit = [];
    var negat = [];
    var zero = [];

    for(var i = 0; i<array.length; i++){
        if(array[i] < 0){
            negat.push(array[i]);
        }
        if(array[i] > 0){
            posit.push(array[i]);
        }
        if(array[i] == 0){
            zero.push(array[i]);
        }
    }
    var positivos = posit.length/array.length;
    var zeros = zero.length/array.length;
    var negativos = negat.length/array.length;
    return ([positivos, zeros, negativos]);
}

