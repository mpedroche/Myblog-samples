function displayAnimalIconTooltip(rowData) {      
    var str = JSON.parse(rowData);  
    var coldata = str.mar_tipoanimal_Value;  
    var imgName = "";   
    switch (coldata) { 
        //Cat option set value
        case 809620000:
            //Nombre recurso web 
            imgName = "mar_Cat_icon";  
            break;
        //Dog option set value  
        case 809620001:
            //Nombre recurso web   
            imgName = "mar_dog_icon";  
            break;
        //Rabbit option set value   
        case 809620002:
            //Nombre recurso web   
            imgName = "mar_rabbit_icon";  
            break;
        //Bird option set value  
        case 809620003:
        //Nombre recurso web   
            imgName = "mar_bird_icon";  
            break;
        //turtle option set value  
        case 809620004:
            //Nombre recurso web   
            imgName = "mar_turtle_icon";  
            break;        
        default:  
            imgName = "";
            break;  
    }  
    var resultarray = [imgName];  
    return resultarray;  
}