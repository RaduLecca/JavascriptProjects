
// Functionalitatea butonului "Add Item"
document.querySelector("#add").addEventListener("click",
function(){
    var userImp=document.querySelector("#shop"); 

    var listelement=document.createElement("ul");

    var inner=document.createTextNode(userImp.value);
    // Butoanele
    var e=document.createTextNode("Edit");
    var d=document.createTextNode("Delete");
    var s=document.createTextNode("Submit");
   
    var edit=document.createElement("BUTTON");
    var del=document.createElement("BUTTON");
    var submit=document.createElement("BUTTON");

    edit.appendChild(e);
    del.appendChild(d);
    submit.appendChild(s);

 //Functionalitatea lui edit
    edit.addEventListener("click",function()
    { var textbox=document.createElement("input");
      textbox.value=userImp.value;
    
     listelement.replaceChild(textbox,inner);
     textbox.addEventListener("keyup",function(e)
     {
        if(e.key === "Enter")
        {
            inner.textContent=textbox.value;
            listelement.replaceChild(inner,textbox);
        }
     });
     
     
    });
    //Functionalitatea lui delete
    del.addEventListener("click",function()
    { 
        document.querySelector("#lista").removeChild(listelement);
    });
   //Functionalitatea lui Submit + aranjarea elementelor finale
    submit.addEventListener("click",function()
    { for(var i = 0 ; i < 3; i++){
            listelement.removeChild(listelement.firstChild.nextSibling);
        }
        listelement.classList.add('fin');
        fin.appendChild(listelement);
        let list = Array.from(document.getElementsByClassName('fin'));
        list.sort((a,b)=>{
            if (a.innerText > b.innerText){return 1};
            if (a.innerText < b.innerText){return -1};
            if (a.innerText === b.innerText){return 0}
        });
      
        list.forEach((el)=>{
            fin.appendChild(el);
        })
    });
   

    // Legarea butoanelor de elementul nou si punerea pe pagina a acestuia
    listelement.appendChild(inner);
    listelement.appendChild(edit);
    listelement.appendChild(del);
    listelement.appendChild(submit);
    document.querySelector("#lista").appendChild(listelement);
 

});
