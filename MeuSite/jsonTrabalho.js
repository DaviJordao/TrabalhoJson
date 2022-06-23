var jsonTrabalho = [
    {"id": 1, "lutador": "Lutador Brasileiro:" ,"descricao": "Descricao: Lutador Faixa preta em muay thai"},
    {"id": 2, "lutador": "Lutador Holandes",  "descricao": "Descricao: Lutador Faixa preta em capoeira"},
    {"id": 3, "lutador": "Lutador Chines",  "descricao": "Descricao: Lutador Faixa preta em judo"},
    {"id": 4, "lutador": "Lutador Americano",  "descricao": "Descricao:  Lutador Faixa preta em jiu jitsu"},
    {"id": 5, "lutador": "Lutador Polones", "descricao": "Descricao:  Lutador Faixa preta em kravmaga"},
    {"id": 6, "lutador": "Lutador Africano", "descricao": "Descricao:  Lutador Faixa preta em boxe"},
   
  ]


  function escreveBrasileiro(brasileiro){
    console.log("Selecionou o Lutador 'Brasileiro'");
    let personagemFiltrado = jsonTrabalho.filter(filtroBrasileiro);
    
  }
  function escreveHolandes(Holandes){
    console.log("Selecionou o Lutador 'Holandes'");
    let personagemFiltrado = jsonTrabalho.filter(filtroHolandes);
    
  }
  function escreveChines(Chines){
    console.log("Selecionou o Lutador'Chines'");
    let personagemFiltrado = jsonTrabalho.filter(filtroChines);
    
  }
  function escreveAmericano(Americano){
    console.log("Selecionou o Lutador 'Americano'");
    let personagemFiltrado = jsonTrabalho.filter(filtroAmericano);
 
  }
  function escrevePolones(Polones){
    console.log("Selecionou o Lutador'Polones'");
    let personagemFiltrado = jsonTrabalho.filter(filtroPolones);
    
  }
  function escreveAfricano(Africano){
    console.log("Selecionou o Lutador 'Africano'");
    let personagemFiltrado = jsonTrabalho.filter(filtroAfricano);
    
  }



  
  var jsonClone = [{"id": "1"},]
  
  function filtroDuplica(valor) {
    return valor.id === "1";
  }
  function adicionarLutador(addLutador){
    console.log(" Selecionou 'Adicionar um Lutador'");
  }
  
  function duplicaHtml(duplicar_html) {
    duplicar_html = duplicar_html.sort();
      var duplicarel = "<div>";
      for (let i = 0; i < duplicar_html.length; i++) {
        let cloneform = document.querySelector("#criarlutador").cloneNode(true)
        document.querySelector("#criarlutador").after(cloneform)
      }
      duplicarel += "</div>";
    var elemento = document.getElementById('jsonTrabalho');
    elemento.innerHTML = duplicarel;
  }