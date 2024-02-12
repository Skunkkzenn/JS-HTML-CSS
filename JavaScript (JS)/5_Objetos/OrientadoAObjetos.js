 // Código não executável

 //Procedural
 // Na linguagem procedural, nós passamos os valores para assim serem manipulados
 // uma função, que manipula dados
 processamento(valor1, vlaor2, valor3)

 //OO
// dados e dentro desses dados temos funções
//objeto é a figura central(classes, funções, dependendo da linguagem)
objeto = {
    //atributos interno do objeto
    valor1,
    valor2,
    valor3,
    //funções, comportamentos dentro do objeto
    processamento(){

    }
}

//invoca-se o processamento a partir do dado(objeto)
objeto.processamento()

//Principios imporantes
/* 
1- Abstração, entender como traduzir um objeto do mundo real para dentro do seu sistema.
2- Encapsulamento, detalhes de implementação escondidos e mostrar pra quem precisa usar o sistema
uma interface simples para que possa tornar a interação simples.

3- Herança, objetos mais complexos, a partir de outros objetos, pex: carro com o motor, 
carro terá o motor, que por sua vez é composto por N materiais, logo será um objeto.
O objeto recebe atributos e comportamentos de determinado objeto, podendo um objeto ter um "pai" 
e esse pai ter um pai...Característica E1, priorizar a composição no lugar da herança.

4- Polimorfismo, múltiplas formas. Um celular, conceito generico, iphone, motorola, samsung, 
o conceito generioco, consegue substituir as características do mesmo, mantendo sua base, 
substituir diferentes conceitos, dentro de uma variável do tipo mais genérica. 
*/