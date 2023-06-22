let  pagamento = "debito";


 //if (pagamento === "debito"){
    //console.log (" você recebeu 10% de desconto")
    
 //}else if ( pagamento ==="dinheiro" || pagamento === "pix"){
    //console.log ("15% de desconto");
 //} else if (pagamento === "2x"){
    //console.log ("preço normal de entiqueta sem juros");
 //}else{
    //console.log ("preço normal de entiqueta mais juros 10%")
 //}


switch (pagamento) {
    case "debito":
        console.log("você recebeu 10% de desconto")
        break;
        case "dinheiro":
            console.log("15% de desconto")
            break;
        case "pix":
            console.log("15% de desconto")
            break;
        case "2x":
            console.log("15% de descontopreço normal de entiqueta sem juros") 
            
            
        break;

    default:
        
    console.log("preço normal de entiqueta mais juros 10%")
        break;
}
