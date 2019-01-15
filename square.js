function square(s){
    if(typeof(s) == 'number'){
        if(s > 0){
            return Math.sqrt(s);
        }else{
            return console.log("error, number is negative");
        }
    }
}

module.exports = sqaure;
