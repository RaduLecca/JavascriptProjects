// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];
var index=0;
const image=document.querySelector("#slide");
//Functia ce selecteaza imaginea
function showImage()
{  
    image.src="img/"+images[index].src;
    image.alt=images[index].alt;
}
//Butoanele Inainte si inapoi
document.querySelector("#inapoi").addEventListener("click",function(){
    index--;
    if(index<0)
    index=3;
    showImage();

});
document.querySelector("#inainte").addEventListener("click",function(){
   index++;
   if(index>3)
   index=0;
   showImage();

   
});
//Selectarea primei imagini

image.src="img/"+images[0].src;
image.alt=images[0].alt;


//Bilutele
function meniuBilute(local)
{  document.querySelector(".meniu").innerHTML='';
   
   for(let i=0;i<4;i++)
   { let biluta = document.createElement('span');
   biluta.className = "biluta"
   biluta.id = "biluta" + (i + 1) ;

   biluta.addEventListener('click',function(){
       if(index < 3)
         index++ ;
         else index = 0;

       if(index > 0)
         index-- ;
          else index = 3;
       index = i;
       showImage(index);
       activate(document.querySelector("#biluta" +(index + 1)));
   });
   document.querySelector("#meniu").appendChild(biluta);
   }
   document.querySelector('#biluta2').className += " activ";

};

//Activarea bilutelor
function activate(bil)
{let list = document.getElementsByTagName('span');
    for (var i = 0; i < list.length; i++) {
    if(list[i].id !== bil.id) 
     list[i].className = "biluta";
      else
       list[i].className = "biluta activ";

}
};
//Punerea bilutelor pe pagina
document.querySelector(".meniu").addEventListener("load",meniuBilute());

