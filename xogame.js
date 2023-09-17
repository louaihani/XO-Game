let x =[document.querySelector("#n1"),
document.querySelector("#n2"),
document.querySelector("#n3"),
document.querySelector("#n4"),
document.querySelector("#n5"),
document.querySelector("#n6"),
document.querySelector("#n7"),
document.querySelector("#n8"),
document.querySelector("#n9"),

]
let winner = document.querySelector("#winner");
let test2=true;
let loser = document.querySelector("#loser");
 let historyx=JSON.parse(sessionStorage.getItem("x"));
 let historyo=JSON.parse(sessionStorage.getItem("o"));
 let history = document.getElementById("history");
let test = true;
let s = "";
let checkxo = {
 checkedx : [],
 checkedo :[],
 x:[""],
 o:[""],

};

counter2=0;
let counter =  0;
let test3=[true,true,true,true,true,true,true,true,true];

x[0].onclick =  function(){
   did(0);


}
x[1].onclick = function(){
   /* if(test3[1]==true){
    tap(1);
    check(1);
    }
    test3[1]=false;*/
    did(1);
    
}
x[2].onclick = function(){
    /*if(test3[2]==true){
    tap(2);
    check(2);
    }
    test3[2]=false;*/
    did(2);

}
x[3].onclick = function(){
    /*
    if(test3[3]==true){
    tap(3);
    check(3);
    }
    
    test3[3]=false;*/
did(3);


}
x[4].onclick = function(){
   /* if(test3[4]==true){
    tap(4);
    check(4);
    }
    test3[4]=false;*/
    did(4);
    
}
x[5].onclick = function(){
 
   did(5);
}
x[6].onclick = function(){

  did(6);  
}
x[7].onclick = function(){

did(7);
    
}
x[8].onclick = function(){

did(8);
    
}

function tap(a){
    if(test2==true){
    if(test==true){
s="X"

    }else {
s="O";

    }
x[a].innerHTML =s ;

test = !test;
}

}
function check(index){
    let test1=true;
    if(test == true){

      //  checkxo.checkedx[counter] = index;
        checkxo.x[index] = s;
counter++;//don t use 
console.log(checkxo.x);

    }  
else{
      //  checkxo.checkedo [counter2] = index;
        checkxo.x[index]=s;
counter2++;
console.log(checkxo.checkedo);
}

//here you can edit 
for(let i = 0 ; i<checkxo.x.length;i++){
    if( ( (checkxo.x[i]==checkxo.x[i+3] && checkxo.x[i+6]==checkxo.x[i+3])||((checkxo.x[0]==checkxo.x[1] && checkxo.x[1]==checkxo.x[2] && checkxo.x[0]!=undefined)||(checkxo.x[3]==checkxo.x[4] && checkxo.x[4]==checkxo.x[5] && checkxo.x[5]!=undefined)||(checkxo.x[6]==checkxo.x[7] && checkxo.x[7]==checkxo.x[8] && checkxo.x[7]!=undefined) )||(checkxo.x[0]==checkxo.x[4] && checkxo.x[4]==checkxo.x[8] && checkxo.x[8]!=undefined)||(checkxo.x[2]==checkxo.x[4] && checkxo.x[4]==checkxo.x[6])&& checkxo.x[6]!=undefined)&& checkxo.x[i]!= undefined){
 if(test2==true){
   winner.innerHTML +=s;
   if(s=="X"){
    historyx++;
s="O";
loser.innerHTML +=s;
   }else{
    historyo++;
s="X";
loser.innerHTML +=s;

   }
//   console.log(historyo,historyx);
sessionStorage.setItem("x",JSON.stringify(historyx));
sessionStorage.setItem("o",JSON.stringify(historyo))

}
   test2=false;
   break;
    }
   else{
  
   
   }

   }
   


}


function did(num){
    if(test3[num]==true){
     tap(num);
     check(num);
    
  }
  test3[num]=false;
 
 
 }


 history.onclick=function (){
document.getElementById("table").style.cssText = 'display:block;';
//console.log(document.getElementById("table"))
let a = JSON.parse(sessionStorage.getItem("x"));
let b = JSON.parse(sessionStorage.getItem("o"));

document.getElementById("forx").innerHTML = sessionStorage.getItem("x");
document.getElementById("foro").innerHTML = sessionStorage.getItem("o");
if(a>b){
document.getElementById("forx").style.color = "green";
document.getElementById("foro").style.color = "red";

}
else {
    document.getElementById("foro").style.color = "green";
    document.getElementById("forx").style.color = "red";
    

}

 }