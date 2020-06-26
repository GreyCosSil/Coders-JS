function escada(altura){
  var array = [];
  var esc = "";
  var espaco = altura - 1
  var degrau = 1
  for(var i=1; i<=altura; i++){
    esc = " ".repeat(espaco) +"#".repeat(degrau)
    array.push(esc);
    degrau = degrau + 1
    espaco = espaco - 1
  }
  return array;
}
