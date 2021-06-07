var city=['lon','cina','ivd','new']
for(mycity of city){
    console.log(mycity)
}








var city=['lon','cina',['bmw','koda'],'ivd','new']
for(mycity of city){
    if(Array.isArray(mycity)){
        for(cars of mycity){
            console.log(cars)
        }
    }else{
        console.log(mycity)
    }
}