function square(s){
    if(typeof(s) == 'number'){
        if(s > 0){
            return Math.sqrt(s);
        }else{
            return -1;
        }
    }else{
        return -1;
    }
}

module.exports = square;
