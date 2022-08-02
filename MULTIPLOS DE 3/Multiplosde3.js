function Multiplos3() {
    let array = [];
    for(let i = 1; i < 101; i++){
        if(i % 3 === 0){
            array.push(i);
        }
    }
return array;
}
console.log(Multiplos3());
