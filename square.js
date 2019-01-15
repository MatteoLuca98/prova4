function square(s){
    if(!isNaN(s)){
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
