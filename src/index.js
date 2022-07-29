var image = document.getElementById("image");
var aux = 1; 

image.addEventListener("click", ()=>{
    if(aux===1){  
        image.src = "img/2.png";
        aux = 2; 
    }
    else if(aux===2){
        image.src = "img/3.png";
        aux = 3;
    }
    else{
        image.src = "img/1.png";
        aux = 1;
    }
    
});
 



