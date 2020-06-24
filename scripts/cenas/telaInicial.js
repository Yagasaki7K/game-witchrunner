class TelaInicial {
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text("Rita's", width / 2, height / 8*3);
    textSize(150);
    text('Witch Runner', width / 2, height / 5 * 3)
    textSize(25);
    text('Anderson  "yagasaki"  marloN ', width / 2, height / 30 * 3);
    text('apresents ', width / 2, height / 22 * 3);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}