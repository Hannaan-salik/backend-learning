function genraterandomnumber(){
    return Math.floor(Math.random()*100) + 1;
}

function celsiustoFahrenhiet(celcius){
    return (celcius*9) / 5 + 32;
}

module.exports = {
    genraterandomnumber,
    celsiustoFahrenhiet,
};