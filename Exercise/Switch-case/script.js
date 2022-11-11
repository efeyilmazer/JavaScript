            //Switch-case işlemleri

let category = "Coffee";

 switch(category){
    case "Coffee":
         console.log("Sade kahveniz hazırlanıyor...");
    break;
    
    case "Coffeemilk":
         console.log("Sütlü Kahveniz hazırlanıyor...");
    break;

    default:
         console.log("Hatalı kategori seçtiniz");
}

let day;

switch (new Date().getDay()){
    case 0:
        day = "Pazar";
        console.log("Bugün günlerden " + day);
        break;
        case 1:
            day = "Pazartesi";
            console.log("Bugün günlerden " + day);
            break;
            case 2:
                day = "Salı";
                console.log("Bugün günlerden " + day);
                break;
                case 3:
                    day = "Çarşamba";
                    console.log("Bugün günlerden " + day);
                    break;
                    case 4:
                        day = "Perşembe";
                        console.log("Bugün günlerden " + day);
                        break;
                        case 5:
                            day = "Cuma";
                            console.log("Bugün günlerden " + day);
                            break;
                            case 6:
                                day = "Cumartesi";
                                console.log("Bugün günlerden " + day);
                                break;
}
