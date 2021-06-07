function add(a,b){
    return(a+b)
}





function isEven(userinput){
    var out;
    if((userinput%2==0)){
        out=`number ${userinput} is even`
    
    }else{
        out=`number ${userinput} is odd`
    }
    return out
}




function add(...args){
    let sum=0
    for(data of args){
        sum=data+sum
    }
    return sum
}




var A=[1,2,3]
let sum=0
for(data of A){
    sum=data+sum
    console.log(sum)
}


////method/////

var add=function(a,b){
    return a+b
}
    


////arrow function/////

var add=(a,b)=>{return a+b}

////ifffi////
((){}())


(function(){
    console.log("hi")
}())

   ////generators////
   


   function * loop(userinput){
       for(i=0;i<userinput;i++){
           yield i
       }
   }