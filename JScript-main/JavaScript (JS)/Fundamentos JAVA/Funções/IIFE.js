 // -- Evita manipular algo que é variável, muitas pessoas e muitos códigos, podem manipular aquele aquele valor variável e isso gera inesperados na sua aplicação. 
 // -- Fugir do escopo global é a melhor opção
 // IIFE = Immediately Invoked Function Expression

//De tal forma, fugimos do escopo global
 (function() {
    console.log("Sera executado na hora!!")
    console.log("Foge do escopo mais abrangente!!")
 })()